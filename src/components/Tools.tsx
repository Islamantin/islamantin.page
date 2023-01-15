import styles from "../styles/Tools.module.scss";

interface ToolsComponentProps {
  data: {
    lable: string;
    list: string[];
  }[];
}

export default function Tools(props: ToolsComponentProps) {
  return (
    <div className={styles.tools}>
      <h2>My tools are</h2>
      <div className={styles.scroll}>
        {props.data.map((block, blockInd) => (
          <ul key={blockInd} className={styles.list}>
            {block.list.map((val, ind) => (
              <li key={ind}>{val}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
