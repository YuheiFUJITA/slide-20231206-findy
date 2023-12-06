import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import Documate from "@documate/vue";
import "@documate/vue/dist/style.css";

export default {
  ...DefaultTheme,
  Layout: h(DefaultTheme.Layout, null, {
    "nav-bar-content-before": () =>
      h(Documate, {
        endpoint: "https://rna7bv3aw7.us.aircode.run/ask",
      }),
  }),
};
