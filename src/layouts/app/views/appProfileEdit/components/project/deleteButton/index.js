import React from 'react';
import { Mutation } from '@apollo/client/react/components';
import { REMOVE_PROJECT_MUTATION } from '../../../../../../../data/mutations';
import { DeleteButton } from '../../../../../../../components';

export default function DeleteButtonProject({ onClickEvent, projectId }) {
  return (
    <Mutation
      mutation={REMOVE_PROJECT_MUTATION}
      variables={{
        id: projectId,
      }}
    >
      {(mutation) => {
        return (
          <DeleteButton
            mutation={() => {
              onClickEvent();
              mutation();
            }}
            str=""
          />
        );
      }}
    </Mutation>
  );
}
