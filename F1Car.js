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
export default function F1Car({thirdPerson}) {
  let ref = useRef();
  const { scene, nodes, materials } = useGLTF('./model/F1UpgradeCar.glb')

  useLayoutEffect(() => {
  
    scene.traverse((obj) => obj.type === 'Mesh' && (obj.receiveShadow = obj.castShadow = true))
    Object.assign(nodes.Circle
      .material,{roughness : 0.5,
      metalness : 0.9,
      envMapIntensity : 0.75,
    emissive :new THREE.Color("red"),
    emissiveIntensity: 10, toneMapped: false })
   
    Object.assign(nodes.Redone
      .material,{roughness : 0.5,
      metalness : 0.9,
      envMapIntensity : 0.75,
    emissive :new THREE.Color("red"),
    emissiveIntensity: 10, toneMapped: false })
    Object.assign(nodes.Chassis
      .material,{roughness : 0.5,
      metalness : 0.9,
      envMapIntensity : 0.75,
    emissive :new THREE.Color("cyan"),
    emissiveIntensity: 10, toneMapped: false })
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
scene.scale.set(0.1,0.1,0.1);
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
   


useGLTF.preload("./model/F1UpgradeCar.glb");
