import Head from "next/head";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect } from "react";

import sanityConfig from "../config/sanity.config";

import colors from "../styles/_colors.module.scss";

import Main, { MainComponentData } from "../components/Main";

const client = sanityClient(sanityConfig);
const imageBuilder = imageUrlBuilder(client);

function buildImage(source: any) {
  return imageBuilder.image(source);
}

let bgColorInd = -1;

function setRandomBackgroundColor() {
  if (bgColorInd > -1) return;
  const colorsCount = +colors.colorsCount;
  bgColorInd = Math.floor(Math.random() * colorsCount + 1);
  const body = document.getElementsByTagName("body")[0];
  const classes: string[] = [];
  for (let i = 1; i < colorsCount + 1; i++) {
    classes.push("bgColor" + i);
  }
  body.classList.remove(...classes);
  body.classList.add("bgColor" + bgColorInd);
}

interface HomePageProps {
  data: {
    about: object[],
    posts: object[]
  }
}

export default function Home(props: HomePageProps) {
  useEffect(() => {
    setRandomBackgroundColor();
  });
  const data = props.data;
  const mainData: MainComponentData = {
    about: data.about[0],
    posts: data.posts
  }
  return (
    <>
      <Head>
        <title>Islam Antin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main data={mainData} />
    </>
  );
}

export async function getServerSideProps() {
  const result = await client.fetch(`{
    "about": *[_id == "aboutMe"],
    "posts": *[_type == "post"]
  }`);
  return {
    props: {
      data: result
    },
  };
}
