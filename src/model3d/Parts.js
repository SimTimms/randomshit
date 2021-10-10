import React from 'react';
import { Row, Column, WidgetTitle, DividerMini } from './components';
import { Query } from 'react-apollo';
import { PART_BY_ID } from './data';

export default function Parts({ setAttachedPart, attachedPart, parts }) {
  return (
    <Column w={200} a="flex-start" bb="1px solid #444">
      <WidgetTitle str="Parts" />
      <DividerMini />
      <Row wrap="wrap">
        {parts.map((part) => (
          <Query
            query={PART_BY_ID}
            variables={{ gameId: part._id }}
            onCompleted={(data) => {}}
            fetchPolicy="network-only"
          >
            {({ data }) => {
              console.log(data);
              return (
                <div
                  onClick={() => {
                    if (
                      attachedPart.indexOf({
                        _id: part._id,
                        gltf: part.gltf,
                        js: part.js,
                      }) === -1
                    ) {
                      setAttachedPart([
                        ...attachedPart,
                        { _id: part._id, gltf: part.gltf, js: part.js },
                      ]);
                    }
                  }}
                >
                  {part.name}
                </div>
              );
            }}
          </Query>
        ))}
      </Row>
    </Column>
  );
}
