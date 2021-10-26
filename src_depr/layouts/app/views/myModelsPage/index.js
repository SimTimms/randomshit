import React from 'react';
import { Row, Column } from '../../../../components';
import { MyModelsWidget } from '../../../../widgets';

export default function MyModelsPage() {
  return (
    <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
      <Column a="flex-start" w="100%">
        <Column a="flex-start" w="100%">
          <Row w="100%" wrap="wrap">
            <MyModelsWidget />
          </Row>
        </Column>
      </Column>
    </Row>
  );
}
