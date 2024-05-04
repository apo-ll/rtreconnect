"use client";

import Masonry from "react-masonry-css";

export function MasonryGrid({ children }) {
  return (
    <Masonry
      breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
      className="my-masonry-grid "
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
}
