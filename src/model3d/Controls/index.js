import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import { Column, Row } from '../../components';
import { PART_BY_TYPE } from './data';
import { Query } from '@apollo/client/react/components';
export default function Controls({
  shading,
  setShading,
  rotate,
  setRotate,
  setDetails,
  details,
  setHead,
  setTorso,
  setHandr,
  setShoulder,
}) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Column a="flex-start" j="space-between">
        <Row a="flex-start" j="flex-start" mt={10}>
          <Typography style={{ marginLeft: 10, color: '#aaa' }}>
            Shading:{' '}
          </Typography>
          <Typography
            onClick={() => setShading(shading ? false : true)}
            style={{ cursor: 'pointer', color: '#aaa' }}
          >
            {shading ? 'On' : 'Off'}
          </Typography>
        </Row>
        <Row a="flex-start" j="flex-start" mt={10}>
          <Typography style={{ marginLeft: 10, color: '#aaa' }}>
            Rotate:{' '}
          </Typography>
          <Typography
            onClick={() => setRotate(rotate ? false : true)}
            style={{ cursor: 'pointer', color: '#aaa' }}
          >
            {rotate ? 'On' : 'Off'}
          </Typography>
        </Row>
        <Query
          query={PART_BY_TYPE}
          variables={{ type: 'Head' }}
          fetchPolicy="network-only"
        >
          {({ data, loading }) => {
            return loading
              ? null
              : data &&
                  data.gameMany.map((item) => (
                    <button onClick={() => setHead(item.gltf)}>
                      {item.name}
                    </button>
                  ));
          }}
        </Query>
        <Query
          query={PART_BY_TYPE}
          variables={{ type: 'Shoulder' }}
          fetchPolicy="network-only"
        >
          {({ data, loading }) => {
            return loading
              ? null
              : data &&
                  data.gameMany.map((item) => (
                    <button onClick={() => setShoulder(item.gltf)}>
                      {item.name}
                    </button>
                  ));
          }}
        </Query>
        <Query
          query={PART_BY_TYPE}
          variables={{ type: 'Torso' }}
          fetchPolicy="network-only"
        >
          {({ data, loading }) => {
            return loading
              ? null
              : data &&
                  data.gameMany.map((item) => (
                    <button onClick={() => setTorso(item.gltf)}>
                      {item.name}
                    </button>
                  ));
          }}
        </Query>
        <Query
          query={PART_BY_TYPE}
          variables={{ type: 'HandR' }}
          fetchPolicy="network-only"
        >
          {({ data, loading }) => {
            return loading
              ? null
              : data &&
                  data.gameMany.map((item) => (
                    <button onClick={() => setHandr(item.gltf)}>
                      {item.name}
                    </button>
                  ));
          }}
        </Query>
        {details && (
          <div>
            <input
              placeholder="Name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
            <input
              placeholder="Weapon"
              onChange={(e) =>
                setDetails({ ...details, weapon: e.target.value })
              }
              value={details.weapon}
            />
            <input
              placeholder="Chapter"
              onChange={(e) =>
                setDetails({ ...details, chapter: e.target.value })
              }
              value={details.chapter}
            />
            <input
              placeholder="Rank"
              onChange={(e) => setDetails({ ...details, rank: e.target.value })}
              value={details.rank}
            />
            <input
              placeholder="History"
              onChange={(e) =>
                setDetails({ ...details, history: e.target.value })
              }
              value={details.history}
            />
          </div>
        )}
      </Column>
    </div>
  );
}
