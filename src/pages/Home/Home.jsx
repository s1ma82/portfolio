import { useTranslation } from "react-i18next"
import {AboutMe, Canvas, Context, Portfolio, Text, Title} from "../../components"
import styles from './Home.module.scss'


export default () => {
    
    const { t } = useTranslation()
    return (
        <div className={"container column" + ` ${styles.home}`}>
            <Context tag="canvas">
                <Canvas camera={{ position: [4, 4, 1.5] }}/>
            </Context>
            <Context tag="main-title">
                <Title>{t('hello.title')}</Title>
            </Context>
            <Context tag="text">
                <Text className="start">{t('hello.text')}</Text>
            </Context>
            <Title>About me</Title>
            <Context tag="about-me">
                <AboutMe className='start' />
            </Context>
            <Portfolio/>
        </div>
    )
}