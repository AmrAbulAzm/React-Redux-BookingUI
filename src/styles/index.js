import { injectGlobal } from "styled-components";
import { normalize } from "polished";
import { MEDIA } from "./constants";

// eslint-disable-next-line no-unused-expressions
injectGlobal`

  ${normalize()}

  body {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;

    overflow: hidden;

    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    user-select: none;
    touch-action: manipulation;

    #root {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    /* Defaults */

    * {
      box-sizing: border-box;
    }

    ${MEDIA.PORTRAIT`font-size: 0.1vw;`};
    ${MEDIA.LANDSCAPE`font-size: 0.05vw;`};
  }
`;
