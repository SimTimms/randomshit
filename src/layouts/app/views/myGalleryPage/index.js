import React from 'react';
import { Row } from '../../../../components';
import { MyModelsWidget } from '../../../../widgets';

export default function MyGalleryPage() {
  return (
    <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
      <MyModelsWidget />
    </Row>
  );
}
