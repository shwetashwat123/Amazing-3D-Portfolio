import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/hackerRoom";
import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import CanvasLoader from "../components/canvasloader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/target";
import ReactLogo from "../components/reactLogo";
import Cube from "../components/cube";
import Rings from "../components/rings";
import HeroCamera from "../components/herocamera";
const Hero = () => {
    // const x = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     }, positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     }, positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     }, rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     }, rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     }, rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     }, scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10
    //     }, scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10
    //     }, scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10
    //     }
    // })

    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const isSmall = useMediaQuery({ maxWidth: 440 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen border-blue-500 flex flex-col  relative">
            <div className="sm:mt-36 mt-20"> <p className="font-generalsans text-white sm:3xl text-2xl font-medium text-center ">Hi,I am Shwetashwat<span className="mx-2 waving-hand">👋</span></p>
                <p className="text-gray_gradient text-center mt-3 text-3xl mr-15 font-medium">Building Products and Brands</p>

            </div>



            <div className="w-full h-full absolute mt-10 inset-0">
                <Leva />
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                // scale={0.07}
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>

                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>


                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero;