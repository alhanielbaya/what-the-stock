import React from "react";
import ImageList from "./containers/ImageList";
import { BreakpointProvider } from "react-socks";
import { css } from "emotion";

function App() {
  return (
    <BreakpointProvider>
      <div
        className={css`
          display: flex;
          max-width: 800px;
          margin: 0 auto;
        `}
      >
        <ImageList></ImageList>
      </div>
    </BreakpointProvider>
  );
}

export default App;
