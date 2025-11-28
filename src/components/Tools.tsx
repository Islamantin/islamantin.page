import animations from "../styles/_animations.module.scss";

interface ToolsComponentProps {
  className?: string;
  data: {
    lable: string;
    list: string[];
  }[];
}

export default function Tools(props: ToolsComponentProps) {
  const baseClassName =
    "w-full space-y-6 text-left phone:space-y-8 lap:space-y-10";
  const rootClassName = [
    props.className,
    baseClassName,
    animations.fadeInTools,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={rootClassName}>
      <h2 className="font-semibold text-[18px] lap:text-[24px] 3xl:text-[44px]">
        My tools are
      </h2>
      <div className="flex gap-8 overflow-x-auto pb-2 text-[20px] lap:text-[27.5px] 3xl:text-[48px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {props.data.map((block, blockInd) => (
          <ul
            key={blockInd}
            className="list-none space-y-2 pr-8 text-left last:pr-0 phone:pr-12 lap:pr-16 3xl:pr-24"
          >
            {block.list.map((val, ind) => (
              <li key={ind}>{val}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
