import Head from "next/head";
import Image from "next/image";
import sanityClient from "@sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

import styles from "../styles/Home.module.scss";
import sanityConfig from "../config/sanity.config";

const client = sanityClient(sanityConfig);
const imageBuilder = imageUrlBuilder(client);

function buildImage(source: any) {
  return imageBuilder.image(source);
}

export default function Home(data: any) {
  console.log(data);
  const posts = data.posts;
  return (
    <div className={styles.container}>
      <Head>
        <title>Islam Antin's Personal Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi!</h1>

        <p className={styles.description}>
          My name is <text className={styles.bold}>Islam Antin.</text>
        </p>

        <div className={styles.grid}>
          {posts.map((p: any, ind: number) => {
            const width = 225;
            const height = 400;
            const image = buildImage(p.thumbnail).size(width, height).url();
            return (
              <a key={ind} href="#" className={styles.card}>
                <h2>{p.title}</h2>
                <img src={image}></img>
                {/* <PortableText value={p.content}></PortableText> */}
              </a>
            );
          })}

          {/* <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a> 

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>*/}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  const result = await client.fetch(`*[_type == "post"]`);
  console.log(result);
  return {
    props: { posts: result },
  };
}
