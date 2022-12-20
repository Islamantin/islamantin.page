import Introduction from "./Introduction";

import styles from "../styles/Main.module.scss";

export default function Main() {
  return (
    <main className={styles.main}>
      <Introduction />
      {/* <div className={styles.breakline} /> */}

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
  );
}
