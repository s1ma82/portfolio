import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import codeExample from '../../assets/codeExample';
import {Code} from '../../components'
import styles from './ShowCode.module.scss';

export default () => {
	const { component } = useParams()
	const data = codeExample.find(i => i.name === component)
	const [text, setText] = useState()

	useEffect(() => {
		setText(false)
		async function func() {
			const code = await data.code()
			setText(code)
		} 
		func()
	}, [component])
	
	
	return (
		<div className={styles.showCode}>
			<div className={styles.img_container}>
				{text ? <Code theme='atom'>{text}</Code> : null}
			</div>
		</div>
	);
}

