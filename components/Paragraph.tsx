import React from 'react'
export interface Title {
  title: string;
  headingTwo?: string;
}

const Paragraph = ({title}: Title) => {
  return (
    <p className="card-text">{title}</p> 
    )
}

export default Paragraph