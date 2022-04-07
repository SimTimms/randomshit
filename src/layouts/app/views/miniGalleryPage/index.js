import React from 'react';
import { Row, Column } from '../../../../components';
import { MiniGallery } from '../../../../widgets';

export default function MiniGalleryPage() {
  return (
    <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
      <Column a="flex-start" w="100%">
        <Column a="flex-start" w="100%">
          <Row w="100%" wrap="flex-wrap">
            <MiniGallery />
          </Row>
        </Column>
      </Column>
    </Row>
  );
}
