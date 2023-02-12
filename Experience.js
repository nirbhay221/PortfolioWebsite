import {useState,useRef, useEffect} from 'react'
import {PerspectiveCamera,Html,ContactShadows,useGLTF,Environment, Float,PresentationControls,Text,rectAreaLight,OrbitControls,useHelper, useTexture, MeshReflectorMaterial, CubeCamera} from '@react-three/drei'
import {Canvas , useLoader,useFrame} from '@react-three/fiber'
import {BlendFunction} from 'postprocessing';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {Perf} from 'r3f-perf'
import * as THREE from 'three'
import './styles.css'
import Audi from './AudiCar.js'
import {Bloom , ChromaticAberration , DepthOfField, EffectComposer} from '@react-three/postprocessing'
import AnotherRGTCarAd from './RGTCarPhone.js'
import Scifi from './ScifiCar.js'
import MonacoAd from './MonacoCarPhone.js'
import ScifiAd from './ScifiCarPhone.js'
import AnotherRTCar from './AnotherRTCar.js'
import MclarenAd from './MclarenCarPhone.js'
import BugattiAd from './BugattiCarPhone.js'
import LycanCarAd from './LycanCarPhone.js'
import Mclaren from './MclarenCar.js'
import Monaco from './MonacoCar.js'

import F1Car from './F1Car'
import Ground from './Ground.js'
import Ring from './Rings.js'
import Planets from './PlanetsPhone'
import Abstract from './AbstractPhone'
import { BoxTrigger } from './ColliderBox'
import {useBox} from '@react-three/cannon'
import AudiAd from './AudiCarPhone.js'
import { Scene } from 'three'
import AudiModel from './DisplayAudi.js'

import MclarenModel from './DisplayMclarenCar.js'

import AnotherRGTModel from './DisplayAnotherRTCar.js'

import MonacoModel from './DisplayMonacoCar.js'
import ScifiModel from './DisplaySciFiCar.js'
export default function Experience(){
  const myMesh = useRef();
  const myMesh1 = useRef();
  const myMesh2 = useRef();
  const myMesh3 = useRef();
  const myMesh4 = useRef();
    let visible1 = false ;
    let visible2 = false;
    let visible3 = false;
    let visible4 = false;
    let visible5 = false;
    
    let visible6 = false;
    let visibleModels = ["Audi","RGT","Mclaren","Monaco","Scifi","F1"];

    const randomChoice = Math.floor(Math.random() * 6)
    ;
    // Math.floor(Math.random() * 5)
    if(randomChoice === 0){
      visible1 = true;
    }
    if(randomChoice === 1){
      visible2 = true;
    }
    if(randomChoice === 2){
      visible3 = true;
    }
    if(randomChoice === 3){
      visible4 = true;
    }
    if(randomChoice === 4){
      visible5 = true;
    }
    if(randomChoice === 5){
      visible6 = true;
    }
    let CollisionB= false;
    let CollisionA= false;

    const [thirdPerson,setThirdPerson] =useState(true);
    const [cameraPosition,setCameraPosition] = useState([-6,3.9,6.21]);

    useEffect(()=>{
        function keyDownHandler(e){
            if(e.key == "k"){
                if(thirdPerson) setCameraPosition([-6,3.9,6.21 +Math.random()*0.01]);
                setThirdPerson(!thirdPerson);
            }
            if(CollisionB){
          }
        }
        window.addEventListener("keydown",keyDownHandler);
        return () => window.removeEventListener("keydown",keyDownHandler);
    },[thirdPerson]
    );
    function VideoText(props) {
        const [video] = useState(() => Object.assign(document.createElement('video'), { src: './Videos/Scifi.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
        useEffect(() => void video.play(), [video])
        return (
          <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} {...props}>
            Portfolio
            <meshBasicMaterial toneMapped={false}>
              <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial>
          </Text>
        )
      }
      function InstructionText(props) {
        return (
          <Text font="/Inter-Bold.woff" fontSize={0.1} letterSpacing={-0.06} color = "white" {...props} position = {[6,1,-1]}>
           Press W,A,S,D for Car Controls and Press R to respawn .
          Press Arrow Keys to Escape Ground Problem .
            <meshBasicMaterial toneMapped={false}>
            </meshBasicMaterial>
          </Text>
        )
      }
      function CarText(props) {
        return (
          <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} color = "#ff2060" {...props} position = {[40,1.5,-5]}>
            Car Showcase
            <meshBasicMaterial toneMapped={false}>
            </meshBasicMaterial>
          </Text>
        )
      }
      function BlenderText(props) {
        return (
          <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} color = "orange" {...props} position = {[40,1.5,-20]}>
            Abstract Blender Showcase
            <meshBasicMaterial toneMapped={false}>
            </meshBasicMaterial>
          </Text>
        )
      }
      function BlenderMapText(props) {
        return (
          <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} color = "purple" {...props} position = {[-40,1.5,20]}>
            Maps
            <meshBasicMaterial toneMapped={false}>
            </meshBasicMaterial>
          </Text>
        )
      }
      function LinkedInText(props) {
        return (
          <Text font="/Inter-Bold.woff" fontSize={2} letterSpacing={-0.06} color = "cyan" {...props} position = {[35,1.5,15]}>
            LinkedIn
            <meshBasicMaterial toneMapped={false}>
            </meshBasicMaterial>
          </Text>
        )
      }
      function GithubText(props) {
        return (
          <Text font="/Inter-Bold.woff" fontSize={2} letterSpacing={-0.06} color = "cyan" {...props} position = {[45,1.5,15]}>
            Github
            <meshBasicMaterial toneMapped={false}>
            </meshBasicMaterial>
          </Text>
        )
      }
      function PlanetText(props) {
        return (
          <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} color = "lightgreen" {...props} position = {[-40,1.5,-5]}>
            Planets
            <meshBasicMaterial toneMapped={false}>
            </meshBasicMaterial>
          </Text>
        )
      }
      function ProfileText(props) {
        return (
          <Text font="/Inter-Bold.woff" fontSize={3} letterSpacing={-0.06} color = "white" {...props} position = {[40,1.5,20]}>
            User Links
            <meshBasicMaterial toneMapped={false}>
            </meshBasicMaterial>
          </Text>
        )
      }
      function LinkedInTrigger({ args, onCollide, position }) {
        const [ref] = useBox(() => ({ isTrigger: true, args, position, onCollide }))
        const posa = Math.random()*10;
        const posb = Math.random()*10;
        const posc = Math.random()*10;
        useFrame(({ clock }) => {
          
         
          
         
          const a = clock.getElapsedTime();
          if(posc == 1){

            myMesh.current.position.x += 0.0001*posa*a;
            myMesh.current.position.z += 0.0001*posb*a;
            myMesh1.current.position.x += 0.0001*posa*a;
            myMesh1.current.position.z += 0.0001*posc*a;
            myMesh2.current.position.x += 0.0001*posb*a;
            myMesh2.current.position.z += 0.0001*posc*a;
            myMesh3.current.position.x += 0.0001*posc*a;
            myMesh3.current.position.z += 0.0001*posc*a;
            myMesh4.current.position.x += 0.0001*posa*a;
            myMesh4.current.position.z += 0.0001*posa*a;
           }
          else{
            
            myMesh.current.position.x -= 0.0001*posa*a;
            myMesh.current.position.z -= 0.0001*posb*a;
            myMesh1.current.position.x -= 0.0001*posc*a;
            myMesh1.current.position.z -= 0.0001*posb*a;
            myMesh2.current.position.x -= 0.0001*posc*a;
            myMesh2.current.position.z -= 0.0001*posa*a;
            myMesh3.current.position.x -= 0.0001*posa*a;
            myMesh3.current.position.z -= 0.0001*posa*a;
            myMesh4.current.position.x -= 0.0001*posb*a;
            myMesh4.current.position.z -= 0.0001*posb*a;
          }
          if(CollisionB){
         window.open("https://github.com/nirbhay221");
          CollisionB = false;
        
        
        
        }
        if(CollisionA){
          myMesh.current.position.x += 0.01*a;
         window.open("https://www.linkedin.com/in/nirbhay-malhotra-90098b127/");
          CollisionA = false;
        
        
        
        }
  
        });
          return (
            <><mesh {...{ position, ref }}>
              <boxBufferGeometry args={args} />
              <meshStandardMaterial color="cyan" />
            </mesh>
           
            
            </>
          )
        }
  
     function BoxTrigger({ args, onCollide, position }) {
      const [ref] = useBox(() => ({ isTrigger: true, args, position, onCollide }))
      
      useFrame(({ clock }) => {
        
       
        
       
        const a = clock.getElapsedTime();
        if(CollisionB){
        myMesh.current.position.x += 0.01*a;
       window.open("https://github.com/nirbhay221");
        CollisionB = false;
      
      
      
      }

      });
        return (
          <><mesh {...{  ref ,position } }>
            <boxBufferGeometry args={args} />
            <meshStandardMaterial color="cyan"  emissiveIntensity={7} toneMapped={false}/>
          </mesh>
         
          
          </>
        )
      }

    return <> 
    
    <PerspectiveCamera makeDefault  position ={cameraPosition} fov = {40} />
    {!thirdPerson &&
    (
        <OrbitControls makeDefault position={cameraPosition} />
    )}
    <color args={[0,0,0]} attach = "background" />
   
    <spotLight
    color = {[4,2.25,3.7]}
    intensity = {1.5}
    angle = {0.6}
    penumbra ={0.5}
    position = {[25,5,-10]}
    castShadow 
    shadow-bias = {-0.0001}
    shadow-normalBias = {0.04}
    />
    
    
   
    <spotLight
    color = {[0.14,0.5,1]}
    intensity = {2}
    angle = {0.6}
    penumbra ={0.5}
    position = {[-5,5,0]}
    castShadow 
    shadow-bias = {-0.0001}
        shadow-normalBias = {0.04}

    />
     <spotLight
    color = {[0,0.5,1]}
    intensity = {10}
    angle = {0.6}
    penumbra ={0.5}
    position = {[-5,5,0]}
    castShadow 
    shadow-bias = {-0.0001}
        shadow-normalBias = {0.04}

    />
    {
            (texture) => (
<>
<Environment map = {texture} />
</>

)
        }
        <BoxTrigger args = {[6,1.5,0.5]} position={[45,-0.7,15]} onCollide={()=>{
         CollisionB = true;
          }}/>
           <LinkedInTrigger args = {[7,1.5,0.5]} position={[35,-0.7,15]} onCollide={()=>{
         CollisionA = true;
          }}/>
  <Ground/>
  {visible1 && <Monaco thirdPerson={thirdPerson} />}
  {visible2 && <Audi thirdPerson={thirdPerson} />}
  {visible3 && <AnotherRTCar thirdPerson={thirdPerson} />}
  {visible4 && <Mclaren thirdPerson={thirdPerson} />}
  {visible5 && <Scifi thirdPerson={thirdPerson} />}
  
  {visible6 && <F1Car thirdPerson={thirdPerson} />}
  <VideoText position={[0,1, 2]} />
  <CarText />
  <PlanetText />
  <Planets />
  <BlenderMapText />
  <ProfileText />
  <LinkedInText />
  <BlenderText />
  <Abstract />
  <GithubText />
  <InstructionText />
  {/* <AudiModel />
  <MclarenModel />
  <AnotherRGTModel />
  <MonacoModel />
  <ScifiModel /> */}
  {/* <mesh  position = {[30,1,-10]}>
         <cylinderBufferGeometry attach="geometry" args={[1,1,1,32]} />
         <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={60}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#151515"
            metalness={0.5}/>
      </mesh> */}
  <AudiAd /> 
 
<mesh ref ={myMesh}>
              <boxBufferGeometry args = {[0.2,0.2,0.2]}/>
              <meshStandardMaterial emissive="red"/>
            </mesh>
            <mesh ref ={myMesh1}>
              <boxBufferGeometry args = {[0.2,0.2,0.2]}/>
              <meshStandardMaterial emissive="red"/>
            </mesh>
            <mesh ref ={myMesh2}>
              <boxBufferGeometry args = {[0.2,0.2,0.2]}/>
              <meshStandardMaterial emissive="red"/>
            </mesh>
            <mesh ref ={myMesh3}>
              <boxBufferGeometry args = {[0.2,0.2,0.2]}/>
              <meshStandardMaterial emissive="red"/>
            </mesh>
            <mesh ref ={myMesh4}>
              <boxBufferGeometry args = {[0.2,0.2,0.2]}/>
              <meshStandardMaterial emissive="red"/>
            </mesh>

           <Ring />
           
    </>
}