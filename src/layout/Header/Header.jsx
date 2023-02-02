import { useState } from 'react'
import { Logo, LangMenu, Context } from '../../components'
import styles from './Header.module.scss'
export default () => {
    const [state, setState] = useState(false)

    return (
        <header className={`container ${styles.header}`}>
            <Context tag="site-logo">
                <Logo full setHeaderState={setState} />
            </Context>
            <nav className={`${styles.nav} ${!state ? styles.nav_active : ''}`}>
                <Context tag="lang-menu">
                    <LangMenu />
                </Context>
            </nav>
        </header>
    )
}