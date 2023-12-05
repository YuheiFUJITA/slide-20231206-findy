import { defineConfig } from "vitepress";
import markdownItPlamtuml from "markdown-it-plantuml";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "タスク管理アプリ",
  description: "ドキュメント",
  base: "/slide-20231206-findy/vitepress/",
  markdown: {
    config: (md) => {
      md.use(markdownItPlamtuml);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "OpenAPI",
        link: "https://swagger.io/specification/",
      },
      {
        text: "Figma",
        link: "https://www.figma.com/",
      },
      {
        text: "環境一覧",
        items: [
          {
            text: "dev",
            link: "https://example.com",
          },
          {
            text: "stg",
            link: "https://example.com",
          },
          {
            text: "prod",
            link: "https://example.com",
          },
        ],
      },
      {
        text: "Repository",
        items: [
          {
            text: "Frontend",
            link: "https://github.com/YuheiFUJITA/dummy",
          },
          {
            text: "Backend",
            link: "https://github.com/YuheiFUJITA/dummy",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "ドキュメント一覧",
        items: [
          {
            text: "要件定義",
            link: "/requirements",
          },
          {
            text: "基本設計",
            link: "/basic-design",
          },
          {
            text: "詳細設計",
            link: "/detail-design",
          },
          {
            text: "ユースケース図",
            link: "/usecase",
          },
          {
            text: "シーケンス図",
            link: "/sequence",
          },
          {
            text: "状態遷移図",
            link: "/state",
          },
          {
            text: "画面遷移図",
            link: "/screen",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/YuheiFUJITA/slide-20231206-findy",
      },
    ],
  },
});
