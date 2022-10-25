use moon_config::{ConfigError, GlobalProjectConfig, TaskCommandArgs};
use moon_constants::CONFIG_GLOBAL_PROJECT_FILENAME;
use moon_utils::string_vec;
use moon_utils::test::get_fixtures_dir;
use std::collections::{BTreeMap, HashMap};
use std::path::Path;

fn load_jailed_config(root: &Path) -> Result<GlobalProjectConfig, figment::Error> {
    match GlobalProjectConfig::load(root.join(CONFIG_GLOBAL_PROJECT_FILENAME)) {
        Ok(cfg) => Ok(cfg),
        Err(error) => Err(match error {
            ConfigError::FailedValidation(errors) => errors.first().unwrap().to_owned(),
            ConfigError::Figment(f) => f,
            e => figment::Error::from(e.to_string()),
        }),
    }
}

#[test]
fn loads_defaults() {
    figment::Jail::expect_with(|jail| {
        jail.create_file(
            CONFIG_GLOBAL_PROJECT_FILENAME,
            r#"
fileGroups:
    sources:
        - src/**/*"#,
        )?;

        let config = load_jailed_config(jail.directory())?;

        assert_eq!(
            config,
            GlobalProjectConfig {
                extends: None,
                file_groups: HashMap::from([(String::from("sources"), string_vec!["src/**/*"])]),
                tasks: BTreeMap::new(),
                schema: String::new(),
            }
        );

        Ok(())
    });
}

mod extends {
    use super::*;
    use moon_config::{TaskConfig, TaskOptionsConfig};
    use pretty_assertions::assert_eq;
    use std::fs;

    #[test]
    fn recursive_merges() {
        let fixture = get_fixtures_dir("config-extends/project");
        let config = GlobalProjectConfig::load(fixture.join("global-2.yml")).unwrap();

        assert_eq!(
            config,
            GlobalProjectConfig {
                file_groups: HashMap::from([
                    ("sources".to_owned(), string_vec!["sources/**/*"]), // NOT src/**/*
                    ("tests".to_owned(), string_vec!["tests/**/*"]),
                ]),
                tasks: BTreeMap::from([
                    (
                        "lint".to_owned(),
                        TaskConfig {
                            command: Some(TaskCommandArgs::String("eslint".to_owned())),
                            ..TaskConfig::default()
                        },
                    ),
                    (
                        "format".to_owned(),
                        TaskConfig {
                            command: Some(TaskCommandArgs::String("prettier".to_owned())),
                            ..TaskConfig::default()
                        },
                    ),
                    (
                        "test".to_owned(),
                        TaskConfig {
                            command: Some(TaskCommandArgs::String("noop".to_owned())),
                            ..TaskConfig::default()
                        },
                    )
                ]),
                ..GlobalProjectConfig::default()
            }
        )
    }

    #[test]
    // #[should_panic(
    //     expected = "invalid type: found unsigned int `123`, expected a string for key \"globalProject.extends\""
    // )]
    #[should_panic(expected = "Invalid <id>extends</id> field, must be a string.")]
    fn invalid_type() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(super::CONFIG_GLOBAL_PROJECT_FILENAME, "extends: 123")?;

            super::load_jailed_config(jail.directory())?;

            Ok(())
        });
    }

    #[test]
    // #[should_panic(
    //     expected = "Must be a valid URL or relative file path (starts with ./) for key \"globalProject.extends\""
    // )]
    #[should_panic(expected = "only YAML documents are supported")]
    fn not_a_url_or_file() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                "extends: random value",
            )?;

            super::load_jailed_config(jail.directory())?;

            Ok(())
        });
    }

    #[test]
    #[should_panic(expected = "only HTTPS URLs are supported")]
    fn not_a_https_url() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                "extends: http://domain.com/config.yml",
            )?;

            super::load_jailed_config(jail.directory())?;

            Ok(())
        });
    }

    #[test]
    // #[should_panic(expected = "Must be a YAML document for key \"globalProject.extends\"")]
    #[should_panic(expected = "only YAML documents are supported")]
    fn not_a_yaml_url() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                "extends: https://domain.com/file.txt",
            )?;

            super::load_jailed_config(jail.directory())?;

            Ok(())
        });
    }

    #[test]
    // #[should_panic(expected = "Must be a YAML document for key \"globalProject.extends\"")]
    #[should_panic(expected = "only YAML documents are supported")]
    fn not_a_yaml_file() {
        figment::Jail::expect_with(|jail| {
            fs::create_dir_all(jail.directory().join("shared")).unwrap();

            jail.create_file("shared/file.txt", "")?;

            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                "extends: ./shared/file.txt",
            )?;

            super::load_jailed_config(jail.directory())?;

            Ok(())
        });
    }

    fn create_merged_tasks() -> BTreeMap<String, TaskConfig> {
        BTreeMap::from([
            (
                "onlyCommand".to_owned(),
                TaskConfig {
                    command: Some(TaskCommandArgs::String("a".to_owned())),
                    ..TaskConfig::default()
                },
            ),
            (
                "stringArgs".to_owned(),
                TaskConfig {
                    command: Some(TaskCommandArgs::String("b".to_owned())),
                    args: Some(TaskCommandArgs::String("string args".to_owned())),
                    ..TaskConfig::default()
                },
            ),
            (
                "arrayArgs".to_owned(),
                TaskConfig {
                    command: Some(TaskCommandArgs::String("c".to_owned())),
                    args: Some(TaskCommandArgs::Sequence(string_vec!["array", "args"])),
                    ..TaskConfig::default()
                },
            ),
            (
                "inputs".to_owned(),
                TaskConfig {
                    command: Some(TaskCommandArgs::String("d".to_owned())),
                    inputs: Some(string_vec!["src/**/*"]),
                    ..TaskConfig::default()
                },
            ),
            (
                "options".to_owned(),
                TaskConfig {
                    command: Some(TaskCommandArgs::String("e".to_owned())),
                    options: TaskOptionsConfig {
                        run_in_ci: Some(false),
                        ..TaskOptionsConfig::default()
                    },
                    ..TaskConfig::default()
                },
            ),
        ])
    }

    #[test]
    fn loads_from_file() {
        use pretty_assertions::assert_eq;

        figment::Jail::expect_with(|jail| {
            fs::create_dir_all(jail.directory().join("shared")).unwrap();

            jail.create_file(
                format!("shared/{}", super::CONFIG_GLOBAL_PROJECT_FILENAME),
                include_str!("../../../tests/fixtures/config-extends/.moon/project.yml"),
            )?;

            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                r#"
extends: ./shared/project.yml

fileGroups:
    sources:
        - sources/**/*
    configs:
        - '*.js'
"#,
            )?;

            let config: GlobalProjectConfig = super::load_jailed_config(jail.directory())?;

            // Ensure values are deep merged
            assert_eq!(
                config.file_groups,
                HashMap::from([
                    ("sources".to_owned(), string_vec!["sources/**/*"]), // NOT src/**/*
                    ("tests".to_owned(), string_vec!["tests/**/*"]),
                    ("configs".to_owned(), string_vec!["*.js"])
                ])
            );

            assert_eq!(config.tasks, create_merged_tasks());

            Ok(())
        });
    }

    #[test]
    fn loads_from_url() {
        use pretty_assertions::assert_eq;

        figment::Jail::expect_with(|jail| {
            jail.create_file(
                    super::CONFIG_GLOBAL_PROJECT_FILENAME,
r#"
extends: https://raw.githubusercontent.com/moonrepo/moon/master/tests/fixtures/config-extends/.moon/project.yml

fileGroups:
    sources:
        - sources/**/*
    configs:
        - '*.js'
"#,
                )?;

            let config: GlobalProjectConfig = super::load_jailed_config(jail.directory())?;

            // Ensure values are deep merged
            assert_eq!(
                config.file_groups,
                HashMap::from([
                    ("sources".to_owned(), string_vec!["sources/**/*"]), // NOT src/**/*
                    ("tests".to_owned(), string_vec!["tests/**/*"]),
                    ("configs".to_owned(), string_vec!["*.js"])
                ])
            );

            assert_eq!(config.tasks, create_merged_tasks());

            Ok(())
        });
    }

    //         #[test]
    //         #[should_panic(expected = "TODO")]
    //         fn handles_invalid_url() {
    //             figment::Jail::expect_with(|jail| {
    //                 jail.create_file(
    //                     super::CONFIG_GLOBAL_PROJECT_FILENAME,
    //                     r#"
    // extends: https://raw.githubusercontent.com/this/is/an/invalid/file.yml

    // fileGroups: {}
    // "#,
    //                 )?;

    //                 super::load_jailed_config(jail.directory())?;

    //                 Ok(())
    //             });
    //         }
}

mod file_groups {
    #[test]
    #[should_panic(
        expected = "invalid type: found unsigned int `123`, expected a map for key \"globalProject.fileGroups\""
    )]
    fn invalid_type() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(super::CONFIG_GLOBAL_PROJECT_FILENAME, "fileGroups: 123")?;

            super::load_jailed_config(jail.directory())?;

            Ok(())
        });
    }

    #[test]
    #[should_panic(
        expected = "invalid type: found unsigned int `123`, expected a sequence for key \"globalProject.fileGroups.sources\""
    )]
    fn invalid_value_type() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                r#"
fileGroups:
    sources: 123"#,
            )?;

            super::load_jailed_config(jail.directory())?;

            Ok(())
        });
    }
}

mod tasks {
    use super::*;
    use moon_config::TaskConfig;

    #[test]
    #[should_panic(
        expected = "invalid type: found unsigned int `123`, expected a map for key \"globalProject.tasks\""
    )]
    fn invalid_type() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                r#"
fileGroups: {}
tasks: 123
"#,
            )?;

            super::load_jailed_config(jail.directory())?;

            Ok(())
        });
    }

    #[test]
    #[should_panic(
        expected = "invalid type: found unsigned int `123`, expected struct TaskConfig for key \"globalProject.tasks.test\""
    )]
    fn invalid_value_type() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                r#"
fileGroups: {}
tasks:
    test: 123
"#,
            )?;

            super::load_jailed_config(jail.directory())?;

            Ok(())
        });
    }

    #[test]
    #[should_panic(
        expected = "expected a string or a sequence of strings for key \"globalProject.tasks.test.command\""
    )]
    fn invalid_value_field() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                r#"
fileGroups: {}
tasks:
    test:
        command: 123
"#,
            )?;

            super::load_jailed_config(jail.directory())?;

            Ok(())
        });
    }

    #[test]
    #[should_panic(expected = "An npm/system command is required")]
    fn invalid_value_empty_field() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                r#"
fileGroups:
    sources: []
tasks:
    test: {}
"#,
            )?;

            super::load_jailed_config(jail.directory())?;

            Ok(())
        });
    }

    #[test]
    fn can_use_references() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                r#"
tasks:
    build: &webpack
        command: 'webpack'
        inputs:
            - 'src/**/*'
    start:
        <<: *webpack
        args: 'serve'
"#,
            )?;

            let config: GlobalProjectConfig = super::load_jailed_config(jail.directory())?;

            assert_eq!(
                config.tasks.get("build").unwrap(),
                &TaskConfig {
                    command: Some(TaskCommandArgs::String("webpack".to_owned())),
                    inputs: Some(string_vec!["src/**/*"]),
                    ..TaskConfig::default()
                }
            );

            assert_eq!(
                config.tasks.get("start").unwrap(),
                &TaskConfig {
                    command: Some(TaskCommandArgs::String("webpack".to_owned())),
                    args: Some(TaskCommandArgs::String("serve".to_owned())),
                    inputs: Some(string_vec!["src/**/*"]),
                    ..TaskConfig::default()
                }
            );

            Ok(())
        });
    }

    #[test]
    fn can_use_references_from_root() {
        figment::Jail::expect_with(|jail| {
            jail.create_file(
                super::CONFIG_GLOBAL_PROJECT_FILENAME,
                r#"
_webpack: &webpack
    command: 'webpack'
    inputs:
        - 'src/**/*'

tasks:
    build: *webpack
    start:
        <<: *webpack
        args: 'serve'
"#,
            )?;

            let config: GlobalProjectConfig = super::load_jailed_config(jail.directory())?;

            assert_eq!(
                config.tasks.get("build").unwrap(),
                &TaskConfig {
                    command: Some(TaskCommandArgs::String("webpack".to_owned())),
                    inputs: Some(string_vec!["src/**/*"]),
                    ..TaskConfig::default()
                }
            );

            assert_eq!(
                config.tasks.get("start").unwrap(),
                &TaskConfig {
                    command: Some(TaskCommandArgs::String("webpack".to_owned())),
                    args: Some(TaskCommandArgs::String("serve".to_owned())),
                    inputs: Some(string_vec!["src/**/*"]),
                    ..TaskConfig::default()
                }
            );

            Ok(())
        });
    }
}