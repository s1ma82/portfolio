import styles from './Line.module.scss';

export default ({ color = null }) => {
	
	return color ? <div style={{background: color}} className={styles.line}></div> : <div  className={styles.line}></div>
} 


