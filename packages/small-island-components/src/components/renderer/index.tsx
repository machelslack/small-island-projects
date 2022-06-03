import { CacheProvider } from "@emotion/react";
import { renderToString } from "react-dom/server";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";
import { ButtonComponent } from "../hello-world/hello-world";

const key = "custom";
const cache = createCache({ key });
const { extractCriticalToChunks, constructStyleTagsFromChunks } =
  createEmotionServer(cache);

const html = renderToString(
  <CacheProvider value={cache}>
    <ButtonComponent />
  </CacheProvider>
);

const chunks = extractCriticalToChunks(html);
const styles = constructStyleTagsFromChunks(chunks);

const renderStatic = async (html) => {
  if (html === undefined) {
    throw new Error("did you forget to return html from renderToString?");
  }
  const { extractCritical } = createEmotionServer(cache);
  const { ids, css } = extractCritical(html);

  return { html, ids, css };
};

export default renderStatic;

export const pageRenderer = () => ({
  styles: styles,
  body: renderToString(<ButtonComponent />),
});
