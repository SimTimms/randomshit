import React from 'react';
import { useStyles } from './styles';
import { Query } from '@apollo/client/react/components';
import { LATEST_MINIS_WIDGET } from './data';
import { Row, Grid } from '../../components';
import clsx from 'clsx';
import LikeButton from './LikeButton';
import { MenuContext } from '../../context';
import { TwitterShareButton } from 'react-share';
import patreon from '../../assets/patreon.png';
import { TwitterIcon } from 'react-share';

export default function HeaderGallery({ history, setModelOne }) {
  const classes = useStyles();
  const [creativeArray, setCreativeArray] = React.useState([]);
  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Query
        query={LATEST_MINIS_WIDGET}
        fetchPolicy="network-only"
        onCompleted={(data) => {
          setCreativeArray([...data.savedGameMany]);
        }}
      >
        {({ data }) => {
          return (
            <Grid cols={5}>
              {creativeArray.map((creative, index) => {
                return (
                  <MenuContext.Consumer>
                    {(menu) => (
                      <div
                        className={classes.bgWrapper}
                        style={{ backgroundImage: `url(${creative.url})` }}
                        onClick={() => {
                          localStorage.setItem(
                            'modelColorSave',
                            creative.saveDataColors
                          );
                          localStorage.setItem(
                            'modelPartsSave',
                            creative.saveDataParts
                          );
                          setModelOne(creative.model);
                          history.push(
                            `/partner/${creative.model._id}/61d5a0327d31f80016bfa2be`
                          );
                        }}
                      ></div>
                    )}
                  </MenuContext.Consumer>
                );
              })}
            </Grid>
          );
        }}
      </Query>
    </div>
  );
}
