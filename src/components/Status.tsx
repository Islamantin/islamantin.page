import regex from "../utils/regex";

import styles from "../styles/Status.module.scss";

interface StatusComponentProps {
  className?: string;
  data?: StatusComponentData;
}

export interface StatusComponentData {
  location?: string;
  employment?: object;
}

export default function Status(props: StatusComponentProps) {
  const propsClassName = props.className ? (props.className + " ") : "";
  const data = props.data;
  return (
    <div className={propsClassName + styles.status}>
      <h2>Currently</h2>
      <div>
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
