import Head from "next/head";
import { useState, useContext } from "react";
import Button from "../../components/Button";
import HeadingFive from "../../components/HeadingFive";
import HeadingSix from "../../components/HeadingSix";
import Paragraph from "../../components/Paragraph";
// import { getData } from '../../utils/fetchData'
// import { DataContext } from '../../store/GlobalState'
// import { addToCart } from '../../store/Actions'

const DetailProduct = (props: any) => {
  const [product] = useState(props.data);
  return (
    <div className="row detail_page">
      <Head>
        <title>Detail Product</title>
      </Head>

      <div className="col-md-6">
        <img
          src={product.image}
          alt={product.image}
          className="d-block img-thumbnail rounded mt-4 w-100"
          style={{ height: "250px" }}
        />
      </div>

      <div className="col-md-6 mt-3">
        <HeadingFive title={product.title} />
        <HeadingSix title={product.price} />
        <Paragraph title={product.description} />
        <Button title={"Buy"} id={""} link={false} />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data.map((curElem: { id: { toString: () => string } }) => {
    return {
      params: {
        id: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

// export const getStaticProps = async (context: { params: { pageno: string; }; }) => {
//     const id = context.params.pageno;
//     const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//     const data = await res.json();

//     return {
//       props: {
//         data,
//       },
//     };
//   };

export default DetailProduct;
