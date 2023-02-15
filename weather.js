#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printError, printSuccess, printHelp } from "./services/log.service.js";

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args); // arguments comand strig
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    //save
  }
  if (args.t) {
    //token
  }
};

initCLI();
