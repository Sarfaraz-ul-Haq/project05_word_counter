import chalk from "chalk";
import { createSpinner } from "nanospinner";

// spinner function - counting words / characters
export const counterSpinner = async (message: {
  [key: string]: any;
}): Promise<{ [key: string]: any }> => {
  return new Promise((resolve) => {
    const spinner = createSpinner(chalk.red(`Counting...`)).start();
    setTimeout(() => {
      let msg = spinner.success(message);
      resolve(msg);
    }, 3000);
  });
};
