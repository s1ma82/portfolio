import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Typed } from '../'
import {Text} from '@/ui'
import useOutside from '../../hooks/useOutside'
import styles from './Logo.module.scss' 

export default ({ full = false, setHeaderState}) => {
    const [state, setState] = useOutside([`.${styles.logo}`])
    const block = useRef()
    const {t} = useTranslation()
    
    useEffect(() => {
        if (!block.current) return

        setTimeout(() => {
            state ?
                block.current.classList.add(styles.logo_padding) :
                block.current.classList.remove(styles.logo_padding)
        }, 250)

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
