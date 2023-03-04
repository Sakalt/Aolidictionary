import { parse } from "npm:csv-parse/sync";
import { getProcessWords } from "./functions/toJson.ts";
import { Word } from "./types/Word.ts";

const diccsv: string = await Deno.readTextFile("csv/20230304_F2J.csv");
const dicarray: Word[] = parse(diccsv, { columns: true });

const processedWords = getProcessWords(dicarray);

const data = JSON.stringify(processedWords, null, 2);
await Deno.writeTextFile("result/output.json", data);
