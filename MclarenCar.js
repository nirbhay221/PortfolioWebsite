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
export default function Mclaren({thirdPerson}) {
  let ref = useRef();
  const { scene, nodes, materials } = useGLTF('./model/mclarencar.glb')
  useLayoutEffect(() => {
  
    scene.traverse((obj) => obj.type === 'Mesh' && (obj.receiveShadow = obj.castShadow = true))
   
    Object.assign(nodes.RedLightBackUp.material,{roughness : 0 ,
      metalness : 0.8,
    emissive :new THREE.Color("red"),
    emissiveIntensity: 1000, toneMapped: false })
    Object.assign(nodes.WhiteLight.material,{roughness : 0.1 ,
      metalness : 0.8,
    emissive :new THREE.Color("white"),
    emissiveIntensity: 1000, toneMapped: false })
    Object.assign(nodes.WhiteSecond.material,{roughness : 0.1 ,
      metalness : 0.8,
    emissive :new THREE.Color("white"),
    emissiveIntensity: 1000, toneMapped: false })
    Object.assign(nodes.WhiteThird.material,{roughness : 0.1 ,
      metalness : 0.8,
    emissive :new THREE.Color("white"),
    emissiveIntensity: 1000, toneMapped: false })
    Object.assign(nodes.FrontMirror.material,{ color: new THREE.Color("white"),
   opacity : 0.2,
    transparent: true,})
    Object.assign(nodes.FrontWindow.material,{ color: new THREE.Color("black"),
    opacity: 0.9,
    transparent: true,})
    Object.assign(nodes.SideWindow.material,{ color:new THREE.Color("black"),
    opacity: 0.95,
    transparent: true,})
    Object.assign(nodes.Mirror.material,{ color:new THREE.Color("white"),
    opacity: 0.1,
    transparent: true,})
  
    Object.assign(nodes.BackWindow.material,{ color: new THREE.Color("white"),
    opacity: 0.1,
    transparent: true,})
 }, [scene, nodes, materials])

const position = [0,1, 0];
const width = 0.15 ; 
const height = 0.07 ; 
const front = 0.15 ; 
const wheelRadius = 0.05 ;
const chassisBodyArgs = [width , height , front*2];
const [chassisBody,chassisApi] = useBox(
  ()=>({
    args : chassisBodyArgs,
    mass : 150 , 
    position ,
  }), useRef(null),
);
const [wheels,wheelInfos] = useWheels(width,height , front , wheelRadius);
 const [vehicle,vehicleApi] = useRaycastVehicle(() => ({
  chassisBody , 
   wheelInfos,
   wheels
 }), useRef(null),
 );
 useControls(vehicleApi,chassisApi);
 useFrame((state)=>{
  if(!thirdPerson) return;
  let position = new Vector3(0,0,0);
  position.setFromMatrixPosition(chassisBody.current.matrixWorld);
  let quaternion = new Quaternion(0,0,0,0);
  quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld);
  let Dir = new Vector3(0,0,-100);
  Dir.applyQuaternion(quaternion);
  Dir.normalize();
  let cameraPosition = position.clone().add(
    Dir.clone().multiplyScalar(1).add(
      new Vector3(5,3,8)
    )
  );
  Dir.add(new Vector3(0,3,0));
  state.camera.position.copy(cameraPosition);
  state.camera.lookAt(position);
});
useEffect(()=>{
scene.scale.set(0.15,0.15,0.15);
},[scene]
);

  return (
(
  <group ref ={vehicle} name = "vehicle">

    <group ref = {chassisBody} name = "chassisBody">
       <primitive object={scene} />
    </group>
    
  <WheelDebug wheelRef = {wheels[0]} radius = {wheelRadius} />
 
  <WheelDebug wheelRef = {wheels[1]} radius = {wheelRadius} />
  <WheelDebug wheelRef = {wheels[2]} radius = {wheelRadius} />
  <WheelDebug wheelRef = {wheels[3]} radius = {wheelRadius} />
  </group>
  )

  );
}
   


useGLTF.preload('./model/mclarencar.glb');
