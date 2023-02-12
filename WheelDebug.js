const debug = false ; 
export const WheelDebug = ({radius , wheelRef}) => {
    return debug && (
        <group ref = {wheelRef}>
            <scene rotation  = {[0,0,Math.PI/2]}>
                <cylinderGeometry args ={[radius,radius,0.015,16]}/>
                <meshNormalMaterial transparennt = {true} opacity = {0.25} />
            </scene>
        </group>
    )
}