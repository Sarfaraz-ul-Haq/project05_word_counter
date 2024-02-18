import inquirer from "inquirer";
import chalk from "chalk";
import {
  displayTitleAndTagline,
  countWordsInParagraph,
  countCharactersInParagraph,
  counterSpinner,
  continueOrQuit,
} from "./functions.js";

export const start = async () => {
  // function to prompt the user to enter an English paragraph and select an option
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
  if (selectedOption === "Count the words") {
    const numOfWords = countWordsInParagraph(paragraph);
    counterSpinner({
      text: chalk.gray(
        `The number of words in given paragraph is: ${numOfWords}`
      ),
      color: "green",
    });
  } else if (selectedOption === "Count the characters") {
    const numberOfCharacters = countCharactersInParagraph(paragraph);
    counterSpinner({
      text: chalk.gray(
        `The number of characters in given paragraph is: ${numberOfCharacters}`
      ),
      color: "green",
    });
  }
  //   continueOrQuit();
};

await displayTitleAndTagline();
start();
