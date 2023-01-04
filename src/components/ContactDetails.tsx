import { useEffect } from "react";
import styles from "../styles/ContactDetails.module.scss";

interface ContactDetailsComponentProps {
  className: string;
  data?: ContactDetailsData[];
}

export interface ContactDetailsData {
  lable: string;
  link: string;
}

export default function ContactDetails(props: ContactDetailsComponentProps) {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);
  return (
    <div className={props.className + " " + styles.contactDetails} >
      <h2>Contact me</h2>
      <div className={styles.container}>
        {props.data?.map((val: ContactDetailsData, ind: number) => (
          <a
            key={ind}
            href={val.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {val.lable}
          </a>
        ))}
      </div>
    </div>
  );
}
