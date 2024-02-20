// function to count number of words in a paragraph
export const countWordsInParagraph = (paragraph: string): number => {
  const wordsArr = paragraph.split(" ");
  return wordsArr.length;
};
