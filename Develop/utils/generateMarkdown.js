// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// https://img.shields.io/badge/license-test--test-lightgrey

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 

  ${data.description}

  - ${data.motivation}
  - ${data.problem}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  Please follow the [Contributor Covenant v2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

To contact me, my github is gitHub is [${data.gitUsername}](https://github.com/${data.gitUsername}) and my email is ${data.email}.

## Testing
`;
}

module.exports = generateMarkdown;
