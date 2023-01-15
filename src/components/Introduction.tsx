import Image from "next/image";

import styles from "../styles/Introduction.module.scss";

interface IntroductionComponentProps {
  className?: string,
  colorKey: string | null
}

export default function Introduction(props: IntroductionComponentProps) {
  // const [nameStyles, setNameStyles] = useState(styles.name);
  // useEffect(() => {
  //   if (props.colorKey != null) {
  //     setNameStyles(nameStyles + " color-" + props.colorKey);
  //   }
  // }, [props.colorKey]);
  const propsClassName = props.className ? (props.className + " ") : "";
  return (
    <div className={propsClassName + styles.intro}>
      <div className={styles.text}>
        <h1>Салям</h1>
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
