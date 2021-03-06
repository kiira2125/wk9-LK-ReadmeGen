// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


//my list of question
const questions = [
  {
    type: "input",
    //file name here 'project'
    name: "project",
    message: "What is the title of your project?",
    default: "README Generator",
  },

  {
    type: "input",
    name: "description",
    message: "What is your project all about?",
    default: "Creates a README File in js using node",
  },

  {
    type: "input",
    name: "installation",
    message: "How do you install your application?",
    default:
      "Copy the repo to your system, install inquirer, run: node index on terminal",
  },

  {
    type: "input",
    name: "usage",
    message: "What is your application used for?",
    default: "Application is use for creating a README File in node",
  },

  {
    type: "list",
    name: "license",
    message: "What kind of license is used?",
    choices: ["BSD", "MIT", "GPL", "None"],
    default: "MIT",
  },

  {
    type: "input",
    name: "contributing",
    message: "What are the guidelines to contributing?",
    default: "Practice coding, eat, sleep, workout, and, repeat",
  },

  {
    type: "input",
    name: "tests",
    message: "How can I test your application?",
    default: "Terminal window input node i then node index to run program",
  },

  {
    type: "input",
    name: "deploy link",
    message: "What is the link to your deployed project?",
    default: "https://www.linkedin.com/in/luna-kiira-luna-kiira-19971109lk/",
  },

  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
    default: "Kiira2125",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    default: "lunakiira0911@gmail.com",
  },
];


const createReadme = (data) => {
  var license = "";
  var licenseTXT = "";
  switch (data.license[0]) {
    case "BSD":
      license =
        "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      licenseTXT = `[BSD License](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "MIT":
      license =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseTXT = `[MIT License](https://opensource.org/licenses/MIT)`;
      break;
    case "GPL":
      license =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licenseTXT = `[GPL License](https://www.gnu.org/licenses/gpl-3.0)`;

      break;
    default:
      license = "MIT License chosen";
      licenseTXT = ``;
      break;
  }

  fs.writeFileSync(
    "./readme.md",
`# ${data.project}
${license}

## Table of Contents

     **[Description](#description)**
     **[Application](#application)**
     **[installation](#installation)**
     **[Usage](#usage)**
     **[Contribute](#contributing)**
     **[Test-Instructions](#test-Instructions)**
     **[Question](#question)**
     **[license](#license)**
     
## Description

* ${data.description}


## AppSneakPreview
        <p align="center">
    <img alt ='ReadME Generator Demo src="${data.preview}"></p>

## Installation
*${data.install}*

## Usage
*${data.usage}*

## Contribute
 * ${data.contributing}*

## Test-Instructions
*${data.testsInstructions}*

## The questions

#Any questions? Please contact me:
     -** Github Username: ${data.github}** 
     
     -** Github Link: https://github.com/${data.github} **

     -** Email: ${data.email}**

## License
  ** Licensed under the: ${licenseTXT}** 
`
  );
};

// CLI Prompts coding here
inquirer.prompt(questions).then((data) => {
  createReadme(data);
  const filename = `${data.project.toLowerCase().split(" ").join("")}.json`;

  fs.writeFileSync(filename, JSON.stringify(data, null, "\t"), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
});

//CLI Prompts code here
// function init() {
// inq
// .prompt(questions)
// .then((answers) =>{
//     createReadme(answers);
//     console.log('O_~Successfully created README.md');
// });

// np
