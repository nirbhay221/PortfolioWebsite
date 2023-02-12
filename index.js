import { createRoot } from "react-dom/client"
import Experience from './Experience.js'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { Physics} from "@react-three/cannon"
import './Loading.css'
import './styles.css'
import { Suspense } from "react"
import Phone from './Phone.js'
import MapAd from './MapsPhone.js'
import Monaco from './MonacoCar.js'
import Collider from './ColliderBox.js'

const root = createRoot(document.querySelector('#root'));
const pos1 = Math.random()*10;
const pos2 = Math.random()*10;
const pos3 = Math.random()*10;

root.render(
<>
<Suspense fallback ={<span ><div class="body">
    <div class = "container">
       <div class="text">
        <h1>Loading</h1><br />
        <h3>W , A , S , D to Move the Car.</h3>
       
       </div>
     

    </div>
</div>
</span>}>
<Canvas shadows >
    <Physics broadphase="SAP" gravity={[0,-2.5,0]}>
<color args={['#15151a']} />
<Experience></Experience>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>
<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>
<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>

<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>
<Collider rotation={[0,0,0]} position= {[pos1,pos2,pos3]}/>


{/* <CollidingBoxes position = {[6,1,0]} rotation = {[45,90,90]} scale = {[1,1]}/>

<CollidingBoxes position = {[7,1,0]} rotation = {[45,90,90]} scale = {[1,1]}/>

<CollidingBoxes position = {[8,1,0]} rotation = {[45,90,90]} scale = {[1,1]}/>

<CollidingBoxes position = {[9,1,0]} rotation = {[45,90,90]} scale = {[1,1]}/> */}
</Physics>
<Phone args={[2,2]} />
<MapAd args = {[2,2]} />
</Canvas>
</Suspense>
</>

)