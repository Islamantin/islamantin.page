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
    "w-full text-center space-y-6 phone:space-y-8 lap:space-y-10";
  const rootClassName = [
    props.className,
    baseClassName,
    animations.fadeInTools,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={rootClassName}>
      <h2 className="text-2xl font-semibold phone:text-3xl lap:text-4xl 3xl:text-[2.75rem]">
        My tools are
      </h2>
      <div className="flex gap-8 overflow-x-auto pb-2 text-lg phone:text-xl lap:text-2xl desk:text-[1.7rem] 3xl:text-3xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
