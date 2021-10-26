import React from 'react';
import ResetCard from './views/ResetCard';
import ThanksCard from './views/ThanksCard';

export default function PasswordReset({ history, token }) {
  const [page, setPage] = React.useState(0);
  return (
    <div>
      {page === 0 ? (
        <ResetCard setPage={setPage} token={token} />
      ) : (
        <ThanksCard />
      )}
    </div>
  );
}
