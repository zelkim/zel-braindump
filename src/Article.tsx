// import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import "./index.css";
import Badge from "./badge.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { Article as ArticleType, Topic } from "./types.tsx";
import Loading from "./loading.tsx";
import { Helmet } from "react-helmet-async";

export default function Article() {
  const { articleid } = useParams();
  const [article, setArticleData] = useState<ArticleType | null>(null);
  const [topic, setTopicData] = useState<Topic | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://blogapi.zel.kim/post/${articleid}`)
      .then((response) => {
        setArticleData(response.data);
      })
      .catch((error) => {
        console.error("article error", error);
        setArticleData(null);
      });
  }, [articleid]);

  useEffect(() => {
    if (!article?.category) return; // ✅ Prevents fetching topics before `article` is ready

    axios
      .get(`https://blogapi.zel.kim/topics`)
      .then((response) => {
        const topicData = response.data.find(
          (topic: Topic) => topic.title === article.category,
        );
        console.log("topicData", topicData);
        setTopicData(topicData || null);
      })
      .catch((error) => {
        console.error("topic error", error);
        setTopicData(null);
      });
  }, [article]); // ✅ Runs only after `article` is set  // Show loading until both article and topic are fetched

  if (!article || !topic) return <Loading />;

  console.log(article);

  return (
    <div
      className="w-screen min-h-screen flex items-center justify-center trasition-colors duration-500"
      style={{ backgroundColor: topic?.tertiaryColor }}
    >
      <Helmet>
        <title>{`zel.kim | ${article?.title || "Loading..."}`}</title>
        <meta name="description" content={article?.caption || ""} />
        <meta property="og:title" content={article?.title || ""} />
        <meta property="og:description" content={article?.caption || ""} />
        <meta property="og:image" content={article?.imageurl || ""} />
        <meta property="og:url" content={`https://zel.kim/${articleid}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article?.title || ""} />
        <meta name="twitter:description" content={article?.caption || ""} />
        <meta name="twitter:image" content={article?.imageurl || ""} />
      </Helmet>

      <div className="flex px-8 pt-16 w-full sm:px-0 sm:w-118 min-h-[50vh] flex-col items-center justify-start self-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 self-start mb-4 hover:opacity-50 transition duration-300 hover:cursor-pointer"
          onClick={() => navigate(-1) || navigate("/")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        <div className="w-full geist-black text-4xl text-start">
          {article?.title}
        </div>
        <div className="w-full geist-body text-sm text-start pt-1">
          {`${new Date(article?.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            | ${article?.views} views
            `}
        </div>

        <div
          className="w-full text-normal geist-body pt-4 leading-5"
          style={{ color: topic?.secondaryColor }}
        >
          {article?.caption}
        </div>

        <div className="w-full flex pt-2 pb-4 align-start gap-2">
          <Badge
            name={topic?.title || ""}
            bgColor={topic?.primaryColor || "#000"}
            textColor={topic?.secondaryColor || "#fff"}
          />
        </div>

        {article?.imageurl && (
          <img
            className="w-full h-50 pt-4 sm:pt-0 sm:w-full sm:h-60 object-cover"
            src={article.imageurl}
            alt={article.title}
          />
        )}

        <div className="w-full text-normal geist-body pt-4 leading-5 whitespace-pre-line pb-8">
          <Markdown>{article?.content || ""}</Markdown>
          <p className="text-center pt-4">###</p>
        </div>
      </div>
    </div>
  );
}
