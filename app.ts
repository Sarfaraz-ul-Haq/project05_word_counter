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
};

// function to ask user to use or quit the app
export const continueOrQuit = async () => {
  const options = await inquirer.prompt({
    name: "selected",
    type: "list",
    choices: ["Use the app again", "Quit app"],
  });
  if (options.selected == "Use the app again") {
    await start();
  } else {
    thanks();
  }
};

await displayTitleAndTagline();
await start();
continueOrQuit();
