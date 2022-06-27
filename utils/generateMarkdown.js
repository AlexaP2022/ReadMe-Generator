// Function that generates the badge/link if user selects a specific license.  If they select "none of these", then an empty string is returned.
function renderLicenseBadge(license) {
  if(license === "none of these") {
    return "";
  } else {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
}



// Function that generates the markdown.  In line 30 below: ternary operator used to create a conditional based on if "none of these" is selected then an alert fo no licenses selected appears otherwise, the appropriate license is listed.
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description:
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Contact](#contact)
## Installation
${data.installation}
## Usage
${data.usage}
## License:
${renderLicenseBadge(data.license)}
 ${data.license === "none of these" ? "No license(s) selected" : `This project is protected under ` + data.license} 
## Contributors
${data.contributors}
## Contact 
If you have any questions, please feel free to reach out below: <br>
-Github: [${data.github}](http://github.com/${data.github}) <br>
-Email: [${data.email}](mailto:user@example.com)`;
}

module.exports = generateMarkdown;
