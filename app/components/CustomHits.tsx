"use client";

import React from "react";
import { useHits } from "react-instantsearch";
import { Hit } from "instantsearch.js";
import { trackClick } from "../fetch/trackClick";

type CustomHit = {
  name: string;
  description: string;
  brand: string;
  image: string;
  categories: string[];
};

export default function CustomHits() {
  const { items } = useHits<CustomHit>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item: Hit<CustomHit>) => (
        <div
          key={item.objectID}
          data-object-id={item.objectID}
          data-query-id={item.__queryID || ""}
          data-position={item.__position ?? 1}
          onClick={(event) => trackClick(event.currentTarget)}
          className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="relative h-48 w-full">
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              {item.brand && (
                <span className="text-sm text-gray-500">{item.brand}</span>
              )}
            </div>
            {item.categories?.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-1">
                {item.categories.map((cat, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
            {item.description && (
              <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
