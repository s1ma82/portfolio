import { useParams } from "react-router-dom"
import { Slider, Text, Title } from "../../components"
import { works } from "../../assets/works"

function getWork(name) {
    const work = works.find(i => i.name  === name)
    console.log(work)
    return work
}

export default () => {
    const {name} = useParams()
    const data = getWork(name)

    return (
        <>  
            <Title>{data.name}</Title>          
            <Slider data={data} />
            <Text>{data.descr}</Text>
        </>
    )
}