import styles from './Badge.module.scss'

function Badge(props) {

    const style = {
        'backgroundColor': props.new ? 'hsl(180, 29%, 50%)' : ' hsl(180, 14%, 20%)'
    }

    return (
        <span className={styles.badge} style={style}>
            {props.new ? 'NEW!' : 'FEATURED!'}
        </span>
    )
}

export default Badge;