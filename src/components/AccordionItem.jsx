import React, { useState } from "react";

import "../styles/accordion.css";

import { ChevronUp } from "./IconsUpDown";

export const AccordionItem = ({ id, number, text, icon, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? "item border" : "item"} key={id}>
      <p className={isActive ? "number open" : "number"}>{number}</p>

      <p
        onClick={() => setIsActive(!isActive)}
        className={isActive ? "text open" : "text"}
      >
        {text}
      </p>
      <div onClick={() => setIsActive(!isActive)} className="icon-div">
        {isActive ? <ChevronUp /> : icon}
      </div>

      {isActive && (
        <div className="hidden-box">
          <p>{content}</p>

          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              omnis alias ea fuga fugiat voluptatem aspernatur
            </li>
            <li>necessitatibus facilis perferendis tempore</li>
            <li>
              consequuntur repellat maxime, quia vero blanditiis ipsam qui quae
              eaque.
            </li>
            <li>
              it amet consectetur adipisicing elit. Commodi omnis alias ea fuga
              fugiat voluptatem
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
