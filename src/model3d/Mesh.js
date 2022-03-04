import React, { useEffect } from 'react';
import * as THREE from 'three';
import { ColorContext } from '../context';
import { Html } from '@react-three/drei';
export default function Mesh({
  geometry,
  name,
  decalNormal,
  decals,
  position,
  rotation,
  scale,
  activeColor,
  texture,
  materialIn,
  armourColor,
  video,
  shadeMode,
}) {
  const [material, setMaterial] = React.useState(null);
  const [meshColor, setMeshColor] = React.useState('#aaa');
  const [shadeColor, setShadeColor] = React.useState('#aaa');
  const [decalItem, setDecalItem] = React.useState(null);
  const [shadeItem, setShadeItem] = React.useState(null);
  const [paintMode, setPaintMode] = React.useState(0);
  const metals = [
    '#9e573c',
    '#f5b13d',
    '#848484',
    '#e6b351',
    '#ced2d4',
    '#a9afb4',
    '#6a7071',
    '#c89e5b',
    '#b55513',
    '#c17a3c',
    '#a97753',
    '#e9b860',
    '#8b431e',
    '#a28167',
    '#98542c',
    '#b49b95',
    '#00708a',
    '#b8c4cc',
    '#b6aca5',
    '#625f5c',
    '#946347',
    '#d0875b',
    '#695844',
  ];
  useEffect(() => {
    let savedColors = localStorage.getItem('modelColorSave');
    if (
      armourColor === null &&
      savedColors !== 'null' &&
      savedColors !== null
    ) {
      savedColors = JSON.parse(savedColors);
      if (savedColors[name] && savedColors[name].color !== meshColor) {
        setMeshColor(savedColors[name].color);
      }
    } else if (armourColor !== null) {
      setMeshColor(armourColor);
    }

    if (texture && !material) {
      var texLoader = new THREE.TextureLoader();

      const texLoaded = texLoader.load(texture);
      const materialNew = new THREE.MeshStandardMaterial({
        ...materialIn,
        transparent: true,
        map: texLoaded ? texLoaded : null,
      });
      setMaterial(materialNew);
    }

    if (!material && !texture) {
      const materialNew = new THREE.MeshStandardMaterial({
        ...materialIn,
        transparent: true,
      });
      setMaterial(materialNew);
    }

    if (!shadeItem && name === 'stg_O`Primey006') {
      var texLoader = new THREE.TextureLoader();
      const texLoaded = texLoader.load(
        'https://random-shit-store.s3.eu-west-2.amazonaws.com/614b73c98a97c40c65957b89/Primaris/Arm+2+Shade.png'
      );
      const materialNew = new THREE.MeshLambertMaterial({
        transparent: true,
        map: texLoaded,
        flipY: true,
      });

      setShadeItem(materialNew);
    }

    if (!decalItem || video || (decalItem && decalItem !== decals)) {
      if (decals) {
        var texLoader = new THREE.TextureLoader();
        const texLoaded = texLoader.load(texture);
        const materialNew = new THREE.MeshStandardMaterial({
          ...materialIn,
          transparent: true,
          map: texLoaded,
        });

        setDecalItem(materialNew);
      } else if (video) {
        setMeshColor('#030C1B');
        if (name === 'ScreenOne') {
          const vid = document.createElement('video');
          vid.src = '/Exodite.mp4';
          vid.crossOrigin = 'Anonymous';
          vid.loop = true;
          vid.muted = true;
          vid.play();
          const texLoaded = new THREE.VideoTexture(vid);
          //var texLoader = new THREE.TextureLoader();
          //    const texLoaded = texLoader.load(texture);
          const materialNew = new THREE.MeshStandardMaterial({
            ...materialIn,
            transparent: true,
            map: texLoaded,
          });

          setMaterial(materialNew);
        }
        if (name === 'ScreenThree') {
          var texLoader = new THREE.TextureLoader();

          const texLoaded = texLoader.load('/gwtac.jpg');
          const materialNew = new THREE.MeshBasicMaterial({
            map: texLoaded,
            color: '#555',
          });
          setMaterial(materialNew);
        }
        if (name === 'ScreenTwo') {
          var texLoader = new THREE.TextureLoader();

          const texLoaded = texLoader.load('/warcom.jpg');
          const materialNew = new THREE.MeshBasicMaterial({
            map: texLoaded,
            color: '#555',
          });
          setMaterial(materialNew);
        }
        if (name === 'ScreenFour') {
          var texLoader = new THREE.TextureLoader();

          const texLoaded = texLoader.load('/whplus.png');
          const materialNew = new THREE.MeshBasicMaterial({
            map: texLoaded,
            color: '#555',
          });
          setMaterial(materialNew);
        }
      } else {
        setDecalItem(null);
      }
    }
  }, [decalNormal, decals, meshColor]);

  //https://random-shit-store.s3.eu-west-2.amazonaws.com/614b73c98a97c40c65957b89/Primaris/Arm+2+Shade.png
  return !material ? null : (
    <group
      position={position && position}
      rotation={rotation && rotation}
      scale={scale && scale}
    >
      <mesh
        onClick={(e) => {
          /*
          if (name === 'ScreenTwo') {
            window.open(
              'https://www.warhammer-community.com/2021/12/22/who-is-the-exodite-check-out-the-trailer-for-the-thrilling-new-warhammer-tv-series/',
              '_blank'
            );
          }
          if (name === 'ScreenOne') {
            window.open('https://warhammerplus.com/', '_blank');
          }*/
        }}
        onPointerDown={(e) => paintMode !== 1 && !shadeMode && setPaintMode(1)}
        onPointerUp={(e) => {
          if (paintMode === 1 && !shadeMode) {
            e.stopPropagation();
            let savedColors = localStorage.getItem('modelColorSave');
            if (savedColors === 'null' || savedColors === null) {
              savedColors = {};
            } else {
              savedColors = JSON.parse(savedColors);
            }

            if (activeColor) {
              savedColors[name] = {
                color: activeColor.color,
                name: activeColor.name,
              };
              localStorage.setItem(
                'modelColorSave',
                JSON.stringify(savedColors)
              );

              setMeshColor(activeColor.color);
            }
          }
        }}
        onPointerMove={(e) => paintMode !== 0 && !shadeMode && setPaintMode(0)}
        geometry={geometry}
        material={material}
        material-color={meshColor}
        material-metalness={metals.indexOf(meshColor) > -1 ? 0.7 : 0}
        material-roughness={metals.indexOf(meshColor) > -1 ? 0.5 : 1}
      />
      {decalItem && <mesh geometry={geometry} material={decalItem} />}
      {shadeItem && (
        <mesh
          geometry={geometry}
          material={shadeItem}
          material-color={shadeColor}
          onPointerDown={(e) => paintMode !== 1 && shadeMode && setPaintMode(1)}
          onPointerUp={(e) => {
            if (paintMode === 1 && shadeMode) {
              e.stopPropagation();

              if (activeColor) {
                setShadeColor(activeColor.color);
              }
            }
          }}
          onPointerMove={(e) => paintMode !== 0 && shadeMode && setPaintMode(0)}
        />
      )}
    </group>
  );
}
