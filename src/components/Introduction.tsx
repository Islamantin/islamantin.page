import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "../styles/Introduction.module.scss";
import animations from "../styles/_animations.module.scss";
import { useFontLoaded } from "../utils/useFontLoaded";

interface IntroductionComponentProps {
  className?: string,
  colorKey: string | null
}

export default function Introduction(props: IntroductionComponentProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const fontsLoaded = useFontLoaded();
  
  const propsClassName = props.className ? (props.className + " ") : "";
  
  return (
    <div className={propsClassName + styles.intro}>
      <div className={styles.text}>
        {fontsLoaded && (
          <>
            <h1 className={animations.fadeIn}>Салям</h1>
            <p className={animations.fadeInDelayed}>
              My name is Islam.
              <br />
              I'm Software Engineer <br />
              and Designer.
            </p>
          </>
        )}
      </div>
      <div className={styles.image}>
        <Image
          src="/me.jpg"
          fill
          alt="It's me"
          onLoad={() => setImageLoaded(true)}
          className={imageLoaded ? animations.fadeInImage : ''}
        />
      </div>
    </div>
  );
}
