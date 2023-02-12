import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";
import {usePlane} from "@react-three/cannon"
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'

export default function Ground(){
    const[roughness , normal] = useLoader(TextureLoader,[process.env.PUBLIC_URL 
        + "./textures/vertopal.com_cracked_concrete_wall_rough_4k.jpg",process.env.PUBLIC_URL +"./textures/vertopal.com_cracked_concrete_wall_nor_gl_4k.jpg",]);
    useEffect(() => {
        [normal,roughness].forEach((t) => {
t.wrapS = RepeatWrapping;
t.wrapT = RepeatWrapping;
t.repeat.set(1000,1000);
        })
        
    normal.encoding = LinearEncoding;
    },[normal,roughness]
    );
const [ref] = usePlane(
    () => ({
        type : 'Static',
        position:[0,-0.1,0],
        rotation : [-Math.PI/2,0,0]
    }),useRef(null)
);


    return(
<>
<mesh rotation-x ={-Math.PI*0.5} castShadow receiveShadow >
    <planeGeometry args = {[1000,1000]} />
    <MeshReflectorMaterial
    envMapIntensity={0}
    normalMap = {normal}
    normalScale = {[0.15,0.15]}
    roughnessMap = {roughness}
    dithering = {true}
    color = {[0.015 , 0.015 , 0.015] }
    roughness ={0.7}
    blur = {[1000,400]}
    mixBlur ={30}
    mixStrength ={80}
    mixContrast ={1}
    resolution = {1024}
    mirror = {0}
    depthScale = {0.01}
    minDepthThreshold = {0.9}
    maxDepthThreshold = {1}
    depthToBlurRatioBias = {0.25}
    debug = {0}
    reflectorOffset = {0.2}
    
    
    ></MeshReflectorMaterial>
</mesh>



</>
    );
        
    
}