'use client'
import { Canvas } from "@react-three/fiber"
import Scuba from "./_components/Scuba";

export default async function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#44DCEA] to-[#002d8a] text-white ">
        <Canvas>
          <ambientLight/>
          <Scuba/>
        </Canvas>
      </main>
    </>
  );
}
