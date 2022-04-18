import React, { Suspense, useRef } from 'react';
import {
  FieldBox,
  Column,
  ModelUploader,
  Uploader,
  TextureUploader,
  InputLabel,
  Divider,
} from '../../components';
import Section from './Section';
import { Typography } from '@mui/material';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import ModelScript from '../../model3d/ModelScript';
import { Html, useProgress } from '@react-three/drei';
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

export default function GameFields({ game, setGame }) {
  const canvas = useRef(null);
  return (
    <Column a="center" j="center">
      <Section title="Details" locked={false}>
        <InputLabel
          title="Model Name"
          icon={null}
          value={game.name}
          maxLength={46}
          minLength={5}
          info={''}
          warning={''}
        />
        <FieldBox
          value={game.name}
          title="Model Name"
          maxLength={46}
          minLength={5}
          onChangeEvent={(e) => {
            setGame({
              ...game,
              name: e,
            });
          }}
          replaceMode="tight"
          placeholder="Examples: Firstborn | Dreadnought | Fighter Jet"
          info="What's this model called?"
          warning=""
          size="s"
          multiline={false}
        />
        <InputLabel
          title="Image"
          icon={null}
          value={null}
          maxLength={46}
          minLength={5}
          info={''}
          warning={''}
        />
        <Uploader
          cbImage={(url) => {
            setGame({
              ...game,
              featureImage: url,
            });
          }}
          styleOverride={null}
          className={null}
          cbDelete={null}
          hasFile={false}
          size={
            !game.featureImage
              ? '2MB Max | .jpg or .png format '
              : game.featureImage.length > 0
              ? 'OK'
              : 'Must be named scene.bin'
          }
          imageCategory="game"
        />
      </Section>
      <Divider />
      <Section title="GLTF Files" locked={game.name.length < 5 ? true : false}>
        <Typography variant="body2" style={{ marginTop: 5, marginBottom: 5 }}>
          Upload your GLTF files. The app expects a file named <b>scene.gltf</b>{' '}
          and another file named <b>scene.bin</b>
        </Typography>
        <InputLabel
          title="scene.gltf"
          icon={null}
          value={null}
          maxLength={null}
          warning={''}
        />
        <ModelUploader
          cbImage={(url) => {
            setGame({
              ...game,
              gltf: url,
            });
          }}
          styleOverride={null}
          className={null}
          cbDelete={null}
          hasFile={false}
          fileTypes={`.gltf`}
          size={
            !game.gltf
              ? '20MB Max | .gltf format '
              : game.gltf.indexOf('.gltf') > -1
              ? 'OK'
              : 'Must be named scene.gltf'
          }
          imageCategory="game"
          modelFolder={game.js}
        />
        <InputLabel
          title=".bin File"
          icon={null}
          value={null}
          maxLength={null}
          info={'Include an image with this post.....if you want.'}
          warning={''}
        />
        <ModelUploader
          cbImage={(url) => {
            setGame({
              ...game,
              bin: url,
            });
          }}
          styleOverride={null}
          className={null}
          cbDelete={null}
          hasFile={false}
          fileTypes={`.bin`}
          size={
            !game.bin
              ? '20MB Max | .bin format '
              : game.bin.indexOf('.bin') > -1
              ? 'OK'
              : 'Must be named scene.bin'
          }
          imageCategory="game"
          modelFolder={game.js}
        />
        <InputLabel
          title="Preview"
          icon={null}
          value={null}
          maxLength={null}
          warning={''}
        />
        <div
          style={{
            boxShadow: '5px 5px 10px rgba(0,0,0,0.2)',
            border: '1px solid #fff',
            height: 300,
            marginTop: 10,
          }}
        >
          {game.gltf !== '' && game.bin !== '' && (
            <Canvas
              pixelRatio={[1, 2]}
              camera={{ position: [0, 200, 250], fov: 10, far: 700 }}
              ref={canvas}
              gl={{ preserveDrawingBuffer: true }}
              style={{
                background: '#fff',
                height: '100%',
                width: '100%',
              }}
            >
              <Suspense fallback={<Loader />}>
                <group name="sun" position={[500, 900, 0]}>
                  <ambientLight intensity={10 / 50} />
                </group>
                <group name="sun" position={[0, 0, 50]}>
                  <spotLight intensity={200 / 50} />
                </group>

                <group position={[0, -8, 0]}>
                  <ModelScript
                    activeColor={'#eee'}
                    sprayMode={false}
                    gltfIn={game.gltf}
                    markings={null}
                    armourColor={null}
                    shading={null}
                  />
                </group>
              </Suspense>
            </Canvas>
          )}
        </div>
      </Section>
      <Divider />
      <Section
        title="Textures"
        locked={game.gltf === '' || game.bin === '' || !game.name}
      >
        <InputLabel
          title="Textures"
          icon={null}
          value={null}
          info={''}
          warning={''}
        />

        <TextureUploader
          cbImage={(textureArr) => {
            setGame({ ...game, textures: textureArr });
          }}
          styleOverride={null}
          className={null}
          cbDelete={null}
          hasFile={false}
          size={
            game.textures === ''
              ? '2MB Max Each | .jpg or .png format'
              : `${game.textures.length} Textures`
          }
          imageCategory="game"
          modelFolder={game.js}
        />
      </Section>
      <Divider />
      <Section title="Credits" locked={!game.gltf || !game.bin || !game.name}>
        <Typography variant="body2" style={{ marginTop: 5, marginBottom: 5 }}>
          This section is optional but it's worth filling out if you made the
          model, and if you didn't then please direct people to the person who
          did.
        </Typography>
        <InputLabel
          title="Artist Name"
          icon={null}
          value={game.artistName}
          maxLength={100}
          info={'Who made this model'}
          warning={''}
        />
        <FieldBox
          value={game.artistName}
          title="Artist Name"
          maxLength={186}
          minLength={1}
          onChangeEvent={(e) => {
            setGame({
              ...game,
              artistName: e,
            });
          }}
          replaceMode="loose"
          placeholder="Artist Name"
          warning=""
          size="s"
          multiline={false}
        />
        <InputLabel
          title="Link to Artist Website"
          icon={null}
          value={game.artistLink}
          maxLength={256}
          info={'Add a link to this artists website or socials'}
          warning={''}
        />
        <FieldBox
          value={game.artistLink}
          title="Artist Link"
          maxLength={186}
          minLength={1}
          onChangeEvent={(e) => {
            setGame({
              ...game,
              artistLink: e,
            });
          }}
          placeholder="Artist Link"
          warning=""
          size="s"
          multiline={false}
        />
        <InputLabel
          title="Licence"
          icon={null}
          value={game.licenseLink}
          maxLength={256}
          info={'If a licence is required then add a link to it here'}
          warning={''}
        />
        <FieldBox
          value={game.licenseLink}
          title="License Link"
          maxLength={186}
          minLength={1}
          onChangeEvent={(e) => {
            setGame({
              ...game,
              licenseLink: e,
            });
          }}
          placeholder="License Link"
          warning=""
          size="s"
          multiline={false}
        />
        <InputLabel
          title="Copyright"
          icon={null}
          value={game.copyrightDescription}
          maxLength={256}
          info={'If a copyright notice is required then add a link to it here'}
          warning={''}
        />
        <FieldBox
          value={game.copyrightDescription}
          title="Copyright"
          maxLength={186}
          minLength={1}
          onChangeEvent={(e) => {
            setGame({
              ...game,
              copyrightDescription: e,
            });
          }}
          placeholder="Copyright"
          warning=""
          size="s"
          multiline={false}
        />
        <InputLabel
          title="Where to Buy Link"
          icon={null}
          value={game.whereToBuyLink}
          maxLength={256}
          info={'Add a link to where this model can be bought'}
          warning={''}
        />
        <FieldBox
          value={game.whereToBuyLink}
          title="Where To Buy"
          maxLength={186}
          minLength={1}
          onChangeEvent={(e) => {
            setGame({
              ...game,
              whereToBuyLink: e,
            });
          }}
          placeholder="Where To Buy"
          warning=""
          size="s"
          multiline={false}
        />
        <InputLabel
          title="Model Link"
          icon={null}
          value={game.url}
          maxLength={256}
          info={'Link to this model on an external site'}
          warning={''}
        />
        <FieldBox
          value={game.url}
          title="URL"
          maxLength={512}
          onChangeEvent={(e) => {
            setGame({
              ...game,
              url: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: sketchfab/mymodel"
          info="Where can this model be downloaded"
          warning=""
          size="s"
          multiline={false}
        />
      </Section>
      {/*
      <FieldBox
        value={game.summary}
        title="Summary"
        maxLength={512}
        onChangeEvent={(e) => {
          setGame({
            ...game,
            summary: e,
          });
        }}
        replaceMode="loose"
        placeholder="Example: I made this"
        info="What's this project or game called?"
        warning=""
        size="s"
        multiline={true}
      />*/}
    </Column>
  );
}
