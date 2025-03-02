// import { useState } from 'react'
// import "./App.css";
import "./index.css";
import Badge from "./badge.tsx";
import Card from "./card.tsx";

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-screen min-h-screen bg-[#181520] flex items-center justify-center">
      <div className="flex px-8 w-full sm:px-0 sm:w-118 min-h-[50vh] flex-col items-center justify-center">
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
          <Badge name="#dev" bgColor="#3B3462" textColor="#ACDFED" />
          <Badge
            name="#creativewriting"
            bgColor="#62345F"
            textColor="#D1ACED"
          />
          <Badge name="#rant" bgColor="#623434" textColor="#EDACAC" />
          <Badge name="#dlsu" bgColor="#34623F" textColor="#C5EDAC" />
        </div>
        <Card
          title="'ma, ano ulam?"
          category="#dev"
          textColor="#ACDFED"
          bgColor="#3B3462"
          image="https://picsum.photos/seed/picsum/200/200"
        >
          #DEV: During Blue Hacks 2025, me and the team created a protocol to
          use SMS as a drop-in replacement for http requests, allowing
          applications to be online even during the hardest times.
        </Card>
      </div>
    </div>
  );
}
