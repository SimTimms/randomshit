import React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

export function UpdateJobButton({
  job,
  disabledValue,
  setDisabledValue,
  mutation,
}) {
  const validate = job.name.length < 3 ? false : disabledValue;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Button
        onClick={() => {
          setDisabledValue(false);
          mutation();
        }}
        variant="contained"
        color="primary"
        style={{ margin: 10 }}
        disabled={!validate}
      >
        <Icon style={{ fontSize: 18, color: '#fff' }}>save</Icon>
      </Button>
    </div>
  );
}
