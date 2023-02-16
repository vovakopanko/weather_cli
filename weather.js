#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getIcon, getWeather } from "./services/api.service.js";
import {
  printError,
  printSuccess,
  printHelp,
  printWeather,
} from "./services/log.service.js";
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("You forgot add token");
    return;
  }
  try {
    printSuccess("Token Saved in your config!");
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("Your field with name current city is empty!");
    return;
  }
  try {
    printSuccess("City Saved in your config!");
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
  } catch (e) {
    printError(e.message);
  }
};

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (error) {
    console.log("ERROR: ", error);
    if (error.response) {
      if (error.response.status === 401) {
        printError("Problem authenticating your browser credentials");
        return;
      }
      if (error.response.status === 404) {
        printError("Incorrect entered name city");
        return;
      }
      printError(error.response.status);
      printError(error.response.headers);
    }
  }
};

console.log("get info : weather.js -help");

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.help) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getForcast();
};

initCLI();
