import showBanner from "node-banner";

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
