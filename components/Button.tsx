import Link from "next/link";
import React, { useState, useEffect } from "react";
import variables from "../styles/variables.module.scss";

interface IItem {
  title: string;
  id: string;
  link: boolean;
  counter?(value: any): any;
}

const Button = ({ title, id, link, counter }: IItem) => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const updateCount = (id: any) => {
    setCount(count + 1);
    counter ? counter(count + 1) : console.log("sj");
  };
  return link ? (
    <Link href={`product/${id}`}>
      <button
        className={variables.buttonOne}
        style={{ marginLeft: "5px", flex: 1 }}
      >
        {title}
      </button>
    </Link>
  ) : (
    <button
      className="btn btn-success"
      style={{ marginLeft: "5px", flex: 1 }}
      onClick={() => updateCount(id)}
    >
      {title}
    </button>
  );
};

export default Button;
