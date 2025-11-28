import Image from "next/image";
import { useState, useEffect } from "react";

import animations from "../styles/_animations.module.scss";
import { useFontLoaded } from "../utils/useFontLoaded";

interface IntroductionComponentProps {
  className?: string;
  colorKey: string | null;
}

export default function Introduction(props: IntroductionComponentProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const fontsLoaded = useFontLoaded();
  
  // Set CSS custom properties for animation control
  useEffect(() => {
    const root = document.documentElement;
    if (fontsLoaded) {
      root.style.setProperty('--animation-play-state', 'running');
      root.style.setProperty('--animation-delay', '0s');
    } else {
      root.style.setProperty('--animation-play-state', 'paused');
      root.style.setProperty('--animation-delay', '0s');
    }
  }, [fontsLoaded]);
  
  const baseClassName =
    "flex w-full flex-col-reverse gap-6 pb-4 phone:pb-6 lap:flex-row lap:items-end lap:justify-between lap:gap-12 lap:pb-8 desk:gap-16 3xl:gap-24 3xl:pb-16";
  const rootClassName = props.className
    ? `${props.className} ${baseClassName}`
    : baseClassName;

  return (
    <div className={rootClassName}>
      <div className="w-full text-center lap:mr-8 lap:text-left">
        <h1
          className={`${animations.fadeIn} text-[2.5rem] phone:text-[3.5rem] lap:text-[5rem] desk:text-[6rem] 3xl:text-[10rem]`}
        >
          Салям
        </h1>
        <p
          className={`${animations.fadeInDelayed} mt-4 text-[1.5rem] phone:text-[2rem] lap:text-[2rem] desk:text-[2.25rem] 3xl:text-[4rem]`}
        >
          My name is Islam.
          <br />
          I'm Software Engineer <br />
          and Designer.
        </p>
      </div>
      <div className="relative mx-auto aspect-square w-[250px] min-h-[250px] min-w-[250px] self-center phone:w-[300px] phone:min-h-[300px] phone:min-w-[300px] tablet:w-[400px] tablet:min-h-[400px] tablet:min-w-[400px] lap:w-[450px] lap:min-h-[450px] lap:min-w-[450px] lap:self-end desk:w-[500px] desk:min-h-[500px] desk:min-w-[500px] 3xl:w-[500px] 3xl:min-h-[500px] 3xl:min-w-[500px]">
        <Image
          src="/me.jpg"
          fill
          alt="It's me"
          onLoad={() => setImageLoaded(true)}
          className={`${animations.fadeInImageWithShadow} rounded-[1.5rem] object-cover`}
        />
      </div>
    </div>
  );
}
