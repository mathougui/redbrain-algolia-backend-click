import { algoliasearch as init } from "algoliasearch";

const client = init(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
)

export const ALGOLIA_INDEX_NAME = "instant_search";

export default client;