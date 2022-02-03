import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import {
  Row,
  Column,
  SubTitle,
  Grid,
  DividerMini,
  MenuButtonStandard,
  MenuButtonStandardText,
} from '../../../../components';
import { LatestMinis } from '../../../../widgets';
import {
  HistoryContext,
  MenuContext,
  ParamsContext,
} from '../../../../context';
import { ProfileCardMacro } from '../../../../widgets/profileCard';
import { Query } from '@apollo/client/react/components';
import { CHOSEN_CREATIVE } from './data';

export default function CommunityPage() {
  const classes = useStyles();

  return (
    <ParamsContext.Consumer>
      {(params) => (
        <HistoryContext.Consumer>
          {(history) => (
            <MenuContext.Consumer>
              {(menu) => (
                <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
                  <Column a="flex-start" w="100%">
                    {params.savedUserId && (
                      <Column w="100%" p={10}>
                        <Column w={300}>
                          <Typography
                            className={classes.summary}
                            style={{ fontSize: '1.6rem' }}
                          >
                            Excellent Choice!
                          </Typography>
                          <DividerMini />
                          <Column w={300}>
                            <MenuButtonStandardText
                              title="Close"
                              icon="close"
                              onClickEvent={() => {
                                params.updateParamsContext({
                                  savedUserId: null,
                                });
                              }}
                              fr={true}
                            />
                            <Query
                              query={CHOSEN_CREATIVE}
                              variables={{ userId: params.savedUserId }}
                              fetchPolicy="network-only"
                            >
                              {({ data }) => {
                                if (!data) return null;
                                return (
                                  <Grid>
                                    <ProfileCardMacro
                                      creative={data.userById}
                                    />
                                  </Grid>
                                );
                              }}
                            </Query>
                          </Column>
                          <DividerMini />
                          <Typography
                            className={classes.summary}
                            style={{ fontSize: '1rem' }}
                          >
                            You can invite this professional to quote for your
                            work simply by creating a job specification.
                          </Typography>

                          <DividerMini />
                          <MenuButtonStandard
                            title="Continue"
                            onClickEvent={() => {
                              menu.updateMenuContext({
                                ...menu,
                                primaryPage: 'jobs',
                                jobPage: {
                                  ...menu.jobPage,
                                  primaryPage: 'job_posts',
                                  secondaryPage: 'create_job_ad',
                                },
                              });
                            }}
                          />
                          <DividerMini />
                        </Column>
                      </Column>
                    )}

                    <Column a="flex-start" w="100%">
                      <Row w="100%" wrap="flex-wrap">
                        <LatestMinis />
                      </Row>
                    </Column>
                  </Column>
                </Row>
              )}
            </MenuContext.Consumer>
          )}
        </HistoryContext.Consumer>
      )}
    </ParamsContext.Consumer>
  );
}
