import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Text, Typed } from '../'
import useOutside from '../../hooks/useOutside'
import styles from './Logo.module.scss' 

export default ({ full = false, setHeaderState}) => {
    const [state, setState] = useOutside([`.${styles.logo}`])
    const block = useRef()
    const {t} = useTranslation()
    
    useEffect(() => {
        if (!block.current) return

        if (state) {
            setTimeout(() => {
                block.current.style.paddingRight = '20px'
            }, 250)
        } else {
            block.current.style.paddingRight = '0'
            setHeaderState(state)
        }
    }, [state])

    const Content = () => <>
        s<b>1</b>ma<b ref={block}>82</b> 
    </>


    return  state ? (
        <Link to='/'>
            <span 
                className={`
                    ${styles.logo} 
                    ${state ? styles.active : ''}
                `}
                onClick={() => setState(!state)}
                title="Press doubleclick for return to home page"
            >
                <Content />
                {full && state
                    ? (
                        <Text className={`${styles.logo__descr}`} >
                            <Typed className={styles.typed}  text={t('logo') || ''} state={state} />
                        </Text>  
                    ) : null 
                }
            </span>
        </Link>
    ) : (
        <span 
            className={`
                ${styles.logo} 
                ${state ? styles.active : ''}
            `}
            onClick={() => setState(!state)}
            title="Press doubleclick for return to home page"
        >
            <Content />
            {full && state
                ? (
                    <Text className={`${styles.logo__descr}`} >
                        <Typed className={styles.typed}  text={t('logo') || ''} state={state} />
                    </Text>  
                ) : null 
            }
        </span>
    )
}
