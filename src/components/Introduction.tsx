import Image from "next/image";

import styles from "../styles/Introduction.module.scss";

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <div className={styles.intro + " " + styles.text}>
        <h1 className={styles.title}>Салям</h1>

        <h2 className={styles.description}>
          My name is <text>Islam</text>.
          <br />
          I'm Software Engineer <br />
          and Designer.
        </h2>
      </div>
      <div className={styles.intro + " " + styles.image}>
        <Image
          src="/me.jpg"
          fill
          sizes="(max-width: 768px) 350px,
            (min-width: 768px) 250px,
            (min-width: 1200px) 1000px"
          alt="It's me"
        ></Image>
      </div>
      {/* <img src="/profilepic.png" alt="it's me"></img> */}
    </div>
  );
}
