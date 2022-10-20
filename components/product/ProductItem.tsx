import Link from "next/link";
import React, { useContext, useState } from "react";
import Card from "../Card";
import Image from "../Image";

export interface Product {
  product: {
    key?: string;
    id: string;
    category: string;
    description: string;
    image: string;
    price: string;
    rating: Array<any>;
    title: string;
  };

  counter?(data: any): any;
}

const ProductItem = ({ product }: Product) => {
  const cart = [];
  // const { state, dispatch } = useContext(DataContext)
  // const { cart } = state
  const [data, setData] = useState();

  const counter = (data: any) => {
    setData(data);

    // console.log("data",data)
  };

  return (
    <div className="card width">
      <Image source={product.image} />
      <h4>{data}</h4>
      <Card product={product} counter={counter} />
    </div>
  );
};

export default ProductItem;
