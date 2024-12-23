import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className='min-h-screen w-full flex flex-col relative bg-black'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
<p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>I am Mobolaji <span className='waving-hand'>👋🏾</span></p>
       <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
            </div>
        <div className='w-full h-full absolute inset-0'>
            {/*<Leva/>*/}
            <Canvas className='size-full'>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                    <HeroCamera isMobile={isMobile}>
                    <HackerRoom
                        scale={sizes.deskScale}
                        position={sizes.deskPosition}
                        rotation={[0,-Math.PI,0]}
                    />
                    </HeroCamera>
                    <group>
                <Target position={sizes.targetPosition} />
                        <ReactLogo position={sizes.reactLogoPosition}  scale={0.6} />
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}/>
                        <EffectComposer>
                            <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
                        </EffectComposer>
                    </group>



                    <ambientLight intensity={1}/>
                    <directionalLight position={[20, 20, 20]} intensity={0.5}/>
                </Suspense>
            </Canvas>
        </div>
            <div className='absolute left-0 right-0 bottom-7 z-10 w-full c-space'>
<a className='w-full' href='#about'>
<Button name="Let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96'>

</Button>
</a>
            </div>
        </section>
    )
}
export default Hero
