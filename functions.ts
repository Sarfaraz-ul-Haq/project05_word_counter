import inquirer from "inquirer";
import chalk from "chalk";
import start from "./app.js";
import showBanner from "node-banner";
import { createSpinner } from "nanospinner";

// function to display "currency convertor" title and tagline
export const displayTitleAndTagline = async () => {
  console.clear();
  await showBanner(
    `      Word Counter`,
    `  This CLI app can count the number of words and characters in a paragraph
   ________________________________________________________________________`,
    "green",
    "gray"
  );
};

// function to display message after quitting the
export const thanks = async () => {
  await showBanner(`Thanks for trying`, undefined, "green");
};

// function to find number of words in a paragraph
export const countWordsInParagraph = (paragraph: string): number => {
  const wordsArr = paragraph.split(" ");
  return wordsArr.length;
};

// function to find number of characters in a paragraph
export const countCharactersInParagraph = (paragraph: string): number => {
  paragraph = paragraph.replace(/ /g, "");
  const characters = paragraph.split("");
  return characters.length;
};

// spinner function
export const counterSpinner = async (message: { [key: string]: any }) => {
  const spinner = createSpinner(chalk.red(`Counting...`)).start();

  setTimeout(() => {
    spinner.success(message);
  }, 3000);
};

// function to ask user to use or quit the app
export const continueOrQuit = async () => {
  const options = await inquirer.prompt({
    name: "selected",
    type: "list",
    choices: ["Use the app again", "Quit app"],
  });
  if (options.selected == "Continue") {
    start();
  } else {
    thanks();
  }
};
