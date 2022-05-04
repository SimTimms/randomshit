import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Html, useProgress } from '@react-three/drei';
import { useThree } from 'react-three-fiber';
import { PartNameContext } from '../context';
import { useStyles } from './htmlStyles';
import { partNames } from './partNames';
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
}) {
  const [material, setMaterial] = React.useState(null);
  const [shadeMaterial, setShadeMaterial] = React.useState(null);
  const [meshColor, setMeshColor] = React.useState('#aaa');
  const [previewColor, setPreviewColor] = React.useState(null);
  const [shadeColor, setShadeColor] = React.useState(null);
  const [partName, setPartName] = React.useState(null);
  const [decalItem, setDecalItem] = React.useState(null);
  const [mousePos, setMousePos] = React.useState(null);
  const [paintMode, setPaintMode] = React.useState(0);
  const classes = useStyles();
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
    console.log('Render');
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

  function getColor(partName) {
    {
      const jsonData = JSON.parse(
        localStorage.getItem('modelColorSave').replaceAll(/\\"/gi, '"')
      );

      return jsonData[partName] ? jsonData[partName].name : '';
    }
  }

  return !material ? null : (
    <group
      position={position && position}
      rotation={rotation && rotation}
      scale={scale && scale}
    >
      <mesh
        onPointerDown={(e) => paintMode !== 1 && setPaintMode(1)}
        onPointerUp={(e) => {
          if (paintMode === 1) {
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
        onPointerMove={(e) => {
          e.stopPropagation();
          // !previewColor && setPreviewColor(activeColor.color);
          paintMode !== 0 && !shading && setPaintMode(0);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          //  !previewColor && setPreviewColor(activeColor.color);
          !partName && setPartName(name);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          //  previewColor && setPreviewColor(null);
          setPartName(null);
        }}
        geometry={geometry}
        material={material}
        material-color={
          armourColor ? armourColor : previewColor ? previewColor : meshColor
        }
        material-metalness={metals.indexOf(meshColor) > -1 ? 0.7 : 0}
        material-roughness={metals.indexOf(meshColor) > -1 ? 0.5 : 1}
      />
      {decalItem && <mesh geometry={geometry} material={decalItem} />}
      {partName && (
        <group position={[0, -3, 0]}>
          <Html center={true}>
            <div
              style={{
                width: '100vw',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  color: 'rgba(0,0,0,0.5)',
                  textAlign: 'center',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  padding: 5,
                  borderRadius: 2,
                  width: 200,
                  boxShadow: 'inset 3px 3px 5px rgba(0,0,0,0.3)',
                  fontFamily: 'Roboto,sans-serif',
                }}
              >
                {getColor(partName)}
              </div>
            </div>
          </Html>
        </group>
      )}
    </group>
  );
}
