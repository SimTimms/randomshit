import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { LATEST_MINIS_WIDGET } from './data';
import { ProfileCardMacro } from '../profileCard/';
import BigImage from '../bigImage';
import { Grid } from '../../components';
import clsx from 'clsx';
import LikeButton from './LikeButton';

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
                <div className={classes.miniWrapper}>
                  <img
                    src={creative.url}
                    style={{
                      width: '100%',
                    }}
                  />
                  <LikeButton
                    url={creative.url}
                    likes={creative.likes.length}
                  />
                </div>
              );
            });
          }}
        </Query>
      </Grid>
    </div>
  );
}
