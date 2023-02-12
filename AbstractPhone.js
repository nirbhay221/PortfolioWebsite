import {useState,useRef, useEffect} from 'react'
import {Image,PerspectiveCamera,Html,ContactShadows,useGLTF,Environment, Float,PresentationControls,Text,rectAreaLight,OrbitControls,useHelper, useTexture, MeshReflectorMaterial, CubeCamera} from '@react-three/drei'
import {Canvas , useLoader,useFrame} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {Perf} from 'r3f-perf'
import * as THREE from 'three'
import './styles.css'
import pyramid1 from "./pyramidone.jpg"
import pyramid2 from "./pyramidtwo.jpg"
import pyramid3 from "./pyramidthree.jpg"
import pyramid4 from "./pyramid5.jpg"

import BlackHole from "./BlackHole.jpg"
import newabs from "./newabs.jpg"
import Sun from "./Sun.jpg"
import Building from "./building.jpg"
import NewBuilding from "./buildingnew.jpg"
import New from "./new.jpg"
import NewSun from "./newSun.jpg"
import Water from "./water.jpg"

export default function Abstract() {
  const texture1 = useLoader(THREE.TextureLoader, pyramid1)
  
  const texture2 = useLoader(THREE.TextureLoader, pyramid2)
  
  const texture3 = useLoader(THREE.TextureLoader, pyramid3)
  
  const texture4 = useLoader(THREE.TextureLoader, pyramid4)
  
  const texture5 = useLoader(THREE.TextureLoader, newabs)
  
  const texture6 = useLoader(THREE.TextureLoader, Sun)
  
  const texture7 = useLoader(THREE.TextureLoader, BlackHole)
  
  const texture8 = useLoader(THREE.TextureLoader, Building)
  
  const texture9 = useLoader(THREE.TextureLoader, New)
  
  const texture10 = useLoader(THREE.TextureLoader, NewBuilding)
  
  const texture11 = useLoader(THREE.TextureLoader, NewSun)
  
  
  const texture12 = useLoader(THREE.TextureLoader, Water)

 return (
   
      <group >

      
      <mesh position={[40,1.5,-25]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture1} />
      </mesh>
      <mesh position={[45,1.5,-25]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture2} />
      </mesh><mesh position={[35,1.5,-25]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture3} />
      </mesh><mesh position={[30,1.5,-25]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture4} />
      </mesh><mesh position={[50,1.5,-25]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture5} />
      </mesh><mesh position={[55,1.5,-25]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture6} />
      </mesh><mesh position={[25,1.5,-25]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture7} />
      </mesh>
      <mesh position={[25,1.5,-40]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture8} />
      </mesh>
      <mesh position={[30,1.5,-40]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture9} />
      </mesh>
      <mesh position={[35,1.5,-40]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture10} />
      </mesh>
      <mesh position={[40,1.5,-40]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture11} />
      </mesh>
      <mesh position={[45,1.5,-40]}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshBasicMaterial attach="material" map={texture12} />
      </mesh>
    </group>
  );
}

