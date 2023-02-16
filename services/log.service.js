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
        -help for output helps
        -s [CITY] for install city
        -t [API_KEY] for output tokens
        `)
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent(`${chalk.bgYellow(" WEATHER ")} Weather in ${res.name}
    ${icon} ${res.weather[0].description}
    Temperature: ${res.main.temp} (fill like ${res.main.feels_like})
    Speed wind: ${res.wind.speed} m/s
    Humidity: ${res.main.humidity}
        `)
  );
};

export { printError, printSuccess, printHelp, printWeather };
