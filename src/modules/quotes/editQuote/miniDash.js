import React from 'react';
import { Typography } from '@mui/material';
import {
  Column,
  MenuButtonStandard,
  DividerMini,
  Divider,
} from '../../../components';
import { Mutation } from '@apollo/client/react/components';
import { UPDATE_CONTRACT } from '../../../data/mutations';
import { MenuContext } from '../../../context';

export default function MiniDash({ contract, setField }) {
  return !contract ? null : (
    <MenuContext.Consumer>
      {(menu) => (
        <Column j="center" w={200}>
          <Typography>What would you like to do? </Typography>
          <Divider />
          <MenuButtonStandard
            title="Edit this Quote"
            onClickEvent={() => setField(1)}
            fullWidth={true}
          />
          <DividerMini />
          <Mutation
            mutation={UPDATE_CONTRACT}
            variables={{
              _id: contract._id,
              status: 'deleted',
            }}
            onCompleted={() => {
              menu.updateMenuContext({
                ...menu,
                workPage: {
                  ...menu.workPage,
                  secondaryPage: 'view_quote',
                  jobId: null,
                  contractId: contract._id,
                },
              });
            }}
          >
            {(mutation) => {
              return (
                <MenuButtonStandard
                  title="Delete"
                  type="delete"
                  onClickEvent={() => mutation()}
                  fullWidth={true}
                />
              );
            }}
          </Mutation>
        </Column>
      )}
    </MenuContext.Consumer>
  );
}
