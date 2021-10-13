import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { LATEST_MINIS_WIDGET } from './data';
import { ProfileCardMacro } from '../profileCard/';
import BigImage from '../bigImage';
import { Grid } from '../../components';
import clsx from 'clsx';

export default function LatestMinis({ ...props }) {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  const [large, setLarge] = React.useState(null);
  const { dashboard } = props;
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.dashboard]: dashboard,
      })}
    >
      {large !== null && <BigImage large={large} setLarge={setLarge} />}
      <Grid cols={3}>
        <Query
          query={LATEST_MINIS_WIDGET}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setCreativeArray([...data.savedGameMany]);
          }}
        >
          {() => {
            return creativeArray.map((creative, index) => {
              return (
                <img
                  src={creative.url}
                  style={{
                    background: '#444',
                    height: 200,
                    padding: 20,
                    borderRadius: 2,
                    boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
                  }}
                />
              );
            });
          }}
        </Query>
      </Grid>
    </div>
  );
}
