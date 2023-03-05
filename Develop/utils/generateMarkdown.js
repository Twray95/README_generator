// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license.license.includes("No License")) {
    return ``;
  } else {
    license.license.replace("-", "--");
    console.log(license.license);
    return `![License](https://img.shields.io/badge/license-${license.license}-lightgrey)`;
  }
}
// https://img.shields.io/badge/license-test--test-lightgrey

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.license.includes("No License")) {
    return ``;
  } else {
    console.log("success");
    return `[License Link](https://choosealicense.com/licenses/${license.license}/)`;
  }
}
//return `[License Link](https://choosealicense.com/licenses/${license.license}/)`;

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.license.includes("No License")) {
    return ``;
  } else {
    return `## License
    ${renderLicenseBadge(license)}
    
    ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("success");
  return `# ${data.title}

  ## Description 

  ${data.description}.

  - My motivation for creating this project was ${data.motivation}.
  - The problem I am trying to solve is ${data.problem}.

  ## Installation

  The steps you need to take to install this project are ${data.installation}.

  ## Usage

  ${data.usage}.

  ## Contribution

  Please follow the [Contributor Covenant v2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

  To contact me, my github is [${data.gitUsername}](https://github.com/${
    data.gitUsername
  }) and my email is ${data.email}.

  ## Testing

  If you would like to test my project, here are a few ways. ${data.tests}.

  ${renderLicenseSection(data)}

`;
}

// module.exports = generateMarkdown;

exports.generateMarkdown = generateMarkdown;
