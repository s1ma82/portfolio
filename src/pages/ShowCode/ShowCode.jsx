import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import codeExample from '../../assets/codeExample';
import { Code } from '../../components'
import { Context } from '@/ui'
import styles from './ShowCode.module.scss';

export default () => {
	const { component } = useParams()
	const data = codeExample.find(i => i.name === component)
	const [state, setState] = useState(false)
	const [text, setText] = useState()

	useEffect(() => {
		setText(false)
		async function func() {
			const code = await data.code()
			setText(code)
		}
		func()
	}, [component])
	
	return text ? (
			<div className={styles.showCode} >
				<div onClick={() => text[1].length !== 0? setState(!state) : null} className={styles.container + ` ${!state ? styles.container_active : ''}`}>
					<Context tag='code-example'>
						<Code  theme='atom'>{text[0]}</Code>
					</Context>
				</div>
				<div onClick={() => setState(!state)} className={styles.container + ` ${state ? styles.container_active : ''}`}>
					<Code lang="scss" theme='atom'>{text[1]}</Code> 
				</div>
			</div>
	) : null
}
