import styles from './Tag.module.scss'

function Tag({children}) {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}

export default Tag;