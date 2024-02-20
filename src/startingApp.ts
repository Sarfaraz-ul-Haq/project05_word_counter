import chalk from "chalk";
import { createSpinner } from "nanospinner";

const sleep = async (): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, 3000);
  });
};

export const startingApp = async (): Promise<void> => {
  const spinner = createSpinner(chalk.green(` Starting App...`));
  spinner.start();
  await sleep();
  spinner.stop();
};
