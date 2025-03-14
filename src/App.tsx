// import { useState } from 'react'
// import "./App.css";
import "./index.css";
import Badge from "./badge.tsx";
import Card from "./card.tsx";
import { useEffect, useState } from "react";
import Loading from "./loading.tsx";
import axios, { AxiosResponse } from "axios";
import { Topic, Article } from "./types.tsx";

export default function App() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("https://blogapi.zel.kim/topics")
      .then((res: AxiosResponse) => {
        setTopics(res.data);
      })
      .catch((err) => {
        console.error("couldn't load :(", err);
      });

    axios
      .get("https://blogapi.zel.kim/posts")
      .then((res: AxiosResponse) => {
        setArticles(res.data.reverse());
      })
      .catch((err) => {
        console.error("couldn't load :(", err);
      });
  }, []);

  if (!topics) return <Loading />;

  return (
    <div className="w-screen min-h-screen bg-[#181520] flex items-center justify-center">
      <div className="flex px-8 w-full sm:px-0 sm:w-118 sm:pt-16 min-h-[50vh] flex-col items-center justify-center">
        <div className="w-full geist-black text-4xl text-start">
          zel's brain dump
        </div>
        <div className="w-full text-sm geist-body pt-4 leading-5">
          For a bit of context of who I am, I'm currently the tech lead of{" "}
          <b>La Salle Computer Society</b>, previously a science and technology
          writer for <b>The Eastviscian </b>
          and currently a web staffer for <b> TheLaSallian</b>. I might have
          developer blogs here and there, but this generally a brain dump where
          I post literally anything and everything.
        </div>

        <div className="w-full geist-bold text-lg pt-6">
          What interests you that interests me?
        </div>

        <div className="w-full flex pt-2 pb-4 align-start gap-2">
          {topics.map((topic: Topic) => (
            <Badge
              key={topic.title}
              name={topic.title}
              bgColor={topic.primaryColor}
              textColor={topic.secondaryColor}
            />
          ))}
        </div>
        {articles.map((article: Article) => (
          <Card
            key={article.slug}
            title={article.title}
            category={article.category}
            textColor={
              topics.find((topic: Topic) => topic.title == article.category)
                ?.secondaryColor ?? "#000"
            }
            bgColor={
              topics.find((topic: Topic) => topic.title == article.category)
                ?.primaryColor ?? "#000"
            }
            image={article.imageurl}
            onclick={`/${article.slug}`}
          >
            {article.caption}
          </Card>
        ))}
      </div>
    </div>
  );
}
