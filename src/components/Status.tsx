import regex from "../utils/regex";

import animations from "../styles/_animations.module.scss";

interface StatusComponentProps {
  className?: string;
  data?: StatusComponentData;
}

export interface StatusComponentData {
  location?: string;
  employment?: object;
}

export default function Status(props: StatusComponentProps) {
  const data = props.data;
  const baseClassName =
    "w-full text-right space-y-4 phone:space-y-6 lap:space-y-8";
  const rootClassName = [
    props.className,
    baseClassName,
    animations.fadeInStatus,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={rootClassName}>
      <h2 className="text-2xl font-semibold phone:text-3xl lap:text-4xl 3xl:text-[2.75rem]">
        Currently
      </h2>
      <div className="space-y-3 text-lg phone:text-xl lap:text-2xl desk:text-[1.7rem] 3xl:text-3xl">
        {renderLocation(data?.location)}
        {renderEmployment(data?.employment)}
      </div>
    </div>
  );
}

function renderLocation(location?: string) {
  let result = (
    <p>
      I'm out of bounds{" "}
      <span role="img" aria-label="space">
        🌌
      </span>
    </p>
  );
  if (location && location.length > 0) {
    result = (
      <p>
        I'm in {location}{" "}
        <span role="img" aria-label="pin">
          📌
        </span>
      </p>
    );
  }
  return result;
}

function renderEmployment(employment?: any) {
  let result = (
    <p>
      Enjoying my life{" "}
      <span role="img" aria-label="drink">
        🍹
      </span>
    </p>
  );
  if (employment) {
    const name = employment.lable;
    const link = employment.link;
    if (name && name.length > 0) {
      result = <p>Working with {name}</p>;
      if (link && link.length > 0 && regex.isUrl(link)) {
        result = (
          <p>
            Working with{" "}
            <a href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>{" "}
            <span role="img" aria-label="briefcase">
              💼
            </span>
          </p>
        );
      }
    }
  }
  return result;
}
