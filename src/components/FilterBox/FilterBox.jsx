import styles from './FilterBox.module.scss'

function FilterBox({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default FilterBox;