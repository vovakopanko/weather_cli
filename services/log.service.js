import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR: ") + " " + error);
};

const printSuccess = (msg) => {
  console.log(chalk.bgGreen("SUCCESS: ") + " " + msg);
};

const printHelp = () => {
  console.log(
    dedent(`${chalk.bgCyan(" HELP ")}
        Without parmetrs - output the weather
        -s [CITY] for install city
        -h for output helps
        -t [API_KEY] for output tokens
        `)
  );
};

export { printError, printSuccess, printHelp };
