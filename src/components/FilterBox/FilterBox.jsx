import styles from "./FilterBox.module.scss";

function FilterBox({ children, onClear }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.filters}>{children}</div>
        <span onClick={() => onClear()}>Clear</span>
      </div>
    </div>
  );
}

export default FilterBox;
