import React from 'react';
import { Typography } from '@mui/material';
import { Query, Mutation } from '@apollo/client/react/components';
import { QUOTE_VIEW_WIDGET } from './data';
import { Column, CardComponent, IconButton } from '../../components';
import { DECLINE_CONTRACT } from '../../data/mutations';
import { useStyles } from './styles';

export default function FullContractViewWidget({ quoteId, history }) {
  const classes = useStyles();

  return null;
}
