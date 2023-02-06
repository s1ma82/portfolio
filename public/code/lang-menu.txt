import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './LangMenu.module.scss'
export default ({ className }) => {
    const { i18n } = useTranslation()
    useEffect(() => {
        const lang = localStorage.getItem('i18nextLng')
        i18n.changeLanguage(lang)
    }, [])
    
    const Btn = () => {
        switch (i18n.language) {
            case 'ru': return (
                <button
                    className={`${styles.btn} ${styles.btn_ru}`}
                    onClick={() => i18n.changeLanguage('en')}
                >ru
                </button>
            )
            case 'en': return (
                <button
                    className={`${styles.btn} ${styles.btn_ru}`}
                    onClick={() => i18n.changeLanguage('ru')}
                >en
                </button>
            )
        }
        return null 
    }
    return (

        <div className={styles.container + `${className || ''}`}>
            <Btn/>
        </div>
    )
}