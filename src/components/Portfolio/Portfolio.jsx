import { works } from '../../assets/works'
import {Title, Text, Context} from '../'
import styles from './Portfolio.module.scss'
export default () => {
	return (
		<div className={styles.portfolio}>
			<ul className={styles.works}>
				{works?.map((data, n) => (
					<Context key={`works__item:${n}`}  tag={`portfolio-work #${n}`}>
						<li className={styles.works__item}>
							<Title className={styles.title}>{data.name}</Title>
							<a className={styles.link} href={`/works/${data.name}`}>
								<img src={data.screens[0]} alt="" />
							</a>
							<Text className={styles.descr}>{data.descr}</Text>
						</li>
					</Context>
				))}
			</ul>
		</div>
	);
}

