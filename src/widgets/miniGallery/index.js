import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { LATEST_MINIS_WIDGET } from './data';
import { ProfileCardMacro } from '../profileCard/';
import BigImage from '../bigImage';
import { Row, MenuButtonStandard } from '../../components';
import clsx from 'clsx';
import LikeButton from './LikeButton';
import { MenuContext } from '../../context';
import { TwitterShareButton } from 'react-share';

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
      <Row wrap="wrap">
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
                  <div
                    className={classes.bgWrapper}
                    style={{ backgroundImage: `url(${creative.url})` }}
                  ></div>
                  <MenuContext.Consumer>
                    {(menu) => (
                      <MenuButtonStandard
                        title="View in 3D"
                        fullWidth={true}
                        onClickEvent={() => {
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
                      />
                    )}
                  </MenuContext.Consumer>
                  <LikeButton
                    url={creative.url
                      .replace(
                        'https://random-shit-store.s3.amazonaws.com/',
                        ''
                      )
                      .replace('.jpg', '')}
                    likes={creative.likes.length}
                  />
                  <TwitterShareButton
                    url={creative.url
                      .replace(
                        'https://random-shit-store.s3.amazonaws.com/',
                        ''
                      )
                      .replace('.jpg', '')}
                    title={`Made with MiniPainter3d`}
                    className="shareBtn col-md-1 col-sm-1 col-xs-1"
                  >
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </div>
              );
            });
          }}
        </Query>
      </Row>
    </div>
  );
}
