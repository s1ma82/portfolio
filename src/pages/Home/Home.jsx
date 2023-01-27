import { useTranslation } from "react-i18next"
import {AboutMe, Canvas, Code, LangMenu, Logo, Text, Title} from "../../components"
import styles from './Home.module.scss'


export default () => {
    
    const { t } = useTranslation()
    return (
        <div className={"container column" + ` ${styles.home}`}>
            <Canvas camera={{ position: [4, 4, 1.5] }}/>
            <Title>{t('hello.title')}</Title>
            <Text className="start">{t('hello.text')}</Text>
            <Title>About me</Title>
            <AboutMe className='start' />
        </div>
    )
}