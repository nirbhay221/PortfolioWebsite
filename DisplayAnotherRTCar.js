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

export default function AnotherRGTModel() {
  let ref = useRef();
  let myMesh = useRef();
  const { scene, nodes, materials } = useGLTF('./carmodel/AnotheRGTCar.glb')
  let mesh = useLoader(GLTFLoader , process.env.PUBLIC_URL+'./carmodel/AnotheRGTCar.glb').scene;
  
  useLayoutEffect(() => {
  
    scene.traverse((obj) => obj.type === 'Mesh' && (obj.receiveShadow = obj.castShadow = true))
  }, [scene, nodes, materials])


 useFrame((state,clock)=>{
  myMesh.current.rotation.y += clock;
 });
  
useEffect(()=>{
scene.scale.set(0.4,0.4,0.4);
scene.position.set(39,0,-12);
},[scene]
);

  return (
(
       <primitive object={scene} ref= {myMesh}/>
  )

  );
}
   


useGLTF.preload("./carmodel/AnotherRGTCar.glb");
