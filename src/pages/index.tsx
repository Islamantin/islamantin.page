import Head from "next/head";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import sanityConfig from "../config/sanity.config";

import colors from "../styles/_colors.module.scss";
import { useEffect } from "react";
import Main from "../components/Main";

const client = sanityClient(sanityConfig);
const imageBuilder = imageUrlBuilder(client);

function buildImage(source: any) {
  return imageBuilder.image(source);
}

let colorsCount = -1;

export default function Home(data: any) {
  useEffect(() => {
    if (colorsCount > -1) return;
    colorsCount = +colors.colorsCount;
    const colorInd = Math.floor(Math.random() * colorsCount + 1);
    const body = document.getElementsByTagName("body")[0];
    const classes: string[] = [];
    for (let i = 1; i < colorsCount + 1; i++) {
      classes.push("bgColor" + i);
    }
    body.classList.remove(...classes);
    body.classList.add("bgColor" + colorInd);
  });
  console.log(data);
  const posts = data.posts;
  return (
    <>
      <Head>
        <title>Islam Antin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}

export async function getServerSideProps() {
  const result = await client.fetch(`{
    "about": *[_id == "aboutMe"],
    "posts": *[_type == "post"]
  }`);
  return {
    props: result,
  };
}
