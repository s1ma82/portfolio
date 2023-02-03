import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import funcs from './funcs'
import useOutside from '../../hooks/useOutside'
import styles from './ContextMenu.module.scss';

export default () => {
	const [focus, setFocus] = useOutside(['#context-menu'])
	const [data, setData] = useState()
	const menuFuncs = funcs(styles)
	const ref = useRef()


	function showMenu(e) {
		e.preventDefault()
		const block = e.target.closest('[data-context]')
		const menu = ref.current

		if (!menu) return
		
		const { pageX, pageY } = e
		pageX + 150 > document.documentElement.scrollWidth 
			? menu.style.left = `${document.documentElement.scrollWidth - 200}px`
			: menu.style.left = pageX + 'px'
		pageY + 200 > document.documentElement.scrollHeight
			? menu.style.top = `${document.documentElement.scrollHeight - 250}px`
			: menu.style.top = pageY + 'px'

		setData(block)
		setFocus(true)

	}

	useEffect(() => {
		document.addEventListener(
			'contextmenu',
			showMenu
		)
		console.log('%cContextMenu ↓', 'color: orange')
		console.log('%cYou can use the right mouse button on some components to view the code of an element or destroy it.', 'font-style: italic')
		setTimeout(() => alert('Turn on developer tools'), 3000) 
	}, [])

	useEffect(() => {
		if(!data) return 
		data.classList.toggle(styles.focus)
	}, [focus])
	return (
		<div
			id="context-menu"
			ref={ref}
			className={`
				${styles.contextMenu}
				${focus ? styles.active : ''}
			`}
		>	
			{ data ? <span className={styles.name}>[{data.getAttribute('data-context')}]</span> : null}
			<ul className={styles.list}>
				{data ? (<>
					<li className={styles.item}>
						<ReactSVG wrapper='span' className={styles.img} fill="var(--color-white)" src="/code.svg" />
						<span className={styles.text}>Show code</span>
					</li>
					<li className={styles.item} onClick={() => {
						menuFuncs.destroy(data)
						setFocus(false)
					}}>
						<ReactSVG wrapper='span' className={styles.img} fill="var(--color-white)" src="/trash.svg" />
						<span className={styles.text}>Уничтожить</span>
					</li>
					</>)
					: null
				}
				<li className={styles.item} onClick={() => {
					menuFuncs.restore()
					setFocus(false)
				}}>
					<ReactSVG wrapper='span' className={styles.img} fill="var(--color-white)" src="/restore.svg" />
					<span className={styles.text}>Восстановить всё</span>
				</li>
			</ul>
		</div>
	);
}

 