// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { DOCUSAURUS_VERSION } = require("@docusaurus/utils");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lagom API Docs",
  url: "https://api.blocksniper.io/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Lagom",
  projectName: "lagom-docs-api",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/sotatek-dev/lagom-docs-api/tree/master",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: "Keytar",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/sotatek-dev/lagom-docs-api",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Lagom. Built with Docusaurus ${DOCUSAURUS_VERSION}.`,
      },
      prism: {
        additionalLanguages: ["ruby", "csharp", "php", "java", "powershell"],
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
          variant: "requests",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
          variant: "axios",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
      ],
      algolia: {
        apiKey: "6077793ddd898639f4f95b453fd29c7e",
        appId: "HMQ0ANGGV5",
        indexName: "blocklens-vercel",
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          user: {
            specPath: "api-specs/lagom-users.json",
            outputDir: "docs/users",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          marketdata: {
            specPath: "api-specs/lagom-marketdata.json",
            outputDir: "docs/marketdata",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          account: {
            specPath: "api-specs/lagom-accounts.json",
            outputDir: "docs/accounts",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          order: {
            specPath: "api-specs/lagom-orders.json",
            outputDir: "docs/orders",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          pool: {
            specPath: "api-specs/lagom-pools.json",
            outputDir: "docs/pools",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          trade: {
            specPath: "api-specs/lagom-trades.json",
            outputDir: "docs/trades",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          tickers: {
            specPath: "api-specs/lagom-tickers.json",
            outputDir: "docs/tickers",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          candles: {
            specPath: "api-specs/lagom-candles.json",
            outputDir: "docs/candles",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

async function createConfig() {
  const lightTheme = (await import("./src/utils/prismLight.mjs")).default;
  const darkTheme = (await import("./src/utils/prismDark.mjs")).default;
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.theme = lightTheme;
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.darkTheme = darkTheme;
  return config;
}

module.exports = createConfig;
