/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars = {
  lagom: [
    {
      type: "doc",
      label: "About Lagom API",
      id: "intro",
    },
    {
      type: "category",
      label: "Development Guide",
      items: [
        {
          type: "autogenerated",
          dirName: "development-guide",
        },
      ],
    },
    {
      type: "doc",
      label: "Rate Limit",
      id: "rate-limit",
    },
    {
      type: "category",
      label: "Change Log",
      items: [
        {
          type: "autogenerated",
          dirName: "change-log",
        },
      ],
    },
    {
      type: "category",
      label: "Best Practices",
      items: [
        {
          type: "autogenerated",
          dirName: "best-practices",
        },
      ],
    },
    {
      type: "category",
      label: "Rest API Reference",
      items: [
        {
          type: "autogenerated",
          dirName: "rest-api-reference",
        },
      ],
    },
    {
      type: "category",
      label: "User",
      items: [require("./docs/users/sidebar.js")],
    },
    {
      type: "category",
      label: "Marketdata",
      items: [require("./docs/marketdata/sidebar.js")],
    },
    {
      type: "category",
      label: "Account",
      items: [require("./docs/accounts/sidebar.js")],
    },
    {
      type: "category",
      label: "Order",
      items: [require("./docs/orders/sidebar.js")],
    },
    {
      type: "category",
      label: "Pool",
      items: [require("./docs/pools/sidebar.js")],
    },
    {
      type: "category",
      label: "Trade",
      items: [require("./docs/trades/sidebar.js")],
    },
    {
      type: "category",
      label: "ticker",
      items: [require("./docs/tickers/sidebar.js")],
    },
    {
      type: "category",
      label: "candles",
      items: [require("./docs/candles/sidebar.js")],
    },
    {
      type: "category",
      label: "Socket API Reference",
      items: [
        {
          type: "autogenerated",
          dirName: "socket-api-reference",
        },
      ],
    },
    {
      type: "doc",
      label: "Errors",
      id: "errors",
    },
    {
      type: "doc",
      label: "Guide & Code Samples",
      id: "code-sample",
    },
  ],
};

module.exports = sidebars;
