import { promises as fs } from "fs";
import { v4 as uuid } from "uuid";

const readFile = fs.readFile;
const writeFile = fs.writeFile;

export const CommentsController = {
  get: async () => {
    const data = await readFile(`db/comments.json`, "utf-8");
    return JSON.parse(data);
  },
  new: async (body) => {
    const data = await readFile(`db/comments.json`, "utf-8");
    const date = new Date().toLocaleDateString("ru-RU");

    body.date = date;
    body.id = uuid();
    const jsonData = JSON.parse(data);

    jsonData.unshift(body);

    writeFile("db/comments.json", JSON.stringify(jsonData));
    return body;
  },
};
