import React from 'react';
import { Row, Column, WidgetTitle, DividerMini } from './components';
import { Query } from 'react-apollo';
import { PART_BY_ID } from './data';
import { Typography } from '@material-ui/core';

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
              const partData = data ? data.gameById : null;
              return (
                partData && (
                  <div
                    onClick={() => {
                      if (!attachedPart[partData._id]) {
                        let savedParts = {};

                        if (localStorage.getItem('modelPartsSave')) {
                          const jsonParsed = JSON.parse(
                            localStorage.getItem('modelPartsSave')
                          );
                          if (jsonParsed !== null) {
                            savedParts = JSON.parse(
                              localStorage.getItem('modelPartsSave')
                            );
                          }
                        }

                        savedParts[partData._id] = {
                          _id: partData._id,
                          gltf: partData.gltf,
                          js: partData.js,
                        };
                        console.log(savedParts);
                        localStorage.setItem(
                          'modelPartsSave',
                          JSON.stringify(savedParts)
                        );
                        setAttachedPart(savedParts);
                      }
                    }}
                    style={{
                      border: '1px solid #444',
                      width: '100%',
                      marginBottom: 3,
                    }}
                  >
                    <Row a="center" j="space-between">
                      <img
                        src={partData.featureImage}
                        style={{ width: 50, borderRight: '1px solid #444' }}
                      />
                      <Typography
                        style={{
                          color: '#fff',
                          fontSize: '0.6rem',
                          padding: 5,
                        }}
                      >
                        {partData.name}
                      </Typography>
                    </Row>
                  </div>
                )
              );
            }}
          </Query>
        ))}
      </Row>
    </Column>
  );
}
