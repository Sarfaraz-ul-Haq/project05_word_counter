// function to find number of words in a paragraph
export const wordsInParagraph = (paragraph: string): number => {
  const words = paragraph.split(" ");
  return words.length;
};

// function to find number of characters in a paragraph
export const charactersInParagraph = (paragraph: string): number => {
  paragraph = paragraph.replace(/ /g, "");
  const characters = paragraph.split("");
  return characters.length;
};
