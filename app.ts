#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import {
  displayTitleAndTagline,
  thanks,
  countWordsInParagraph,
  countCharactersInParagraph,
  counterSpinner,
} from "./functions.js";

const start = async () => {
  // prompt the user to enter an English paragraph and select an option
  const { paragraph, selectedOption } = await inquirer.prompt([
    {
      name: "paragraph",
      type: "input",
      message: chalk.green(`\n\n Enter a paragraph in English: `),
    },
    {
      name: "selectedOption",
      type: "list",
      choices: ["Count the words", "Count the characters"],
      message: chalk.green(`\n Select an option`),
    },
  ]);
  // execute the selected operation
  if (selectedOption === "Count the words") {
    const numOfWords = countWordsInParagraph(paragraph);
    await counterSpinner({
      text: chalk.gray(
        `The number of words in given paragraph is: ${numOfWords}`
      ),
      color: "green",
    });
    continueOrQuit();
  } else if (selectedOption === "Count the characters") {
    const numberOfCharacters = countCharactersInParagraph(paragraph);
    await counterSpinner({
      text: chalk.gray(
        `The number of characters in given paragraph is: ${numberOfCharacters}`
      ),
      color: "green",
    });
    continueOrQuit();
  }
};

// function to ask user to use or quit the app
const continueOrQuit = async () => {
  const options = await inquirer.prompt({
    name: "selected",
    type: "list",
    choices: ["Use the app again", "Quit app"],
    message: chalk.green(`\nSelect an option`),
  });
  if (options.selected == "Use the app again") {
    start();
  } else {
    thanks();
  }
};

await displayTitleAndTagline();
start();
