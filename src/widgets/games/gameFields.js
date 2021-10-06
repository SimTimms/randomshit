import React from 'react';
import { useStyles } from './styles';
import { FieldBox, Column, ModelUploader, InputLabel } from '../../components';

export default function GameFields({ game, setGame }) {
  return (
    <Column a="center" j="center">
      <InputLabel
        title=".gltf File"
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
            gltf: url,
          });
        }}
        styleOverride={null}
        className={null}
        cbDelete={null}
        hasFile={false}
        size="2MB PNG JPG GIF"
        imageCategory="game"
        modelFolder={game.name}
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
        size="2MB PNG JPG GIF"
        imageCategory="game"
        modelFolder={game.name}
      />
      <FieldBox
        value={game.name}
        title="Model Name"
        maxLength={86}
        minLength={1}
        onChangeEvent={(e) => {
          setGame({
            ...game,
            name: e,
          });
        }}
        replaceMode="loose"
        placeholder="Examples: Firstborn | Dreadnought | Fighter Jet"
        info="What's this model called?"
        warning=""
        size="s"
        multiline={false}
      />
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
    </Column>
  );
}
