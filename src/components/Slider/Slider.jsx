import { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import useOutside from '../../hooks/useOutside'
import styles from './Slider.module.scss'


export default ({ className, data }) => {
	const [state, setState] = useOutside([`.${styles.btn}`])
	const [screen, setScreen] = useState(0)
	useEffect(() => {
		if (!state) { 
			document.body.style.overflow = "auto"
			return
		}
		document.body.style.overflow = "hidden"
	}, [state])
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
		<div className={`
			${styles.container} 
			${state ? styles.container_active : ''} 
			${className}
			`}
		>
			
			<div className={styles.slider}>
				{data.screens.length > 1 ? (
					<>
						<button className={styles.btn + ` ${styles.btn_prev}`} onClick={prev}>
							<ReactSVG className={styles.img} src="/arrow.svg"/>
						</button>
						<button className={styles.btn + ` ${styles.btn_next}`} onClick={next}>
							<ReactSVG className={styles.img} src="/arrow.svg"/>
						</button>
					</>
				) : null
				}
				<img onClick={() => setState(true)} loading='lazy' src={data.screens[screen]} alt={data.name + ' work screen'} />
			</div>
		</div>
	);
}
