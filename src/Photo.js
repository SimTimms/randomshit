import React from 'react';

export default function Photo({ imageIn }) {
  return (
    <div>
      <img
        src={`https://random-shit-store.s3.amazonaws.com/${imageIn}.jpg`}
        alt={`${imageIn}`}
      />
    </div>
  );
}
