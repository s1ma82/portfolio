import { useState } from 'react'
import { Logo, LangMenu } from '../../components'
import styles from './Header.module.scss'
export default () => {
    const [state, setState] = useState(false)

    return (
        <header className={`container ${styles.header}`}>
            <Logo full setHeaderState={setState} />
            <nav className={`${styles.nav} ${!state ? styles.nav_active : ''}`}>
                <LangMenu />
            </nav>
        </header>
    )
}