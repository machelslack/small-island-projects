import React, { useState } from "react";
import Link from "next/link";
import { HelloWorld } from "@small-island-projects/small-island-components/lib/esm/index.js";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship it. 🚀" />
      <h1 className="title">
        Read{" "}
        <Link href="/projects">
          <a>this page!</a>
        </Link>
      </h1>
      <span>{HelloWorld()}</span>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
