import React from 'react';
import Button from '@mui/material/Button';
import { Mutation } from '@apollo/client/react/components';
import Icon from '@mui/material/Icon';

export function SaveButton({
  sectionId,
  sectionValues,
  disabledValue,
  setDisabledValue,
  mutation,
}) {
  return (
    <Mutation
      mutation={mutation}
      variables={{
        id: sectionId,
        section: sectionValues,
      }}
    >
      {(mutation) => {
        return (
          <Button
            onClick={() => {
              setDisabledValue(false);
              mutation();
            }}
            variant="contained"
            color="primary"
            disabled={!disabledValue}
          >
            <Icon style={{ fontSize: 18, color: '#fff' }}>save</Icon>
          </Button>
        );
      }}
    </Mutation>
  );
}
