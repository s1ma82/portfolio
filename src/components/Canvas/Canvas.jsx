import { Canvas, useFrame, useLoader} from "@react-three/fiber"
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import { useRef } from "react"
import styles from './Canvas.module.scss'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { OrbitControls } from "@react-three/drei"


const Box = () => {
    const mesh = useRef()
    const materials = useLoader(MTLLoader, '/cube/cube.mtl')
    const obj = useLoader(OBJLoader, '/cube/cube.obj', loader => {
        materials.preload()
        loader.setMaterials(materials)

    })
    useFrame((state, delta) => {
        const model = mesh.current
        model.rotation.y += delta
    })
    return (
        <mesh ref={mesh}
            onPointerCancel={() => console.log('update')}
        >
            <primitive object={obj} material={{}} />
            <meshStandardMaterial map={obj}/>
        </mesh>
    )
}
export default () => {
    return (
        <Canvas className={styles.canvas} camera={{ position: [1.4, 1, 0] }}>
            <ambientLight />
            <Box />
            <OrbitControls/>
        </Canvas>
    )
}