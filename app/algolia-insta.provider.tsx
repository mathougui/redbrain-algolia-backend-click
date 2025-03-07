"use client";

import React from "react";

import { IndexUiState, UiState } from "instantsearch.js";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import { search } from "./fetch/search";
import { ALGOLIA_INDEX_NAME } from "@/app/config";

interface Props {
  children: React.ReactNode;
}

function cleanState<TIndexUiState extends IndexUiState>(
  uiState: TIndexUiState
): TIndexUiState {
  // @ts-ignore
  const { configure, objectID, ...trackedUiState } = uiState;
  return trackedUiState as TIndexUiState;
}

const AlgoliaInstantProvider: React.FC<Props> = ({ children }) => {
  return (
    <InstantSearchNext
      searchClient={{
        search,
      }}
      indexName={ALGOLIA_INDEX_NAME}
      future={{
        preserveSharedStateOnUnmount: true,
      }}
      routing={false}
    >
      {children}
    </InstantSearchNext>
  );
};

export default AlgoliaInstantProvider;
