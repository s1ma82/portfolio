import { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import styles from './Slider.module.scss'


export default ({ className, data }) => {
	const [screen, setScreen] = useState(0)

	const prev = () => {
		if (screen === 0) {
			setScreen(data.screens.length - 1 )
			return
		}
		setScreen(screen - 1)
	}
	const next = () => {
		if (screen === (data.screens.length - 1)) {
			setScreen(0)
			return
		}
		setScreen(screen + 1)
	}
	

	return (
		<div className={styles.slider}>
			<button className={styles.btn + ` ${styles.btn_prev}`} onClick={prev}>
				<ReactSVG className={styles.img} src="/arrow.svg"/>
			</button>
			<button className={styles.btn + ` ${styles.btn_next}`} onClick={next}>
				<ReactSVG className={styles.img} src="/arrow.svg"/>
			</button>
			<div className={styles.container}>
				<img loading='lazy' src={data.screens[screen]} alt={data.name + ' work screen'} />
			</div>
		</div>
	);
}
