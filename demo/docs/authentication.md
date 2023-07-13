---
id: authentication
hide_title: true
sidebar_label: Authentication
title: Authentication
description: Authentication
---

The Blocklens API uses API keys to authenticate requests. You can view your API key in the Blocklens Admin panel.

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Authentication to the API is performed via API Keys. Provide your API key as an X-API-Key header:

```
curl --request GET \
     --url https://dev-eth-mainnet-api.sotatek.works/v1/erc20/approvals/block-range \
     --header 'accept: application/json' \
     --header 'x-api-key: X-API-KEY'
```
