import React from 'react'

const Image = ({ source}: any) => {
  return (
    <div>
     <img src={source} className="card-img-top" alt="..."/>
        
    </div>
  )
}

export default Image