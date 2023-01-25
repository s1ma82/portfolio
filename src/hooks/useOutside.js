import {useEffect, useState} from 'react'

const useOutside = (filter = []) => {
	const [activityState, setActivityState] = useState(false)
	useEffect(() => {
		const func1 = e => {
			if (filter) {
				let flag = filter.length
				for (let i of filter) {
					if (e.target.closest(i)) flag--
				}
				if (flag !== filter.length) return
			}
			document.removeEventListener('mousedown', func1)
			document.removeEventListener('keydown', func2)
			setActivityState(false)
		}
		const func2 = e => {
			if (e.keyCode !== 27 && e.keyCode !== 13) return
			document.removeEventListener('mousedown', func1)
			document.removeEventListener('keydown', func2)
			setActivityState(false)
		}
		return () => {
			document.addEventListener('mousedown', func1)
			document.addEventListener('keydown', func2)
		}
	}, [activityState, setActivityState])
	return [activityState, setActivityState]
}
export default useOutside
