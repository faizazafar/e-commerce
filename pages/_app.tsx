import variables from "../styles/variables.module.scss";
import "../styles/globals.css";
import "../components/product/productItem.css";
import "../components/Loader/Loader.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../components/Loader/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Loader />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
