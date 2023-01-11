import styles from "../styles/Main.module.scss";
import ContactDetails, { ContactDetailsData } from "./ContactDetails";

import Introduction from "./Introduction";
import Status, { StatusComponentData } from "./Status";

interface MainComponentProps {
  data: MainComponentData;
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
      <Introduction className={styles.block} />
      <Status className={styles.block} data={statusData} />
      <ContactDetails className={styles.block} data={contactDetailsData} />
      <div>
        <a
          href="https://github.com/Islamantin/islamantin.page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.svg} src="github-1.svg" alt="github" title="Chek out GitHub repository of this page" />
        </a>
      </div>
    </main>
  );
}
