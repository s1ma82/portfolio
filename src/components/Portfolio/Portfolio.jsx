import { works } from './data'
import {Title, Text, Slider} from '../'
import styles from './Portfolio.module.scss'
export default () => {
	return (
		<div className={styles.portfolio}>
			<ul className={styles.works}>
				{works?.map((data, n) => (
					<li key={`works__item:${n}`} className={styles.works__item}>
						<Title className={styles.title}>{data.name}</Title>
						<Slider data={data}/>
						<Text className={styles.descr}>{data.descr}</Text>
					</li>
				))}
			</ul>
		</div>
	);
}

