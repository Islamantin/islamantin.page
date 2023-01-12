import styles from "../styles/Main.module.scss";
import ContactDetails, { ContactDetailsData } from "./ContactDetails";

import Introduction from "./Introduction";
import Status, { StatusComponentData } from "./Status";

interface MainComponentProps {
  data: MainComponentData;
  color: string;
}

export interface MainComponentData {
  about?: any;
  posts?: any[];
}

export default function Main(props: MainComponentProps) {
  const aboutData = props.data.about;
  const statusData: StatusComponentData = {
    location: aboutData?.location,
    employment: aboutData?.currentEmployment,
  };
  
  const contactDetailsData: ContactDetailsData[] = aboutData?.contactDetails;
  return (
    <main className={styles.main}>
      <Introduction mainColor={props.color} />
      <Status data={statusData} />
      <ContactDetails data={contactDetailsData} />
      <a
        href="https://github.com/Islamantin/islamantin.page"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.svg} src="github-1.svg" alt="github" title="Chek out GitHub repository of this page" />
      </a>
    </main>
  );
}
