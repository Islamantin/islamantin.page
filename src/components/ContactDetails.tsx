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
      <h2 className="font-semibold text-[18px] lap:text-[24px] 3xl:text-[44px]">
        Contact me
      </h2>
      <div className="mt-6 flex flex-nowrap items-center justify-evenly gap-4 overflow-x-auto phone:gap-6 lap:gap-8 desk:gap-12 3xl:gap-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {props.data?.map((val: ContactDetailsData, ind: number) => (
          <a
            key={ind}
            href={val.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[250px] justify-center whitespace-nowrap text-[20px] lap:text-[27.5px] 3xl:text-[48px] transition-colors duration-200 hover:underline"
          >
            {val.lable}
          </a>
        ))}
      </div>
    </div>
  );
}
