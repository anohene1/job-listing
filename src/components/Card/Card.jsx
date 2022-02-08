import styles from "./Card.module.scss";
import Avatar from "../Avatar/Avatar";
import Tag from "../Tag/Tag";
import Badge from "../Badge/Badge";

function Card({item, onClick}) {

  const tags = item.languages.map((language, index) => <Tag key={index} onClick={(name) => onClick(name)}>{language}</Tag>)
  const style = {
    'borderLeft': item.featured ? '5px solid hsl(180, 29%, 50%)' : 'none'
  }

  return (
    <div style={style} className={styles.card}> 
      <Avatar image={item.logo} alt={item.company} />
      <div className={styles.details}>
        <div className={styles.name_badges}>
          <span className={styles.company_name}>{item.company}</span>
          {item.new && <Badge new/>}
          {item.featured && <Badge />}
        </div>
        <h4 className={styles.title}>{item.position}</h4>
        <div className={styles.stats}>
          <span>{item.postedAt}</span>
          <span>・</span>
          <span>{item.contract}</span>
          <span>・</span>
          <span>{item.location}</span>
        </div>
      </div>
      <div className={styles.tags}>
            {tags}
        </div>
    </div>
  );
}

export default Card;
