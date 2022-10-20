import React from "react";
import { Title } from "../types";


const HeadingFive = ({ title, headingTwo }: Title) => {
  return headingTwo ? (
    <h2 className="text-uppercase">{title}</h2>
  ) : (
    <h5 className="card-title">{title}</h5>
  );
};

export default HeadingFive;
