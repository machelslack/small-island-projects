import React from "react";
import { renderToString } from "react-dom/server";

export default () => renderToString(<div>Hello You, how are you doing?</div>);