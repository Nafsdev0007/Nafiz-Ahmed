import { PerspectiveCamera, Sphere, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { HackerRoom } from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constant";
import Target from "../components/Target";
import { ReactLogo } from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 400 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);



  return (
    <section id="hero" className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-24 mt-28 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Nafiz <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target
                isSmall={isMobile}
                rotation={[0, Math.PI / 5, 0]}
                position={sizes.targetPosition}
              />
              <ReactLogo
                isMobile={isMobile}
                position={sizes.reactLogoPosition}
              />
              <Cube isMobile={isMobile} position={sizes.cubePosition} />
              <Rings isMobile={isMobile} position={sizes.ringPosition} />
            </group>


            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 z-10 c-space w-full">
        <a href="#about" className="w-fit">
          <Button
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
            name="Let's make epic shit together"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
