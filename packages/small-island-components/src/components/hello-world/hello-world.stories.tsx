import React from "react";
import { ButtonComponent } from "./hello-world";

export default {
  component: ButtonComponent,
  title: "Button",
};

const ButtonComponentTemplate = () => <ButtonComponent />;

export const Button = ButtonComponentTemplate.bind({});
