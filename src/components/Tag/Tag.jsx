import styles from './Tag.module.scss'

function Tag({children, onClick}) {
    return (
        <button className={styles.button} onClick={() => onClick(children)}>
            {children}
        </button>
    )
}

export default Tag;