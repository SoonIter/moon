// These configs are project-level settings that override those from the root!

use crate::validators::{is_default_true, validate_semver_version};
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use validator::{Validate, ValidationError};

fn validate_node_version(value: &str) -> Result<(), ValidationError> {
    validate_semver_version("toolchain.node.version", value)
}

#[derive(Clone, Debug, Default, Deserialize, Eq, JsonSchema, PartialEq, Serialize, Validate)]
#[schemars(default)]
#[serde(default)]
pub struct ProjectToolchainNodeConfig {
    #[serde(skip_serializing_if = "Option::is_none")]
    #[validate(custom = "validate_node_version")]
    pub version: Option<String>,
}

#[derive(Clone, Debug, Deserialize, Eq, JsonSchema, PartialEq, Serialize, Validate)]
#[schemars(default)]
#[serde(default, rename_all = "camelCase")]
pub struct ProjectToolchainConfig {
    #[serde(skip_serializing_if = "Option::is_none")]
    #[validate]
    pub node: Option<ProjectToolchainNodeConfig>,

    #[serde(skip_serializing_if = "is_default_true")]
    pub typescript: bool,
}

impl Default for ProjectToolchainConfig {
    fn default() -> Self {
        ProjectToolchainConfig {
            node: None,
            typescript: true,
        }
    }
}
