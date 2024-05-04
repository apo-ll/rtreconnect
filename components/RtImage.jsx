"use client";

import { CldImage } from "next-cloudinary";

export function RtImage({ src, fill, alt, width, height }) {
  return (
    <CldImage
      fill={fill}
      width={width}
      height={height}
      src={src}
      sizes="100vw"
      alt={alt}
      className="object-cover"
    />
  );
}
