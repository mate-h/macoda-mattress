import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props: any) {
  const group = useRef()
  // @ts-ignore
  const { nodes, materials, animations } = useGLTF('/model.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[3.54, -13.4, -17.61]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape4.geometry}
          material={materials['04 - Default']}
          position={[-6.6, -31.59, -9.28]}
          rotation={[Math.PI / 2, 0.04, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001.geometry}
          material={materials['03 - Default']}
          position={[-0.01, -1.65, -0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lining001.geometry}
          material={materials['02 - Default']}
          position={[-1.52, 2.69, -1.44]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Quilt003.geometry}
          material={materials['01 - Default']}
          position={[-1.52, 1.5, -1.44]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-4.11, -14.89, -17.57]}
      />
    </group>
  )
}

useGLTF.preload('/model.glb')