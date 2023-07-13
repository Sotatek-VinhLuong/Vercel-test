module.exports = [
  {
    type: "category",
    label: "Event API",
    link: {
      type: "generated-index",
      title: "Event API",
      slug: "/category/aptos/event",
    },
    items: [
      {
        type: "category",
        label: "Get events",
        items: [
          {
            type: "doc",
            id: "aptos/aptos-get-events",
            label: "Get events",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "aptos/aptos-get-event-from-block-to-block",
            label: "Get events from block to block",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "aptos/aptos-get-event-from-time-to-time",
            label: "Get events from timestamp to timestamp",
            className: "api-method get",
          },
          {
            type: "doc",
            id: "aptos/aptos-get-event-from-version-to-version",
            label: "Get events from version to version",
            className: "api-method get",
          },
        ],
      },
    ],
  },
];
