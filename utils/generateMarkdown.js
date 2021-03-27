// function to generate markdown for README
function generateMarkdown(data) {
  return `//// ${data.title} ////


  //// Table Of Contents ////
  * [Discription](#discription)
  * [Usage](#usage)
  * [Installation Instructions](#install)
  * [License](#license)
  * [Contribution Guidelines](#contribution)
  * [Tested](#test)
  * [Email](#email)
  * [GitHub](#github)
  
  //// Description ////
  ${data.description}

  //// Useage ////
  ${data.useage}
  
  //// Installation Instructions ////
  ${data.install}

  //// Liscence ////
  ${data.liscence}
  
  //// Contribution Guidelines ////
  ${data.contribution}

  //// Questions? Contact me. ////
  Email: ${data.email}
  Github: ${data.github}
`;
}

module.exports = generateMarkdown;
