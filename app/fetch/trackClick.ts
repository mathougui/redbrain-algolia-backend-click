import { ALGOLIA_INDEX_NAME } from "../config";


export function trackClick(element: EventTarget) {
  if (!(element instanceof HTMLElement)) return;

  const objectID = element.dataset.objectId;
  const queryID = element.dataset.queryId;
  const position = element.dataset.position;

  // You'd also need a function to get or create a user token stored in cookies
  const userToken = getOrCreateUserTokenFromCookies();

  // Send the click event to your backend
  fetch(`${window.location.href}/api/click`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventType: "click",
      eventName: "Product Clicked",
      index: ALGOLIA_INDEX_NAME,
      userToken,
      timestamp: Date.now(),
      objectIDs: [objectID],
      queryID,
      positions: [Number(position)],
    }),
  });
}

function getOrCreateUserTokenFromCookies(): string {
  // Minimal example; adapt to your cookie logic
  // Generate or retrieve a UUID and store it in cookies if not found
  return "some-uuid-from-cookie-or-generated";
}
