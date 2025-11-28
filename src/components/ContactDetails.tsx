import animations from "../styles/_animations.module.scss";

interface ContactDetailsComponentProps {
  className?: string;
  data?: ContactDetailsData[];
}

export interface ContactDetailsData {
  lable: string;
  link: string;
}

export default function ContactDetails(props: ContactDetailsComponentProps) {
  const baseClassName =
    "w-full pt-12 text-center phone:pt-14 lap:pt-16 3xl:pt-24";
  const rootClassName = [
    props.className,
    baseClassName,
    animations.fadeInContactDetails,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={rootClassName}>
      <h2 className="text-2xl font-semibold phone:text-3xl lap:text-4xl 3xl:text-[2.75rem]">
        Contact me
      </h2>
      <div className="mt-6 flex flex-wrap items-center justify-evenly gap-4 phone:gap-6 lap:gap-8 desk:gap-12 3xl:gap-16">
        {props.data?.map((val: ContactDetailsData, ind: number) => (
          <a
            key={ind}
            href={val.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[250px] justify-center text-lg phone:text-xl lap:text-2xl desk:text-[1.7rem] 3xl:text-[3rem] transition-colors duration-200 hover:underline"
          >
            {val.lable}
          </a>
        ))}
      </div>
    </div>
  );
}
