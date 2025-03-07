import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { workExperiences } from "../constant";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

function Experience() {
  const  [animation, setAnimation] = useState("idle");

  return (
    <section className="my-20 c-space">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={1.3}/>
              <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
              <directionalLight intensity={1} position={[10,10,10]} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader/>}>
                <Developer animationsName={animation} position-y={-3} scale={3}/>
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ name, pos, duration, title, animation, icon, id }) => (
                  <div className="work-content_container group"
                  onClick={()=>{setAnimation(animation.toLocaleLowerCase()) }} 
                  onPointerOver={()=>setAnimation(animation.toLowerCase())} key={id}
                  onPointerOut={()=>{setAnimation("idle")}}
                  >
                    <div className="flex flex-col items-center h-full justify-start py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar"/>
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">{pos} -- {duration}</p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
