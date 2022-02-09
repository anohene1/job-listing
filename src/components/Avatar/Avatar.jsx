import styles from "./Avatar.module.scss";

function Avatar({ image, alt }) {
  return (
    <div className={styles.avatar}>
      <img src={image} alt={alt} />
    </div>
  );
}

export default Avatar;
