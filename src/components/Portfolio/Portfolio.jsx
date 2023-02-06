import { works } from '../../assets/works'
import {Title, Text, Context} from '../'
import styles from './Portfolio.module.scss'
import { Link } from 'react-router-dom';
export default () => {
	return (
		<div className={styles.portfolio}>
			<ul className={styles.works}>
				{works?.map((data, n) => (
					<Context key={`works__item:${n}`}  tag={`portfolio-work #${n}`}>
						<li className={styles.works__item}>
							<Title className={styles.title}>{data.name}</Title>
							<Link className={styles.link} to={`/works/${data.name}`}>
								<img src={data.screens[0]} alt="" />
							</Link>
							<Text className={styles.descr}>{data.descr}</Text>
						</li>
					</Context>
				))}
			</ul>
		</div>
	);
}

