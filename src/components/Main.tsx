import styles from "../styles/Main.module.scss";
import ContactDetails, { ContactDetailsData } from "./ContactDetails";

import Introduction from "./Introduction";
import Status, { StatusComponentData } from "./Status";

import { useEffect } from "react";

interface MainComponentProps {
  data: MainComponentData
}

export interface MainComponentData {
  about?: any,
  posts?: any[]
}

export default function Main(props: MainComponentProps) {
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);
  const aboutData = props.data.about;
  const statusData: StatusComponentData = {
    location: aboutData?.location,
    employment: aboutData?.currentEmployment
  }
  const contactDetailsData: ContactDetailsData[] = aboutData?.contactDetails;
  return (
    <main className={styles.main}>
      <Introduction className={styles.block} />
      <Status className={styles.block} data={statusData} />
      <ContactDetails className={styles.block} data={contactDetailsData} />
      {/* <div className={styles.breakline} /> */}

      {/*<div className={styles.grid}>
         {posts &&
            posts.map((p: any, ind: number) => {
              const image = buildImage(p.thumbnail).url();
              return (
                <a key={ind} href="#" className={styles.card}>
                  <h2>{p.title}</h2>
                  <img src={image} className={styles.image}></img>
                </a>
                //<PortableText value={p.content}></PortableText>
              );
            })} 
      </div>*/}
    </main>
  );
}
