import styles from './Cards.module.scss'

function Cards({children}) {
    return (
        <main className={styles.cards}>
            {children}
        </main>
    );
}

export default Cards;