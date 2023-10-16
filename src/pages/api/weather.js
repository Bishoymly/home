export default async function (req, res) {
  if (!process.env.OPEN_WEATHER_API_KEY) {
    res.status(500).json({
      error: {
        message:
          "Open Weather API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  try {
    let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    if (ip === "::1") ip = "99.178.129.156";
    var user = await getUserLocation(ip);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${user.latitude}&lon=${user.longitude}&units=imperial&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
}

async function getUserLocation(ip) {
  let latitude, longitude, city;
  try {
    const url = `http://ip-api.com/json/${ip}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    city = data.city;
    latitude = data.lat;
    longitude = data.lon;
  } catch (error) {
    console.log(error);
  }

  return { city, latitude, longitude };
}
