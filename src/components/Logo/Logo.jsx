import styles from './Logo.module.scss' 
import { Text, Typed } from '../'
import useOutside from '../../hooks/useOutside'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import dedent from 'dedent'

export default ({ full = false, setHeaderState}) => {
    const [state, setState] = useOutside([`.${styles.logo}`])
    const {t} = useTranslation()

    useEffect(() => setHeaderState(state), [state])
    return (
        <span
            className={dedent`
                ${styles.logo} 
                ${state ? styles.active : ''}
            `}
            onClick={() => setState(!state)}
        >s<b>1</b>ma<b>82</b>
  
            {!full && !state
                ? null 
                : <Text className={`${styles.logo__descr}`} >
                    <Typed className={styles.typed}  text={t('logo') || ''} state={state} />
                </Text>  
            }
        </span>
    )
}
