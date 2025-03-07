import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

function About() {
    const [hasCopied, setHasCopied] = useState(false);


    const handleCopy =()=>{
        navigator.clipboard.writeText('nafsdev007@gmail.com');
        setHasCopied(true);

        setTimeout(()=>{
            setHasCopied(false)
        },2000)
    }



  return (
    <section id='about' className='c-space my-20'>
        <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full h-fit sm:h-[276px] object-contain' />
                    <div className="">
                        <p className='grid-headtext'>Hi, I'm Nafiz</p>
                        <p className='grid-subtext'>With 1.5 years of experience, I have honed my skills in frontend development, with a focus on animated 3D websites.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full h-fit sm:w-[276px] object-contain' />
                    <p className='grid-headtext'>Tech Stack</p>
                    <p className='grid-subtext'>I specialize in JavaScript/TypeScript with a focus on React and Three.js ecosystems.</p>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe
                        height={326}
                        width={326}
                        backgroundColor='rgba(0,0,0,0)'
                        showAtmosphere
                        showGraticules
                        backgroundImageOpacity={0.5}
                        globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
                        bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
                        labelsData={[{
                            lat:23.6943,lng:90.3444,
                            text:"I'm Here",
                            color:"white",
                            size:30
                        }]}
                        />
                    </div>
                    <div className="">
                        <p className='grid-headtext'>I work remotely across most timezones.</p>
                        <p className="grid-subtext">I'm based in Bangladesh, with remote work available.</p>
                        <Button name={"Contact Me"} isBeam containerClass="w-full mt-10"/>
                    </div>

                </div>
            </div>
            
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container"><img src="/assets/grid3.png" alt="grid-3" className='w-full h-fit sm:w-[576px] object-contain' />
                <div>
                    <p className='grid-headtext'>My Passion for Coding</p>
                    <p className='grid-subtext'>I love solving problems and building things through code. Coding isn't just my profession - it is my passion.</p>
                </div>
                </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] object-cover sm:object-top h-fit sm:w-[276px] object-cover' />
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>nafsdev007@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About