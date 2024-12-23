
import * as THREE from 'three'
import { useRef } from 'react'
import { Trail, Float, Sphere } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

const ReactLogo = (props) => {
    return (

            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <Atom {...props} />
            </Float>

    )
}

function Atom(props) {

    return (
        <group {...props}>
            <Electron position={[0, 0, 0.5]} speed={6} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
            <Sphere args={[0.2, 20, 20]}>
                <meshBasicMaterial color={[1, 0.1, 1]} toneMapped={false} />
            </Sphere>
        </group>
    )
}

function Electron({ radius = 3, speed = 2, ...props }) {
    const ref = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed
        ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
    })
    return (
        <group {...props}>
            <Trail  width={1} length={6} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
                <mesh ref={ref}>
                    <sphereGeometry args={[0.25]} />
                    <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
                </mesh>
            </Trail>
        </group>
    )
}

export default ReactLogo