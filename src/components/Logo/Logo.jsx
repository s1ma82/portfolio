import styles from './Logo.module.scss' 
import { Text, Typed } from '../'
import useOutside from '../../hooks/useOutside'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import dedent from 'dedent'

export default ({ full = false, setHeaderState}) => {
    const [state, setState] = useOutside([`.${styles.logo}`])
    const block = useRef()
    const {t} = useTranslation()
    
    useEffect(() => {
        state ?  setTimeout(() => {
            if (!block.current) return
            block.current.style.paddingRight = '20px'
        }, 250)
        : block.current.style.paddingRight = '0'
        setHeaderState(state)
    }, [state])

    return (
        <span 
            className={dedent`
                ${styles.logo} 
                ${state ? styles.active : ''}
            `}
            onClick={() => setState(!state)}
        >s<b>1</b>ma<b ref={block}>82</b>
  
            {!full && !state
                ? null 
                : <Text className={`${styles.logo__descr}`} >
                    <Typed className={styles.typed}  text={t('logo') || ''} state={state} />
                </Text>  
            }
        </span>
    )
}
