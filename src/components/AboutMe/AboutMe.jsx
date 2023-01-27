import { Line, Text, Title } from '../'
import { techs, sites, langs, frameworks, libs, tools, utils } from './data'
import styles from './AboutMe.module.scss'
export default ({className}) => {
    
    const Skill = ({children}) => (<li>[{children}]</li>)
    return (
        <div className={styles.skills + ` ${className}`}>
            <Title className={styles.title}>HardSkills:</Title>
            <div className={styles.skills__item}>
                <div className={styles.techs}>
                    <Title className={`${styles.title} ${styles.title_sub}`}>Techs</Title>
                    <ol className={styles.list}>
                        {techs?.map(i => <li key={i}>{i}</li>)}
                    </ol>
                </div>
                <div className={styles.tools}>
                    <Title className={`${styles.title} ${styles.title_sub}`}>Tools</Title>
                    <ul className={styles.list}>
                        {tools?.map(({icon, name}) => <li key={name}>{icon}{name}</li>)}
                    </ul>
                </div>
                <div className={styles.langs}>
                    <Title className={`${styles.title} ${styles.title_sub}`}>Langs</Title>
                    <ul className={styles.list}>
                        {langs?.map(({icon, name}) => <li key={name}>{icon}{name}</li>)}
                    </ul>
                </div>
                <div className={styles.frameworks}>
                    <Title className={`${styles.title} ${styles.title_sub}`}>Frameworks</Title>
                    <ul className={styles.list}>
                        {frameworks?.map(({icon, name}) => <li key={name}>{icon}{name}</li>)}
                    </ul>
                </div>
                <div className={styles.utils}>
                    <Title className={`${styles.title} ${styles.title_sub}`}>Utils</Title>
                    <ul className={styles.list}>
                        {utils[0]?.map(({ icon, name }) => <li key={name}>{icon}{name}</li>)}
                        <Line color="var(--color-gray)" />
                        {utils[1]?.map(i => <li key={i}>{i}</li>)}
                    </ul>
                </div>
                <div className={styles.libs}>
                    <Title className={`${styles.title} ${styles.title_sub}`}>Libs</Title>
                    <ol className={styles.list}>
                        {libs?.map(i => !(typeof i === 'object' && i.bold ) ? <li key={i}>{i}</li> : <li key={i.text}><b>{i.text}</b></li> )}
                    </ol>
                </div>
                <div className={styles.sites}>
                    <Title className={`${styles.title} ${styles.title_sub}`}>Useful sites</Title>
                    <ol className={styles.list}>
                        {sites?.map(({link, name}) => <a key={name} target="_blank" href={link}><li>{name}</li></a> )}
                    </ol>
                </div>
            </div>
            <Title className={styles.title}>SoftSkills:</Title>
            <div className={styles.skills__item + ` ${styles.skills__item_soft}`}>
                <ol className={styles.list}>
                    <Skill>стрессоустойчивость</Skill>
                    <Skill>грамотность</Skill>
                    <Skill>ответственность</Skill>
                    <Skill>самообучаемость</Skill>
                    <Skill>стремление к комфорту</Skill>
                    <Skill>оптимизация рабочего процесса</Skill>
                    <Skill>скорость работы</Skill>
                    <Skill>желание залезть под капот</Skill>
                    <Skill>молодой взгляд на жизнь</Skill>
                    <Skill>юмор</Skill>
                </ol>
            </div>
        </div>
    )
}