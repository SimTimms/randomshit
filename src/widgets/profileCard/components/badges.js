import React from 'react';
import { Row } from '../../../components';
import * as badges from '../../../assets/badge';
import { randomKey } from '../../../utils';

export default function Badges({ creative }) {
  return !creative.badges ? null : (
    <Row pl={5} mw={100} j="flex-end">
      {creative.badges.map((badge, index) => {
        if (index > 3) {
          return null;
        }
        const badgeArr = [];
        if (
          badge.badgeType === 'supporter' ||
          badge.badgeType === 'golden' ||
          badge.badgeType === 'extraordinary'
        ) {
          badgeArr.push(
            <a
              href={'https://www.patreon.com/minipainter3d'}
              target="_blank"
              rel="noopener noreferrer"
              style={{ maxHeight: 16, maxWidth: 16, margin: 2 }}
              key={`badge_${randomKey()}`}
            >
              <img
                src={badges[badge.badgeIcon]}
                title={`Thanks for supporting us on Patreon
                `}
                key={`badge_${index}_${creative._id}`}
                style={{ maxHeight: 16, maxWidth: 16 }}
                alt=""
              />
            </a>
          );
        } else {
          badgeArr.push(
            <img
              src={badges[badge.badgeIcon]}
              title={`${badge.badgeType} ${
                badge.description ? badge.description : ''
              }`}
              key={`badge_${index}_${creative._id}`}
              style={{ maxHeight: 16, maxWidth: 16, margin: 2 }}
              alt=""
            />
          );
        }

        return badgeArr;
      })}
    </Row>
  );
}
