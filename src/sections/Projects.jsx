import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import DemoComputer from '../components/DemoComputer';
import CanvasLoader from '../components/canvasloader';

const projectCount = myProjects.length;

const Projects = () => {

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        console.log(direction)
        setSelectedProjectIndex((currentIndex) => {
            console.log(projectCount);
            if (direction === 'previous') {
                return currentIndex === 0 ? projectCount - 1 : currentIndex - 1
            } else {
                return currentIndex === projectCount - 1 ? 0 : currentIndex + 1
            }
        })
    }


    return (
        <section className='c-space my-20'>
            <p className='head-text'>My Work</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <div className='flex flex-col gap-5 relative sm:p-10 shadow-2xl shadow-black-200'>
                    <div className='absolute top-0 right-0'>
                        <img src={myProjects[0].spotlight} alt='spotlight' className='w-full h-96 object-cover rounded-xl' />
                    </div>

                    <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={myProjects[0].logoStyle} alt='logo'>
                        <img src={myProjects[selectedProjectIndex].logo} alt='logo' className='w-10 h-10 shadow-sm' />
                    </div>
                    <div className='flex flex-col gap-5 text-white-500 my-5' >
                        <p className='text-white text-2xl font-semibold text-animated'>{currentProject.title}</p>
                        <p className='animatedText'>{currentProject.desc}</p>
                        <p className='animatedText'>{currentProject.subdesc}</p>
                    </div>
                    <div className='flex items-center justify-between flex-wrap gap-5'>
                        <div className='flex items-center gap-3'>

                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className='tech-logo'>

                                    <img src={tag.path} alt={tag.name} />

                                </div>
                            ))}

                        </div>
                        <a className='flex items-center gap-3 cursor-pointer text-white-500' href={currentProject.href} target='_blank' rel='moreferrer'>

                            <p>Check live site</p>
                            <img src='/assets/arrow-up.png' className='h-3 w-3' />

                        </a>
                    </div>

                    <div className='flex justify-between items-center mt-7'>

                        <button className='arrow-btn' onClick={() => { handleNavigation('previous') }}>
                            <img src='/assets/left-arrow.png' className='w-4 h-4' alt='left arrow' />
                        </button>
                        <button className='arrow-btn' onClick={() => { handleNavigation('next') }}>
                            <img src='/assets/right-arrow.png' className='w-4 h-4' alt='right arrow' />
                        </button>
                    </div>

                </div>

                <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full '>

                    <Canvas>
                        <ambientLight intensity={Math.PI / 2} />
                        <directionalLight />
                        <Center />
                        <Suspense fallback={<CanvasLoader />}>
                            <group scale={1.5} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                <DemoComputer />
                            </group>
                        </Suspense>
                        <OrbitControls maxPolarAngle={Math.PI} enableZoom={false} />
                    </Canvas>

                </div>

            </div>
        </section>
    )
}

export default Projects