import React from "react";
import { accordionData } from "../components/AccordionData";
import { AccordionItem } from "../components/AccordionItem";
import "../styles/accordion.css";

const Accordion = () => {
  return (
    <main>
      <div className="accordion">
        {accordionData.map((section) => {
          return (
            <AccordionItem
              id={section.id}
              number={section.number}
              text={section.text}
              icon={section.icon}
              content={section.content}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Accordion;
