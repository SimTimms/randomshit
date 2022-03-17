import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { useStyles } from './styles';
import { ProjectComponent, ProjectHeader } from './components';
import { Link } from 'react-router-dom';
import {
  FileGallery,
  InvitesWidget,
  MediaGallery,
  ActionButton,
} from '../../../../components';

import { TagsWidget } from '../../../../components/tags';
import { CardHeader } from '../../../../components';
import tim from '../../../../assets/tim.jpg';

export function NewProject({ projectId }) {
  const classes = useStyles();

  const user = {
    profileImg: tim,
    name: 'Tim Simms',
  };
  const newId = 'ID128';
  return (
    <Slide
      direction="left"
      in={true}
      mountOnEnter
      unmountOnExit
      style={{ width: 700 }}
    ></Slide>
  );
}
