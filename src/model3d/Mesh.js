import React, { useEffect } from 'react';
import * as THREE from 'three';
import gwtac from '../assets/gwtac.jpg';
import reactive from '../assets/reactive.png';
import reactiveem from '../assets/reactiveem.png';

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
  shading,
  paint,
  setTargetA,
  targetA,
  buttons,
}) {
  const [material, setMaterial] = React.useState(null);
  const [shadeMaterial, setShadeMaterial] = React.useState(null);
  const [meshColor, setMeshColor] = React.useState('#fff');
  const [shadeColor, setShadeColor] = React.useState(null);
  const [decalItem, setDecalItem] = React.useState(null);
  const [paintMode, setPaintMode] = React.useState(0);

  useEffect(() => {
    if (paint !== null) {
      const paintParsed = JSON.parse(paint);
      paintParsed[name] && setMeshColor(paintParsed[name].color);
    }

    if (!material && !texture) {
      if (
        name === 'ScreenTwo' ||
        name === 'ScreenTwo003' ||
        name === 'ScreenThree001'
      ) {
        var texLoader = new THREE.TextureLoader();
        const texLoaded = texLoader.load(gwtac);

        const materialNew = new THREE.MeshStandardMaterial({
          ...materialIn,
          map: texLoaded ? texLoaded : null,
          transparent: true,
        });
        setMaterial(materialNew);
      } else if (name === 'ScreenThree003') {
        var texLoader = new THREE.TextureLoader();
        const texLoaded = texLoader.load(reactive);
        const texLoadedem = texLoader.load(reactiveem);

        const materialNew = new THREE.MeshStandardMaterial({
          map: texLoaded ? texLoaded : null,
          emissiveMap: texLoadedem,
          emissive: '#ff0fd8',
          color: '#fff',
          flatShading: true,
          transparent: true,
        });
        setMaterial(materialNew);
      } else {
        const materialNew = new THREE.MeshStandardMaterial({
          ...materialIn,
          transparent: true,
        });
        setMaterial(materialNew);
      }
    }
    if (!shadeMaterial && shading) {
      var texLoader = new THREE.TextureLoader();
      try {
        let nameReplace = materialIn.map.image.src.replace(
          `https://random-shit-store.s3.amazonaws.com/614b73c98a97c40c65957b89/Primaris/`,
          ''
        );
        nameReplace = nameReplace.replace('.png', '');

        const texLoaded = texLoader.load(
          `https://random-shit-store.s3.eu-west-2.amazonaws.com/614b73c98a97c40c65957b89/Primaris/${nameReplace}%20Shade.png`
        );

        const materialNew = new THREE.MeshStandardMaterial({
          ...materialIn,
          map: texLoaded ? texLoaded : null,
          transparent: true,
        });

        setShadeMaterial(materialNew);
      } catch (error) {
        console.log(error);
      }
    }

    if (!decalItem || video || (decalItem && decalItem !== decals)) {
      if (video) {
        setMeshColor('#030C1B');
        if (name === 'ScreenOne') {
          const vid = document.createElement('video');
          vid.src = video;
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

          const texLoaded = texLoader.load(
            video === '/corvus.mp4' ? '/cortac.jpg' : '/gwtac.jpg'
          );
          const materialNew = new THREE.MeshBasicMaterial({
            map: texLoaded,
            color: '#555',
          });
          setMaterial(materialNew);
        }
        if (name === 'ScreenTwo') {
          var texLoader = new THREE.TextureLoader();

          const texLoaded = texLoader.load(
            video === '/corvus.mp4' ? '/cortac2.jpg' : '/warcom.jpg'
          );
          const materialNew = new THREE.MeshBasicMaterial({
            map: texLoaded,
            color: '#555',
          });
          setMaterial(materialNew);
        }
        if (name === 'ScreenFour') {
          var texLoader = new THREE.TextureLoader();

          const texLoaded = texLoader.load(
            video === '/corvus.mp4' ? '/corvus.jpg' : '/whplus.png'
          );
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
        onPointerDown={(e) => paintMode !== 1 && setPaintMode(1)}
        onPointerUp={(e) => {
          if (paintMode === 1) {
            if (buttons.indexOf(name) > -1) {
              setTargetA({
                position: [-30, 0, 100],
                target: [position[0], position[1] - 7, position[2]],
              });
            } else {
              setTargetA({
                position: [0, 0, 400],
                target: [0, 0, 0],
              });
            }
            if (activeColor.type !== 'Shade') {
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
          }
        }}
        onPointerMove={(e) => paintMode !== 0 && !shading && setPaintMode(0)}
        geometry={geometry}
        material={material}
        material-color={meshColor}
        material-metalness={0}
        material-roughness={0}
      />
      {decalItem && <mesh geometry={geometry} material={decalItem} />}
    </group>
  );
}
