import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { ProfileHeader } from '../components/profileHeader';
import {
  IconTitle,
  InlineHeader,
  FieldBox,
  DMCard,
  LoadIcon,
  InputLabel,
  Row,
  Divider,
  RoleObject,
} from '../../../../components';
import { Mutation } from 'react-apollo';
import { UPDATE_PROFILE } from '../../../../data/profile/updateProfile';
import { toaster } from '../../../../utils/toaster';
import autosave from '../../../../utils/autosave';

export default function ProfileTab({ profile, loading, setProfile }) {
  const classes = useStyles();
  const [changes, setChanges] = React.useState(0);
  const [showRole, setShowRole] = React.useState(false);
  const [visible, setVisible] = React.useState({
    publicEmail: false,
    website: false,
    skype: false,
    facebook: false,
    twitter: false,
    linkedIn: false,
    instagram: false,
  });
  const [errors, setError] = React.useState({
    name: null,
    email: null,
    password: null,
  });

  useEffect(() => {
    setVisible({
      publicEmail: profile.publicEmail,
      website: profile.website,
      skype: profile.skype,
      facebook: profile.facebook,
      twitter: profile.twitter,
      linkedIn: profile.linkedIn,
      instagram: profile.instagram,
    });
  }, [profile]);

  return (
    <Mutation
      mutation={UPDATE_PROFILE}
      variables={{
        ...profile,
      }}
      onCompleted={() => {
        toaster('Autosave');
        setChanges(changes + 1);
      }}
      onError={(error) => {
        toaster('Error');
      }}
    >
      {(SignupMutation) => {
        return (
          <div className={classes.root}>
            <Divider />

            {loading ? (
              <LoadIcon />
            ) : showRole ? (
              <RoleObject
                profile={profile}
                setProfile={setProfile}
                SignupMutation={SignupMutation}
                onClickEvent={() => setShowRole(false)}
              />
            ) : (
              <div className={classes.root}>
                <DMCard>
                  <InlineHeader>
                    <IconTitle icon="face" title="About Me" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <InputLabel
                      title="Feature Image"
                      info="Use this space to showcase your most impressive artwork, "
                      warning="PNG or JPG | optimum size 1920 x 300px | 2MB Max"
                      inline={false}
                    />
                    <ProfileHeader
                      profile={profile}
                      setProfile={setProfile}
                      errors={errors}
                      setProfileImg={(url) => {
                        setProfile({ ...profile, profileImg: url });
                      }}
                      setBgImage={(url) => {
                        setProfile({ ...profile, profileBG: url });
                      }}
                      autosaveFunction={SignupMutation}
                    />
                  </div>
                </DMCard>

                <DMCard>
                  <InlineHeader>
                    <IconTitle icon="mail" title="Contact" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <Row mb={10}>
                      <FieldBox
                        value={profile.publicEmail}
                        title="Public Email"
                        maxLength={256}
                        onChangeEvent={(e) => {
                          setProfile({ ...profile, publicEmail: e });
                          autosave(SignupMutation, 'publicEmail');
                        }}
                        replaceMode="loose"
                        placeholder="my.email@hotmail.com"
                        info="This will be displayed to all users, both registered and those that visit the site as guests."
                        warning="We won't use this to contact you but others may, we'd recommend leaving this blank if you don't want unsolicited contact"
                        size="s"
                      />
                    </Row>
                    <Row mb={10}>
                      <FieldBox
                        value={profile.website}
                        title="Website"
                        maxLength={256}
                        onChangeEvent={(e) => {
                          setProfile({ ...profile, website: e });
                          autosave(SignupMutation, 'website');
                        }}
                        replaceMode="loose"
                        placeholder="https://mywebsite.com"
                        info="Your website, or social media page"
                        warning=""
                        size="s"
                      />
                    </Row>
                    <Row mb={10}>
                      <FieldBox
                        value={profile.skype}
                        title="Skype"
                        maxLength={86}
                        onChangeEvent={(e) => {
                          setProfile({ ...profile, skype: e });
                          autosave(SignupMutation, 'skype');
                        }}
                        replaceMode="loose"
                        placeholder=""
                        info="Your Skype ID, this will be visible to all users."
                        warning="We won't use this to contact you but others may, we'd recommend leaving this blank if you don't want unsolicited contact"
                        size="s"
                      />
                    </Row>
                  </div>
                </DMCard>
              </div>
            )}
          </div>
        );
      }}
    </Mutation>
  );
}
