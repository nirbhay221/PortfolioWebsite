import {useState,useRef, useEffect} from 'react'
import {Image,PerspectiveCamera,Html,ContactShadows,useGLTF,Environment, Float,PresentationControls,Text,rectAreaLight,OrbitControls,useHelper, useTexture, MeshReflectorMaterial, CubeCamera} from '@react-three/drei'
import {Canvas , useLoader,useFrame} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {Perf} from 'r3f-perf'
import * as THREE from 'three'
import './styles.css'
import Areus from "./Areus.jpg"
import Nebula from "./nebula.jpg"
import Oregon from "./Oregon.jpg"
import Oreon from "./oreon.jpg"
import Meklar from "./meklop.jpg"
import Kental from "./Kental.jpg"
import Pleras from "./pleras.jpg"
import Tret from "./tret.jpg"
import Vegeta from "./vegeta.jpg"
import Earia from "./EarthPrehistoric.jpg"

export default function Planets() {
  const texture1 = useLoader(THREE.TextureLoader, Areus)
  
  const texture2 = useLoader(THREE.TextureLoader, Nebula)
  
  const texture3 = useLoader(THREE.TextureLoader, Oregon)
  
  const texture4 = useLoader(THREE.TextureLoader, Oreon)
  
  const texture5 = useLoader(THREE.TextureLoader, Meklar)
  
  const texture6 = useLoader(THREE.TextureLoader, Kental)
  
  const texture7 = useLoader(THREE.TextureLoader, Pleras)
  
  const texture8 = useLoader(THREE.TextureLoader, Tret)
  
  const texture9 = useLoader(THREE.TextureLoader, Vegeta)
  
  const texture10 = useLoader(THREE.TextureLoader, Earia)

 return (
   
      <group >

      
      <mesh position={[-40,1.5,-15]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture1} />
      </mesh>
      <mesh position={[-45,1.5,-15]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture2} />
      </mesh><mesh position={[-35,1.5,-15]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture3} />
      </mesh><mesh position={[-30,1.5,-15]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture4} />
      </mesh><mesh position={[-50,1.5,-15]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture5} />
      </mesh><mesh position={[-55,1.5,-15]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture6} />
      </mesh><mesh position={[-25,1.5,-15]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture7} />
      </mesh><mesh position={[-35,1.5,-30]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture8} />
      </mesh><mesh position={[-40,1.5,-30]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture9} />
      </mesh><mesh position={[-45,1.5,-30]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture10} />
      </mesh>
    </group>
  );
}

