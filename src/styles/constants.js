import { css } from "styled-components";

export const MEDIA = {
  PHONE: (...args) => css`@media (max-width: ${767 / 16}em) {${css(...args)};}`,
  TABLET: (...args) => css`
    @media (min-width: ${768 / 16}em) {
      ${css(...args)};
    }
  `,
  PORTRAIT: (...args) => css`
    @media (max-aspect-ratio: 1/1) {
      ${css(...args)};
    },
  `,
  LANDSCAPE: (...args) => css`
    @media (min-aspect-ratio: 1/1) {
      ${css(...args)};
    },
  `
};
