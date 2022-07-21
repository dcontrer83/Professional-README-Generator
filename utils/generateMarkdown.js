// Function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  let link;

  // if else statments for different license to create badge and link for said license
  if(data.license === 'The Unlicense') {
    badge = "https://img.shields.io/badge/license-The_Unlicense-red"
    link = "https://choosealicense.com/licenses/unlicense/"
  }
  else if (data.license === 'GNU AGPLv3') {
    badge = "https://img.shields.io/badge/license-GNU_AGPLv3-red"
    link = "https://choosealicense.com/licenses/agpl-3.0/"
  }
  else if(data.license === 'GNU GPLv3') {
    badge = "https://img.shields.io/badge/license-GNU_GPLv3-red"
    link = "https://choosealicense.com/licenses/gpl-3.0/"
  }
  else if(data.license === 'GNU LGPLv3') {
    badge = "https://img.shields.io/badge/license-GNU_LGPLv3-red"
    link = "https://choosealicense.com/licenses/lgpl-3.0/"
  }
  else if(data.license === 'Mozilla Public License 2.0') {
    badge = "https://img.shields.io/badge/license-Mozilla_Public_License_2.0-red"
    link = "https://choosealicense.com/licenses/mpl-2.0/"
  }
  else if(data.license === 'Apache License 2.0') {
    badge = "https://img.shields.io/badge/license-Apache_License_2.0-red"
    link = "https://choosealicense.com/licenses/apache-2.0/"
  }
  else if(data.license === 'MIT License') {
    badge = "https://img.shields.io/badge/license-MIT_License-red"
    link = "https://choosealicense.com/licenses/mit/"
  }
  else {
    badge = "https://img.shields.io/badge/license-Boost_Software_License_1.0-red"
    link = "https://choosealicense.com/licenses/bsl-1.0/"
  }

  return `# ${data.title}

  ![badge](${badge})

  ## Description 
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}

  ## License
  The license that is used for this project is: ${data.license}

  For more information please go to: ${link}

  ## Questions
  GitHub Username: ${data.username}

  Link to GitHub profile: [${data.username} GitHub Profile](https://github.com/${data.username})

  Email Address: ${data.email}

`;
}

module.exports = generateMarkdown;

