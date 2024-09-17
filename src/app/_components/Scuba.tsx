'use client'
import { OrbitControls } from "@react-three/drei"
import { useEffect, useRef } from "react";
import { Mesh } from "three"

const Scuba = () => {
  
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    console.log(Boolean(meshRef.current!));
  },[])
  
  return(
    <>
    <OrbitControls/>
    <mesh ref={meshRef}>
      <boxGeometry/>
      <meshBasicMaterial/>
    </mesh>
    </>
  )
}

export default Scuba