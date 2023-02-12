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
export default function Audi({thirdPerson}) {
  let ref = useRef();
  const { scene, nodes, materials } = useGLTF('./model/AudiCar.glb')
 
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
   


useGLTF.preload("./model/AudiCar.glb");
