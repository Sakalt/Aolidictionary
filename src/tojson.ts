import { parse } from "npm:csv-parse/sync";

interface Word {
  word: string;
  mean: string;
  append: string;
}

const diccsv: string = await Deno.readTextFile("csv/20230304_F2J.csv");
const dicarray: Word[] = parse(diccsv, { columns: true });

const processedWords = dicarray.map((v) => {
  const meanings = v.mean
    .split("\n")
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

const data = JSON.stringify(processedWords, null, 2);

await Deno.writeTextFile("result/output.json", data);
