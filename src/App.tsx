import React from 'react';
import ImageList from './containers/ImageList';
import { css } from 'emotion';

function App() {
  return (
    <div
      className={css`
        display: flex;
        max-width: 800px;
        margin: 0 auto;
      `}
    >
      <ImageList></ImageList>
    </div>
  );
}

export default App;
