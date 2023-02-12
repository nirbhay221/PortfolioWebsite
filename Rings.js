import { useFrame } from '@react-three/fiber';
import {useRef} from 'react'
export default function Ring(){
    console.log("it works")

return (
    <>
        <mesh 
        castShadow 
        receiveShadow
        position = {[20,0,0]}   rotation={[0 ,Math.PI / 2, 0]}
        >
            <torusGeometry args= {[3.35,0.05,16,100]} />
            <meshStandardMaterial emissive = {[1,1,0]} color = {[1,1,0]} />
</mesh>
<mesh 
        castShadow 
        receiveShadow
        position = {[22,0,0]}   rotation={[0 ,Math.PI / 2, 0]}
        >
            <torusGeometry args= {[2.35,0.03,8,50]} />
            <meshStandardMaterial emissive = {[2,7,3]} color = {[1,0,2]} />
</mesh>
<mesh 
        castShadow 
        receiveShadow
        position = {[24,0,0]}   rotation={[0 ,Math.PI / 2, 0]}
        >
            <torusGeometry args= {[0.35,0.02,6,25]} />
            <meshStandardMaterial emissive = "cyan" color = {[0,0,1]} />
</mesh>
<mesh 
        castShadow 
        receiveShadow
        position = {[-14,0,0]}   rotation={[0 ,Math.PI / 2, 0]}
        >
            <torusGeometry args= {[3.35,0.05,16,100]} />
            <meshStandardMaterial emissive = {[1,1,0]} color = {[1,1,0]} />
</mesh>

<mesh 
        castShadow 
        receiveShadow
        position = {[-16,0,0]}   rotation={[0 ,Math.PI / 2, 0]}
        >
            <torusGeometry args= {[2.35,0.03,8,50]} />
            <meshStandardMaterial emissive = {[2,7,3]} color = {[1,0,2]} />
</mesh><mesh 
        castShadow 
        receiveShadow
        position = {[-18,0,0]}   rotation={[0 ,Math.PI / 2, 0]}
        >
            <torusGeometry args= {[0.35,0.02,6,25]} />
            <meshStandardMaterial emissive = "cyan" color = {[0,0,1]} />
</mesh>
    </>
);
}