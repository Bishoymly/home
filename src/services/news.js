"use client";
import Widget from "@/components/widget";
import { useEffect, useState } from "react";

export default function News(props) {
  const [news, setNews] = useState({});

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const response = await fetch("/api/news");
      const data = await response.json();
      console.log(data);
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  return news.articles ? (
    <Widget
      key="news"
      className="p-0 overflow-auto hover:bg-white hover:text-black"
      {...props}
    >
      <span className="text-xl flex items-start p-3">News</span>
      <ul className="divide-y divide-slate-100">
        {news.articles.map((a) => (
          <article className="flex items-start space-x-4 p-3 hover:opacity-80">
            <img
              src={a.urlToImage}
              alt=""
              width="60"
              height="88"
              className="flex-none rounded-md bg-slate-100"
            />
            <a target="_blank" href={a.url}>
              <h2 className="font-semibold text-base text-left">{a.title}</h2>
            </a>
          </article>
        ))}
      </ul>
    </Widget>
  ) : (
    <span key="news"></span>
  );
}
