// import https from "https";
import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return ' ☀️ ';
		case '02':
			return ' 🌤️ ';
		case '03':
			return ' ☁️ ';
		case '04':
			return ' ☁️ ';
		case '09':
			return ' 🌧️ ';
		case '10':
			return ' 🌦️ ';
		case '11':
			return ' 🌩️ ';
		case '13':
			return ' ❄️ ';
		case '50':
			return ' 🌫️ ';
	}
};

const getWeather = async (city) => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));

  if (!token) {
    throw new Error(
      "Didn't added api Key, will add it through command -t [API_KEY]"
    );
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    }
  );
  return data;
  //   const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  //   url.searchParams.append("q", city);
  //   url.searchParams.append("appid", token);
  //   url.searchParams.append("lan", "ru");
  //   url.searchParams.append("units", "metrics");
  //   https.get(
  //     `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid={API key}`
  //   );
  //   https.get(url, (responce) => {
  //     let res = "";
  //     responce.on("data", (chunk) => (res += chunk));
  //     responce.on("end", () => console.log("res:", res));
  //     responce.on("error", (e) => console.error(e.message));
  //   });
};

export { getWeather, getIcon };
