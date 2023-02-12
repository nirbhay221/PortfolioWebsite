import React, { useRef,useLayoutEffect, useEffect } from "react";
import { useGLTF, useTexture,Reflector,Text } from "@react-three/drei";
import * as THREE from 'three'
import { MeshPhysicalMaterial, MeshStandardMaterial, ObjectSpaceNormalMap } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {useBox, useRaycastVehicle} from '@react-three/cannon'
import {useWheels} from './Wheelswork.js'
import {Quaternion, Vector3} from 'three'
import {useControls} from './useControls.js'
import { WheelDebug } from "./WheelDebug.js";
export default function AudiModel() {
  let ref = useRef();
  let myMesh = useRef();
  const { scene, nodes, materials } = useGLTF('./carmodel/AudiCar.glb')
  let mesh = useLoader(GLTFLoader , process.env.PUBLIC_URL+'./model/AudiCar.glb').scene;
  
  useLayoutEffect(() => {
  
    scene.traverse((obj) => obj.type === 'Mesh' && (obj.receiveShadow = obj.castShadow = true))
  Object.assign(nodes.BlackChassis.material,{ color : new THREE.Color("black"),
  roughness : 0.1,
  metalness : 0.9,
  envMapIntensity : 0.75,})
  Object.assign(nodes.FrontLightning.material,{roughness : 0.1,
    metalness : 0.9,
    envMapIntensity : 0.75,
  emissive :new THREE.Color("white"),
  emissiveIntensity: 10, toneMapped: false })
  Object.assign(nodes.WhiteLightning.material,{roughness : 0 ,
    metalness : 0.9,
  emissive :new THREE.Color("white"),
  emissiveIntensity: 100, toneMapped: false })
  Object.assign(nodes.WhiteLightning2.material,{roughness : 0 ,
    metalness : 0.9,
  emissive :new THREE.Color("white"),
  emissiveIntensity: 100, toneMapped: false })
  Object.assign(nodes.WhiteEmissionLining.material,{roughness : 0 ,
    metalness : 0.9,
  emissive :new THREE.Color("white"),
  emissiveIntensity: 100, toneMapped: false })
  Object.assign(nodes.WhiteEmissionFront.material,{roughness : 0 ,
    metalness : 0.9,
  emissive :new THREE.Color("white"),
  emissiveIntensity: 100, toneMapped: false })
  Object.assign(nodes.HoneyComb.material,{ color : new THREE.Color("silver"),
          roughness : 0.1,
          metalness : 0.55,
          envMapIntensity : 0.75,})
  Object.assign(nodes.BackMirror2.material,{ color: new THREE.Color("red"),
  opacity: 0.15,
  transparent: true,})
  Object.assign(nodes.BackMirror.material,{ color:new THREE.Color("red"),
  opacity: 0.1,
  transparent: true,})
  Object.assign(nodes.BackMirror1.material,{ color:new THREE.Color("red"),
  opacity: 0.1,
  transparent: true,})
  Object.assign(nodes.FrontHeadLights.material,{  color:new THREE.Color("lightblue"),
  roughness : 0.1,
    metalness : 0.9,
    envMapIntensity : 0.75,
  opacity: 0.1,
  transparent: true,})
  Object.assign(nodes.tirerim1.material,{  
    roughness : 0.1,
    metalness : 0.9,
    envMapIntensity : 0.75,})
    
  Object.assign(nodes.bluerim1.material,{  
    roughness : 0.05,
    metalness : 0.95,
    emissive :new THREE.Color("blue"),
  emissiveIntensity: 100, toneMapped: false,
    envMapIntensity : 0.75,})
 }, [scene, nodes, materials])


 useFrame((state,clock)=>{
  myMesh.current.rotation.y += clock;
 });
  
useEffect(()=>{
scene.scale.set(0.4,0.4,0.4);
scene.position.set(35,0,-12);
},[scene]
);

  return (
(
       <primitive object={scene} ref= {myMesh}/>
  )

  );
}
   


useGLTF.preload("./model/AudiCar.glb");
