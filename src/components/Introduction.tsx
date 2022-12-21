import Image from "next/image";

import styles from "../styles/Introduction.module.scss";

interface IntroductionComponentProps {
  className: string
}

export default function Introduction(props: IntroductionComponentProps) {
  return (
    <div className={props.className + " " + styles.intro}>
      <div className={styles.text}>
        <h1 className={styles.title}>Салям</h1>
        <p>
          My name is Islam.
          <br />
          I'm Software Engineer <br />
          and Designer.
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src="/me.jpg"
          fill
          alt="It's me"
        ></Image>
      </div>
    </div>
  );
}
