import React, { useEffect } from 'react';
import { Mutation } from '@apollo/client/react/components';
import { UPDATE_LIKES } from './data';
import { Row } from '../../components';
import { Icon, Typography } from '@mui/material';

export default function LikeButton({ url, likes }) {
  const [likeAmount, setLikeAmount] = React.useState(0);

  useEffect(() => {
    setLikeAmount(likes);
  }, [likes]);
  return (
    <Mutation
      mutation={UPDATE_LIKES}
      variables={{ url: url }}
      onCompleted={(data) =>
        data.savedGameLike === false && setLikeAmount(likeAmount + 1)
      }
    >
      {(mutation) => {
        return (
          <Row onClickEvent={() => mutation()} w={50}>
            <Icon style={{ color: '#ea5075', cursor: 'pointer' }}>
              favorite
            </Icon>
            <Typography>x{likeAmount}</Typography>
          </Row>
        );
      }}
    </Mutation>
  );
}
