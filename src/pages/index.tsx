import Head from "next/head";
import Image from "next/image";
import sanityClient from "@sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

import styles from "../styles/Home.module.scss";
import sanityConfig from "../config/sanity.config";

import colors from "../styles/colors.module.scss";
import { useEffect } from "react";

const client = sanityClient(sanityConfig);
const imageBuilder = imageUrlBuilder(client);

function buildImage(source: any) {
  return imageBuilder.image(source);
}

export default function Home(data: any) {
  useEffect(() => {
    const colorsCount: number = +colors.colorsCount;
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
    <div className={styles.container}>
      <Head>
        <title>Islam Antin's Personal Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.introduction}>
          <div className={styles.introText}>
            <h1 className={styles.title}>Салям</h1>

            <h2 className={styles.description}>
              My name is <text>Islam</text>.
              <br />
              I'm Software Engineer and Designer.
              <br /><br /> Welcome to my personal page!
            </h2>
          </div>
          <Image className={styles.introImage} src="/me.jpg" width="300" height="300" alt="It's me"></Image>
          {/* <img src="/profilepic.png" alt="it's me"></img> */}
        </div>

        <div className={styles.grid}>
          {/* {posts &&
            posts.map((p: any, ind: number) => {
              const image = buildImage(p.thumbnail).url();
              return (
                <a key={ind} href="#" className={styles.card}>
                  <h2>{p.title}</h2>
                  <img src={image} className={styles.image}></img>
                </a>
                //<PortableText value={p.content}></PortableText>
              );
            })} */}
        </div>
      </main>
    </div>
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
