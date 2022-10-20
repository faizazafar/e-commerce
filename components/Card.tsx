import Link from 'next/link'
import React from 'react'
import Button from './Button'
import HeadingFive from './HeadingFive'
import HeadingSix from './HeadingSix'
import Paragraph from './Paragraph'
import { CardItems } from '../types'

const Card = ({ product , counter} : CardItems) => {
  return (
   <div className="card-body">
    <HeadingFive title={product.title} headingTwo={undefined}/>
    <HeadingSix title={product.price} />
    <Paragraph title={product.description} />
     <div className="row justify-content-between mx-0">
      <Button title={'View'} id={product.id} link ={ true}
      counter ={counter}/>
          <Button title={'Buy'} counter={counter} id={''} link={false}/>
       </div> 
   </div> 
  )
}

export default Card