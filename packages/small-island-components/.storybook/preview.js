// .storybook/preview.js
import React from "react";
import GloalStylesComponent from "../src/components/shared/global-styles";
export const decorators = [
  (Story) => (
    <>
      <GloalStylesComponent />
      <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
