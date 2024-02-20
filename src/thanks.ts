import showBanner from "node-banner";

// function to display message after quitting the
export const thanks = async (): Promise<void> => {
  await showBanner(`Thanks for trying`, undefined, "green");
};
