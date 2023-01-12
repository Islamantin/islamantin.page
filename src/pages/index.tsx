import Head from "next/head";
import sanityClient from "@sanity/client";
import { useEffect, useState } from "react";

import sanityConfig from "../config/sanity.config";

import colors from "../styles/_colors.module.scss";

import Main, { MainComponentData } from "../components/Main";

const client = sanityClient(sanityConfig);

function getRandomColor() {
  const colorCollection = colors.colection.split(', ');
  const ind = Math.floor(Math.random() * colorCollection.length);
  return colorCollection[ind];
}

interface HomePageProps {
  data: {
    about: object[],
    posts: object[]
  }
}

export default function Home(props: HomePageProps) {
  const [mainColor, setMainColor] = useState<string | null>(null);
  useEffect(() => {
    if (mainColor == null) {
      const color = getRandomColor();
      setMainColor(color);
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("bg-color-" + color);
    }
  }, [props]);
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
      <Main data={mainData} color={mainColor as string} />
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
