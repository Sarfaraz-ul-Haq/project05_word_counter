#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { startingApp } from "./startingApp.js";
import { displayTitleAndTagline } from "./displayTitle.js";
import { counterSpinner } from "./countingSpinner.js";
import { countWordsInParagraph } from "./countWords.js";
import { countCharactersInParagraph } from "./countCharacters.js";
import { continueOrQuit } from "./useOrQuit.js";

export const main = async () => {
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

await startingApp();
await displayTitleAndTagline();
main();
