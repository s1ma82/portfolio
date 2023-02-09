import styles from './Text.module.scss'
export default ({ children, className }) =>
    <p className={styles.text + ' ' + className}>{children}</p>