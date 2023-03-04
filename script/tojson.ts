import {parse} from "npm:csv-parse/sync"

const diccsv: string = await Deno.readTextFile("csv/20230304_F2J.csv");
const dicarray = parse(diccsv, { columns: true })
console.log(dicarray)
