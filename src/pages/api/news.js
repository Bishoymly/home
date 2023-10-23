export default async function (req, res) {
  if (!process.env.NEWS_API_KEY) {
    res.status(500).json({
      error: {
        message:
          "NewsAPI.org key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        `apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    data.articles = data.articles.filter((a) => a.title !== "[Removed]");
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
}
