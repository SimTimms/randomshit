import React from 'react';
import { Icon } from '@material-ui/core';

export default function IconComponent({ icon }) {
  return <Icon style={{ color: '#444', marginRight: 5 }}>{icon}</Icon>;
}
