import ContactDetails, { ContactDetailsData } from "./ContactDetails";

import Introduction from "./Introduction";
import Status, { StatusComponentData } from "./Status";
import Tools from "./Tools";

interface MainComponentProps {
  data: MainComponentData;
  colorKey: string;
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
  const sectionSpacing =
    "w-full mb-12 phone:mb-14 lap:mb-16 desk:mb-20 3xl:mb-24";
  return (
    <main className="mx-auto flex w-full flex-1 flex-col items-center justify-center px-0 py-8 max-w-[250px] phone:max-w-[300px] tablet:max-w-[400px] lap:max-w-[500px] desk:max-w-[780px] 3xl:max-w-[1500px] phone:py-12 lap:py-16 3xl:py-32">
      <Introduction className={sectionSpacing} colorKey={props.colorKey} />
      {aboutData.tools ? (
        <Tools className={sectionSpacing} data={aboutData.tools} />
      ) : null}
      <Status className={sectionSpacing} data={statusData} />
      <ContactDetails className={sectionSpacing} data={contactDetailsData} />
      <a
        href="https://github.com/Islamantin/islamantin.page"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2"
      >
        <img
          className="h-8 w-8 pt-4 align-middle transition-[filter] duration-500 ease-in-out phone:h-9 phone:w-9 lap:h-12 lap:w-12 3xl:h-[75px] 3xl:w-[75px] dark:invert"
          src="github-1.svg"
          alt="github"
          title="Chek out GitHub repository of this page"
        />
      </a>
    </main>
  );
}
