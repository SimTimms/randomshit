import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import ModelScript from './ModelScript';
import { Html, useProgress } from '@react-three/drei';
import { Column, Row } from '../components';
import uploaderScreenshot from '../components/uploaderScreenshot';
import { Button } from '../components';
import { Mutation } from '@apollo/client/react/components';
import { SAVE_GAME_IMAGE } from './data';
import { toaster } from '../utils/toaster';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { Typography } from '@mui/material';
import { PartNameContext } from '../context';
import Profile from './Profile';
import Controls from './Controls';
import { useGLTF } from '@react-three/drei';
import Tilt from 'react-parallax-tilt';
import Ads from './Ads';
import { paints } from './paints';
import mp3dLogo from '../assets/branding/mp3dlogoinsta.png';
import { partNames } from './partNames';
import ultra from '../assets/ultra.png';
import baal from '../assets/baal.jpg';
function Loader() {
  const { progress } = useProgress();
  return (
    <Html
      center
      style={{
        whiteSpace: 'nowrap',
        padding: 15,
        borderRadius: 3,
        color: '#222',
        opacity: progress / 100,
        fontFamily: 'arial',
      }}
    >
      {`Loading ${progress.toString().substring(0, 2)}%, please wait!`}
    </Html>
  );
}

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {' '}
    {props.children}
  </button>
));

export default function ModelLoader({
  activeColor,
  sprayMode,
  gltfIn,
  gameId,
  lightOne,
  lightTwo,
  lightThree,
  lightFour,
  lightFive,
  lightSix,
  lightSeven,
  box,
  panels,
  setPanels,
  back,
  login,
  history,
  markings,
  profilePriority,
  modelName,
  modelArtist,
}) {
  const [screenshot, setScreenshot] = React.useState(null);
  const [armourColor, setArmourColor] = React.useState(null);
  const [shading, setShading] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const [wait, setWait] = React.useState(false);
  const [torso, setTorso] = React.useState(null);
  const [shoulder, setShoulder] = React.useState(null);
  const [head, setHead] = React.useState(null);
  const [handr, setHandr] = React.useState(null);
  const [instaFrame, setInstaFrame] = React.useState(false);
  const [NFTFrame, setNFTFrame] = React.useState(false);
  const [recipe, setRecipe] = React.useState(false);
  const [partName, setPartName] = React.useState('Part');
  const canvas = useRef(null);
  let count = useRef(0);
  function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }
  useEffect(() => {
    if (!shading && activeColor.type === 'Shade') {
      setShading(true);
    }
  }, [activeColor, shading]);

  function jsonConvert() {
    {
      const jsonData = JSON.parse(
        localStorage.getItem('modelColorSave').replaceAll(/\\"/gi, '"')
      );
      return Object.keys(jsonData).map((item) => {
        return `${partNames[item] || item}: ${jsonData[item].name}`;
      });
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100%',
      }}
    >
      <Column h="100%">
        {(!panels || panels === 'unitDetails') && (
          <div
            style={{
              zIndex: 10,
              position: 'relative',
              width: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              background: '#111',
              borderBottom: `1px solid rgba(0,0,0,0.4)`,
            }}
          >
            {back && (
              <Button
                menuItem={{
                  name: 'Back',
                  color: 'light',
                }}
                icon="chevron_left"
                onClickEvent={() => back()}
                white={true}
              />
            )}
            <Row j="flex-start">
              <Button
                menuItem={{
                  name: 'Lighting',
                  color: 'light',
                }}
                onClickEvent={() => setPanels('lighting')}
              />
              {/*   <MenuButtonStandard
                title="Info"
                icon="palette"
                onClickEvent={() => setPanels('details')}
                white="#fff"
           />*/}
              {profilePriority === 0 && modelName.name === 'Firstborn' && (
                <Row>
                  <Button
                    menuItem={{
                      name: 'Markings',
                      color: 'light',
                    }}
                    onClickEvent={() => setPanels('markings')}
                    white={true}
                  />
                  <Button
                    menuItem={{
                      name: 'Armour',
                      color: 'light',
                    }}
                    onClickEvent={() => {
                      const paintArr = [
                        paints.green[3].color,
                        paints.red[3].color,
                        paints.blue[3].color,
                        paints.orange[3].color,
                        paints.grey[3].color,
                        paints.turquoise[0].color,
                        paints.metallic[4].color,
                        paints.grey[0].color,
                      ];
                      count.current = count.current + 1;
                      if (count.current > paintArr.length - 1) {
                        count.current = 0;
                      }
                      setArmourColor(paintArr[count.current]);
                    }}
                    white={true}
                  />
                </Row>
              )}
            </Row>
            {/*
            <CircleButton
              title="Details"
              icon="details"
              onClickEvent={() =>
                setPanels(panels === 'unitDetails' ? '' : 'unitDetails')
              }
            />*/}
            <Button
              menuItem={{
                name: 'Instagram',
                color: 'light',
              }}
              onClickEvent={() => {
                setInstaFrame(instaFrame ? false : true);
              }}
              white={true}
            />
            <Button
              menuItem={{
                name: 'NFT',
                color: 'light',
              }}
              onClickEvent={() => {
                setNFTFrame(NFTFrame ? false : true);
              }}
              white={true}
            />
            <Button
              menuItem={{
                name: 'Recipe',
                color: 'light',
              }}
              onClickEvent={() => {
                setRecipe(recipe ? false : true);
              }}
              white={true}
            />
            <Mutation
              mutation={SAVE_GAME_IMAGE}
              onCompleted={(data) => {
                setScreenshot(data.savedGameCreateOne.record.url);
                toaster('Photo Saved');
                setWait(false);
              }}
            >
              {(mutation) => {
                return (
                  <Button
                    menuItem={{
                      name: 'Screenshot',
                      color: 'light',
                    }}
                    onClickEvent={() => {
                      if (!wait) {
                        uploaderScreenshot(
                          dataURItoBlob(canvas.current.toDataURL()),
                          mutation,
                          gameId
                        );
                        setWait(true);
                      }
                    }}
                    white={true}
                  />
                );
              }}
            </Mutation>
            {screenshot && (
              <Row>
                <div style={{ marginTop: 5, marginLeft: 3, marginRight: 5 }}>
                  <TwitterShareButton
                    url={screenshot
                      .replace(
                        'https://random-shit-store.s3.amazonaws.com/',
                        'https://minipainter3d.herokuapp.com/photo?photo='
                      )
                      .replace('.jpg', '')
                      .trim()}
                    title={`Made with MiniPainter3d`}
                    className="shareBtn col-md-1 col-sm-1 col-xs-1"
                    hashtags={['miniaturepainting', 'warhammercommunity']}
                    related={['@timsimmsdev']}
                  >
                    <TwitterIcon size={24} round={true} />
                  </TwitterShareButton>
                </div>
              </Row>
            )}
          </div>
        )}
        {screenshot && (
          <div
            style={{
              display: 'flex',
              zIndex: 10,
              alignItems: 'center',
              justifyContent: 'center',
              left: 0,
              width: '100vw',
              height: '100vh',
              position: 'fixed',
            }}
            onClick={() => setScreenshot(null)}
          >
            <Tilt
              className="tilt"
              tiltMaxAngleX={40}
              tiltMaxAngleY={40}
              perspective={1000}
              transitionSpeed={1000}
              scale={1}
              gyroscope={true}
              glareEnable={true}
              glareOpacity={0.4}
              glareBorderRadius={10}
              tiltReverse={true}
            >
              <div
                style={{
                  width: 280,
                  height: 400,
                  border: '5px solid #fff',
                  zIndex: 10,
                  borderRadius: 10,
                  boxShadow: '5px 5px 10px rgba(0,0,0,0.3)',
                  background: '#111',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: 200,
                    backgroundColor: '#222',
                    backgroundImage: `url(${screenshot})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: 40,

                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${ultra})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        minWidth: 30,
                        minHeight: 30,
                        maxWidth: 30,
                        maxHeight: 30,
                        border: '2px solid #aaa',
                        margin: 5,
                        borderRadius: '50%',
                      }}
                    ></div>
                    <Typography
                      variant="h5"
                      style={{
                        background: '#fff',
                        width: '100%',
                        textAlign: 'center',
                      }}
                    >
                      Primaris Marine
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 200,
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ marginTop: 5 }}></div>
                  <Typography variant="h5">Sgt Demetrius</Typography>
                  <div style={{ marginTop: 5 }}></div>
                  <Typography>
                    Bolt Rifle | Plasma Pistol | Frag Grenades
                  </Typography>
                  <div
                    style={{
                      marginTop: 10,
                      borderTop: '1px solid #ddd',
                      paddingBottom: 10,
                      width: 100,
                    }}
                  ></div>
                  <Typography align="center" style={{ fontSize: '0.8rem' }}>
                    Born on Calth, has a might fine ponytale though never
                    removes his helmet.
                  </Typography>
                  <div
                    style={{
                      marginTop: 10,
                      borderTop: '1px solid #ddd',
                      paddingBottom: 10,
                      width: 100,
                    }}
                  ></div>
                  <Typography align="center" style={{ fontSize: '0.8rem' }}>
                    Best buddies with Marneus
                  </Typography>
                </div>
              </div>
            </Tilt>
          </div>
        )}
        <PartNameContext.Provider
          value={{
            partName: partName,
            setPartName: setPartName,
          }}
        >
          <Row w="100%" h="100%">
            <PartNameContext.Consumer>
              {({ partName }) => {
                console.log('c', partName);
              }}
            </PartNameContext.Consumer>
            <Controls
              shading={shading}
              setShading={setShading}
              rotate={rotate}
              setRotate={setRotate}
              setHead={setHead}
              setTorso={setTorso}
              setShoulder={setShoulder}
              setHandr={setHandr}
            />

            {/* <Profile />*/}
            {NFTFrame && (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `url(${baal})`,
                }}
              >
                <div
                  style={{
                    width: '540px',
                    height: '540px',
                    border: '1px solid #ddd',
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}
                ></div>
              </div>
            )}
            {instaFrame && (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#fff',
                }}
              >
                <div
                  style={{
                    width: '540px',
                    height: '540px',
                    border: '1px solid #ddd',
                    display: 'flex',
                    alignItems: 'flex-start',
                    background:
                      'linear-gradient(141deg, rgba(255,255,255,1) 0%, rgba(218,218,218,1) 100%)',
                  }}
                >
                  <Row w="100%" j="space-between" a="flex-start">
                    <img src={mp3dLogo} style={{ height: 80, padding: 5 }} />
                    <Typography
                      variant="h5"
                      style={{ fontSize: 10, padding: 5, color: '#aaa' }}
                    >
                      MINIPAINTER3D.COM
                    </Typography>
                  </Row>
                </div>
              </div>
            )}
            {recipe && (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#fff',
                }}
              >
                <div
                  style={{
                    width: '540px',
                    height: '540px',
                    border: '1px solid #ddd',
                    display: 'flex',
                    alignItems: 'flex-start',
                    background:
                      'linear-gradient(141deg, rgba(255,255,255,1) 0%, rgba(218,218,218,1) 100%)',
                  }}
                >
                  <Row w="100%" j="space-between" a="flex-start">
                    <img src={mp3dLogo} style={{ height: 80, padding: 5 }} />
                    <Typography
                      variant="h5"
                      style={{ fontSize: 10, padding: 5, color: '#aaa' }}
                    >
                      {jsonConvert()}
                    </Typography>
                  </Row>
                </div>
              </div>
            )}

            <Canvas
              pixelRatio={[1, 2]}
              camera={{ position: [0, 200, 250], fov: 10, far: 700 }}
              ref={canvas}
              gl={{ preserveDrawingBuffer: true }}
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Suspense fallback={<Loader />}>
                <group name="sun" position={[500, 900, 0]}>
                  <ambientLight intensity={lightOne / 50} />
                </group>
                <group name="sun" position={[50, 0, 0]}>
                  <spotLight intensity={lightTwo / 50} />
                </group>
                <group name="sun" position={[-50, 0, 0]}>
                  <spotLight intensity={lightThree / 50} />
                </group>
                <group name="sun" position={[0, 50, 0]}>
                  <spotLight intensity={lightFour / 50} />
                </group>
                <group name="sun" position={[0, -50, 0]}>
                  <spotLight intensity={lightFive / 50} />
                </group>
                <group name="sun" position={[0, 0, 50]}>
                  <spotLight intensity={lightSix / 50} />
                </group>
                <group name="sun" position={[0, 0, -50]}>
                  <spotLight intensity={lightSeven / 50} />
                </group>
                <group position={[0, -8, 0]}>
                  <ModelScript
                    activeColor={activeColor}
                    sprayMode={sprayMode}
                    gltfIn={gltfIn}
                    markings={markings}
                    armourColor={armourColor}
                    shading={shading}
                    partName={partName}
                    setPartName={setPartName}
                  />
                  {head && !screenshot && (
                    <ModelScript
                      activeColor={activeColor}
                      sprayMode={sprayMode}
                      gltfIn={head}
                      markings={markings}
                      armourColor={armourColor}
                      shading={shading}
                      partName={partName}
                      setPartName={setPartName}
                    />
                  )}
                  {handr && !screenshot && (
                    <ModelScript
                      activeColor={activeColor}
                      sprayMode={sprayMode}
                      gltfIn={handr}
                      markings={markings}
                      armourColor={armourColor}
                      shading={shading}
                      partName={partName}
                      setPartName={setPartName}
                    />
                  )}
                  {torso && !screenshot && (
                    <ModelScript
                      activeColor={activeColor}
                      sprayMode={sprayMode}
                      gltfIn={torso}
                      markings={markings}
                      armourColor={armourColor}
                      shading={shading}
                      partName={partName}
                      setPartName={setPartName}
                    />
                  )}
                  {shoulder && !screenshot && (
                    <ModelScript
                      activeColor={activeColor}
                      sprayMode={sprayMode}
                      gltfIn={shoulder}
                      markings={markings}
                      armourColor={armourColor}
                      shading={shading}
                      partName={partName}
                      setPartName={setPartName}
                    />
                  )}
                </group>

                {box && (
                  <group position={[0, -8, 0]}>
                    <ModelScript
                      activeColor={null}
                      sprayMode={sprayMode}
                      gltfIn={box.gltf}
                      armourColor={null}
                    />
                  </group>
                )}
              </Suspense>
              <OrbitControls
                target={[0, 0, 0]}
                maxDistance={500}
                autoRotate={rotate}
                autoRotateSpeed={5}
              />
            </Canvas>
            {/*  <Ads modelArtist={modelArtist} />*/}
          </Row>
        </PartNameContext.Provider>
      </Column>
    </div>
  );
}
