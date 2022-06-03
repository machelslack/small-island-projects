import { Global, css } from "@emotion/react";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900";

export const bodyStyles = css`
  color: blue;
`;

const GloalStylesComponent = () => (
  <Global
    styles={css`
      body {
        ${bodyStyles}
      }
    `}
  />
);

export default GloalStylesComponent;
