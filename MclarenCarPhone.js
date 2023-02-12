import {useState,useRef, useEffect} from 'react'
import {PerspectiveCamera,Html,ContactShadows,useGLTF,Environment, Float,PresentationControls,Text,rectAreaLight,OrbitControls,useHelper, useTexture, MeshReflectorMaterial, CubeCamera} from '@react-three/drei'
import {Canvas , useLoader,useFrame} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {Perf} from 'r3f-perf'
import * as THREE from 'three'
import './styles.css'
import Audi from './AudiCar.js'
import Ground from './Ground.js'
import Ring from './Rings.js'

export default function MclarenAd() {
  const { nodes, materials } = useGLTF("./model/phone.glb");
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: './Videos/Scifi.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
        useEffect(() => void video.play(), [video])
  return (
   
      <group        position={[42,1.5,-15]}         rotation={[-Math.PI*1 , 0.5*Math.PI, 0.5*Math.PI]}>

<boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
       
      
      <mesh rotation-x={Math.PI * -0.5} rotation-y={Math.PI * -1} rotation-z={Math.PI * -0.5} position-y={-0.1}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshStandardMaterial emissive={"white"} >
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} /></meshStandardMaterial></mesh>
     
    </group>
  );
}

useGLTF.preload("./model/phone.glb");
