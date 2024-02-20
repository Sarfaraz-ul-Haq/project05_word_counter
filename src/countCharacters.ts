// function to count number of characters in a paragraph
export const countCharactersInParagraph = (paragraph: string): number => {
  paragraph = paragraph.replace(/ /g, "");
  const charactersArr = paragraph.split("");
  return charactersArr.length;
};
