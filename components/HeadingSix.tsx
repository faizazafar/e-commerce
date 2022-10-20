import React from "react";
import variables from '../styles/variables.module.scss'
import { Title } from "../types";
const HeadingSix = ({ title } : Title) => {
  return (
    <div className="row justify-content-between mx-0">
      <h6 className={variables.color}>${title}</h6>
    </div>
  );
};

export default HeadingSix;
