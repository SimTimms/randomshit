import React from 'react';
import { useStyles } from './styles';
import { Row } from '../../../components';
import dmDevice from '../../../assets/dmDevice.png';
import Social from './social';

export default function Socials({ creative }) {
  const classes = useStyles();

  return (
    <Row j="flex-start" w={160}>
      <Social socialStr={creative.linkedIn} socialSite="linkedIn" />
      <Social socialStr={creative.facebook} socialSite="facebook" />
      <Social socialStr={creative.instagram} socialSite="instagram" />
      <Social socialStr={creative.twitter} socialSite="twitter" />
    </Row>
  );
}
