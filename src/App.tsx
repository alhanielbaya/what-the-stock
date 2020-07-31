import React from "react";
import { BreakpointProvider } from "react-socks";
import { css } from "emotion";
import ImageFLexContainer from "./containers/ImageFlexContainer";
import bg from "./images/bg.jpg";

function App() {
  return (
    <BreakpointProvider>
      <div
        className={css`
          width: 100%;
          min-height: 100vh;
          background-image: url(${bg});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        `}
      >
        <div
          className={css`
            display: grid;
            grid-template-column: 1fr 1fr 1fr;
            margin: 0 auto;
            max-width: 100%;
          `}
        >
          <ImageFLexContainer />
        </div>
      </div>
    </BreakpointProvider>
  );
}

export default App;
