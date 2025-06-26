import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Design",
    info: "I've been designing since 2012, love creating logos, posters, products",
    list: [
      "Illustrator is go to for graphics",
      "Recently started designing fun stuff in Procreate",
      "Figma has been my new favourite thing since 2022",
    ],
  },
  {
    id: 2,
    title: "Develop",
    info: "Since I did the web design course in 2011, I was hooked from day one",
    list: [
      "Most of my experience in with Shopify sites",
      "Built a React web app called GluGo for finding Gluten Free restaurants",
      "Experience with Wordpress",
    ],
  },
  {
    id: 3,
    title: "Manage",
    info: "Managing projects from start to finish.",
    list: [
      "People managment in Shopify",
      "Project managing in startups",
      "Time management and organisation",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="What can I do?"
          sortTitle="My Top Skills"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
