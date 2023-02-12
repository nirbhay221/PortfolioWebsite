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

export default function Phone() {
  const { nodes, materials } = useGLTF("./model/phone.glb");
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: './videoplayback.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
        useEffect(() => void video.play(), [video])
  return (
   
      <group          position={[0,1.48,0]}         rotation={[-Math.PI*1 , 0.5*Math.PI, 0.5*Math.PI]}>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_3.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_4.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_5.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_6.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_7.geometry}
          material={nodes.Plane006_7.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_8.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_9.geometry}
          material={materials["Material.009"]} 
        />
      
      <mesh rotation-x={Math.PI * -0.5} rotation-y={Math.PI * -1} rotation-z={Math.PI * -0.5} position-y={-0.1}>
        <planeGeometry args={[4.4, 2.3]} />
        <meshStandardMaterial emissive={"white"} >
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload("./model/phone.glb");
