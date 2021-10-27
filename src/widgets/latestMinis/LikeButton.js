import React, { useEffect } from 'react';
import { Mutation } from 'react-apollo';
import { UPDATE_LIKES } from './data';
import { MenuButtonStandard } from '../../components';

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
          <div>
            <MenuButtonStandard
              title={`${likeAmount} like`}
              onClickEvent={() => mutation()}
            />
          </div>
        );
      }}
    </Mutation>
  );
}
