import { Word } from "../types/Word";

export const getProcessWords = (dicArray: Word[]) => {
  return processedWords = dicArray.map((v) => {
    const meanings = v.mean
      .split("\n")
    const processedMeanings = meanings
      .map((v) => {
        const whereBrackets = v.indexOf("】");
        const wherePartOfSpeech = whereBrackets - 1;
        const partOfSpeech = v.slice(1, wherePartOfSpeech + 1);
        const explanation = v.slice(wherePartOfSpeech + 2);
        return {
          partOfSpeech,
          explanation,
        };
      });
    return {
      word: v.word,
      meanings,
      append: v.append,
    };
  });
};
