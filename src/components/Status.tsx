import { useEffect } from "react";
import regex from "../utils/regex";

import styles from "../styles/Status.module.scss";

interface StatusComponentProps {
  className: string;
  data?: StatusComponentData;
}

export interface StatusComponentData {
  location?: string;
  employment?: object;
}

export default function Status(props: StatusComponentProps) {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);
  const data = props.data;
  return (
    <div className={props.className}>
      <h2>Currentely</h2>
      <br />
      <div className={styles.container}>
        <div>{renderLocation(data?.location)}</div>
        <div>{renderEmployment(data?.employment)}</div>
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
    result = <p>I'm in {location}</p>;
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
    const name = employment.organisationName;
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
