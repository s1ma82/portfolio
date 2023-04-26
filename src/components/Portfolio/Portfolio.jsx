import { useEffect, useRef, useState } from 'react';
import useOutside from '@/hooks/useOutside'
import { works } from '../../assets/works'
import {Title, Text, Context} from '../../ui'
import styles from './Portfolio.module.scss'
import { Link } from 'react-router-dom';

export default () => {


	const Work = (data) => {

		const [state, setState] = useOutside([`[data-focus="${data.name}"]`])


		return ( 
			<li
				
				data-focus={data.name}
				className={`${styles.works__item} ${state ? styles.works__item_active : ''}`}
				onClick={() => setState(!state)}
			>
				<div className={styles.content}>
					<Title className={styles.title}>{data.name}</Title>
					<img src={data.screens[0]} alt="image" />
				</div>
				<div  className={`${styles.descr} ${state ? styles.descr_active : ''}`}>
					<Text>{data.descr}</Text>
				</div>
			</li>
		)


	}
	return (
		<div className={styles.portfolio}>
			<ul className={styles.works}>
				{works?.map((data, n) => (
					<Context key={`works__item:${n}`} tag={`portfolio-work #${n}`}>
						<Work {...data}/>
					</Context>
				))}
			</ul>
		</div>
	);
}

