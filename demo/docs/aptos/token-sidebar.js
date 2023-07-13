module.exports = [
  {
    type: "category",
    label: "Token API",
    link: {
      type: "generated-index",
      title: "Token API",
      slug: "/category/aptos/token",
    },
    items: [
      {
        type: "category",
        label: "Get tokens",
        link: {
          type: "generated-index",
          title: "Get tokens",
          slug: "/category/aptos/get-tokens",
        },
        items: [
          {
            type: "doc",
            id: "aptos/aptos-get-coins",
            label: "Get coins",
            className: "api-method get",
          },
        ],
      },
      {
        type: "category",
        label: "Get token activities",
        link: {
          type: "generated-index",
          title: "Get token activities",
          slug: "/category/aptos/get-token-activities",
        },
        items: [
          {
            type: "doc",
            id: "aptos/aptos-get-coin-activities",
            label: "Get coin activities",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "aptos/aptos-get-coin-activities-by-block",
            label: "Get coin activities by block",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "aptos/aptos-get-coin-activities-from-block-to-block",
            label: "Get coin activities from block to block",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "aptos/aptos-get-coin-activities-from-time-to-time",
            label: "Get coin activities from timestamp to timestamp",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "aptos/aptos-get-coin-activities-by-type",
            label: "Get coin activities by coin type",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "aptos/aptos-get-coin-activities-by-type-and-block",
            label: "Get coin activities by coin type and block number",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "aptos/aptos-get-activities-of-type-from-block-to-block",
            label: "Get activities of a coin type from block to block",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "aptos/aptos-get-activities-of-type-from-time-to-time",
            label: "Get activities of a coin type from timestamp to timestamp",
            className: "api-method get",
          },
        ],
      },
    ],
  },
];
