import styles from "./Card.module.scss";
import Avatar from "../Avatar/Avatar";
import Tag from "../Tag/Tag";

function Card() {
  return (
    <div className={styles.card}>
      <Avatar />
      <div className={styles.details}>
        <div className="card--details--name-badges">
          <span className={styles.company_name}>PhotoSnap</span>
        </div>
        <h4 className={styles.title}>Senior Frontend Developer</h4>
        <div className={styles.stats}>
          <span>1d ago</span>
          <span>・</span>
          <span>Part Time</span>
          <span>・</span>
          <span>USA only</span>
        </div>
      </div>
      <div className={styles.tags}>
            <Tag>Frontend</Tag>
            <Tag>Frontend</Tag>
            <Tag>Frontend</Tag>
        </div>
    </div>
  );
}

export default Card;
