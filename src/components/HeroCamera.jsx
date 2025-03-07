import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

function HeroCamera({ children, isMobile }) {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    // Always update camera position
    easing.damp3(state.camera.position, [0, 0, 20], 0.21, delta);

    // Only attempt rotation if not mobile and ref is available
    if (!isMobile && groupRef.current) {
      try {
        easing.dampE(
          groupRef.current.rotation,
          [-state.pointer.y / 3, state.pointer.x / 5, 0],
          0.21,
          delta
        );
      } catch (error) {
        console.warn("Error applying camera rotation:", error);
      }
    }
  });

  return <group scale={1.15} ref={groupRef}>{children}</group>;
}

export default HeroCamera;
