import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import { createSpinner } from "nanospinner";

// function to display "currency convertor" title and tagline
export const displayTitleAndTagline = async () => {
  console.clear();
  await showBanner(
    `      Word Counter`,
    `  This CLI app can be used to count the number of words and characters in a paragraph
   ___________________________________________________________________________________`,
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
  const charactersArr = paragraph.split("");
  return charactersArr.length;
};

// spinner function
export const counterSpinner = async (message: { [key: string]: any }) => {
  const spinner = createSpinner(chalk.red(`Counting...`)).start();

  setTimeout(() => {
    spinner.success(message);
  }, 3000);
};
