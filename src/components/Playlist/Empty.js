import React from 'react';

function Empty({loading}) {
  return (
      <span className="playlist__empty">
        {loading ? 'loading...' : 'Playlist is empty'}
      </span>
  );
}

export default Empty;
