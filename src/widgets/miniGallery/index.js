import React from 'react';
import { useStyles } from './styles';
import { Query } from '@apollo/client/react/components';
import { LATEST_MINIS_WIDGET } from './data';
import { ProfileCardMacro } from '../profileCard/';
import BigImage from '../bigImage';
import { Row, Grid, MenuButtonStandard } from '../../components';
import clsx from 'clsx';
import LikeButton from './LikeButton';
import { MenuContext } from '../../context';
import { TwitterShareButton } from 'react-share';
import { Typography } from '@mui/material';

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from 'react-share';
export default function MiniGallery({ ...props }) {
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
                  <MenuContext.Consumer>
                    {(menu) => (
                      <div
                        className={classes.bgWrapper}
                        style={{
                          backgroundImage: `url(${creative.url})`,
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          localStorage.setItem(
                            'modelColorSave',
                            creative.saveDataColors
                          );
                          localStorage.setItem(
                            'modelPartsSave',
                            creative.saveDataParts
                          );
                          menu.updateMenuContext({
                            ...menu,
                            homePage: {
                              ...menu.homePage,
                              secondaryPage: 'game_profile',
                              gameId: creative.model._id,
                            },
                          });
                        }}
                      ></div>
                    )}
                  </MenuContext.Consumer>
                  <Row a="center" j="space-between">
                    <LikeButton
                      url={creative.url
                        .replace(
                          'https://random-shit-store.s3.amazonaws.com/',
                          ''
                        )
                        .replace('.jpg', '')}
                      likes={creative.likes.length}
                    />
                    <Typography variant="body2">
                      {creative.model._id}
                    </Typography>
                    <Typography variant="body2">{creative._id}</Typography>
                    <TwitterShareButton
                      url={creative.url
                        .replace(
                          'https://random-shit-store.s3.amazonaws.com/',
                          'https://minipainter3d.herokuapp.com/photo?photo='
                        )
                        .replace('.jpg', '')
                        .trim()}
                      title={`Check out this cool design made with MiniPainter 3d.`}
                      hashtags={['miniaturepainting', 'warhammercommunity']}
                      related={['@timsimmsdev']}
                      className="shareBtn col-md-1 col-sm-1 col-xs-1"
                      style={{ marginRight: 6 }}
                    >
                      <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                  </Row>
                </div>
              );
            });
          }}
        </Query>
      </Grid>
    </div>
  );
}
