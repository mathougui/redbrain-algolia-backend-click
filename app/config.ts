import { algoliasearch } from "algoliasearch";

export const ALGOLIA_SEARCH_CLIENT = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
)

export const ALGOLIA_INSIGHTS_CLIENT = ALGOLIA_SEARCH_CLIENT.initInsights({ region: 'us' });

export const ALGOLIA_INDEX_NAME = "instant_search";