// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    switch (license) {
        case "GNU AGPLv3":
            return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
        case "GNU GPLv3":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        case "GNU LGPLv3":
            return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
        case "Mozilla Public License 2.0":
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        case "Apache License 2.0":
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        case "MIT License":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        case "Boost Software License 1.0":
            return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        case "Unlicense":
            return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
        default:
            return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "GNU AGPLv3":
            return `https://www.gnu.org/licenses/agpl-3.0`;
        case "GNU GPLv3":
            return `https://www.gnu.org/licenses/gpl-3.0`;
        case "GNU LGPLv3":
            return `https://www.gnu.org/licenses/lgpl-3.0`;
        case "Mozilla Public License 2.0":
            return `https://opensource.org/licenses/MPL-2.0`;
        case "Apache License 2.0":
            return `https://opensource.org/licenses/Apache-2.0`;
        case "MIT License":
            return `https://opensource.org/licenses/MIT`;
        case "Boost Software License 1.0":
            return `https://www.boost.org/LICENSE_1_0.txt`;
        case "Unlicense":
            return `http://unlicense.org/`;
        default:
            return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch (license) {
        case "GNU AGPLv3":
            return `![This repository is covered under GNU AGPLv3.]`;
        case "GNU GPLv3":
            return `![This repository is covered under GNU GPLv3.]`;
        case "GNU LGPLv3":
            return `![This repository is covered under GNU LGPLv3.]`;
        case "Mozilla Public License 2.0":
            return `![This repository is covered under Mozilla Public License 2.0.]`;
        case "Apache License 2.0":
            return `![This repository is covered under Apache License 2.0.]`;
        case "MIT License":
            return `![This repository is covered under MIT License.]`;
        case "Boost Software License 1.0":
            return `![This repository is covered under Boost Software License 1.0]`;
        case "Unlicense":
            return `![This repository is Unlicensed and free to use.]`;
        default:
            return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title} 
    [${renderLicenseSection(data.license)}${renderLicenseBadge(
        data.license
    )}]${renderLicenseLink(data.license)}
    ## Description
    ${data.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Installation
    ${data.installation}
    ## Usage 
    ${data.usage}
    ## Credits
    ${data.credits}
    ## License
    Licensed by ${data.license}
    ## Contributing
    ${data.contribution}
    ## Tests
    ${data.tests}
    ## Questions
    GitHub: [${data.githubProfile}](https://github.com/${data.githubProfile})
    Email: ${data.email} 
    
`;
}

module.exports = generateMarkdown;
