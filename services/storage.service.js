import { homedir } from "os";
import { join } from "path"; //for work with path | relative - how many steps without directory (1, 2)
import { promises } from "fs";

const filePath = join(homedir(), "./keyStore/weather-data.json");

const TOKEN_DICTIONARY = {
  token: "token",
  city: "city",
  limit: "limit",
};

const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }

  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
  //   console.log(dirname(filePath) + "/" + basename(filePath) + '.' + extname(filePath));
  //   console.log(relative(filePath , dirname(filePath)))
  //   console.log(resolve('..')) // when you stope after click on this link
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

const isExist = async (path) => {
  try {
    await promises.stat(path); // chek exist that file or not if file doesn't find break function, because we should wrapp that function try/catch/finally
    return true;
  } catch (e) {
    return false;
  }
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };
