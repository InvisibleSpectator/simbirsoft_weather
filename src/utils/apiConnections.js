async function ipinfoConnent(token) {
  const response = await fetch(`https://ipinfo.io/json?token=${token}`);
  const json = await response.json();
  return json;
}

async function openweatherConnect(token, coord) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.latitude}&lon=${coord.longitude}&exclude=minutely,hourly&appid=${token}&lang=ru&units=metric`
  );
  const json = await response.json();
  return json;
}

async function opencageConnect(token, coord, lang) {
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?key=${token}&language=${lang}&q=${coord}`
  );
  const json = await response.json();
  return json;
}

export default {
  ipinfoConnent,
  openweatherConnect,
  opencageConnect,
};