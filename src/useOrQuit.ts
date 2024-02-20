import inquirer from "inquirer";
import chalk from "chalk";
import { main } from "./app.js";
import { thanks } from "./thanks.js";

// function to ask user to use or quit the app
export const continueOrQuit = async (): Promise<void> => {
  const options = await inquirer.prompt({
    name: "selected",
    type: "list",
    choices: ["Use the app again", "Quit app"],
    message: chalk.green(`\nSelect an option`),
  });
  if (options.selected == "Use the app again") {
    main();
  } else {
    thanks();
  }
};
