"use client";

import { CldImage } from "next-cloudinary";
import { cn } from "@/config/utils";
import { useState } from "react";

export function RtImage({ src, fill, alt, width, height, className }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <CldImage
      fill={fill}
      width={width}
      height={height}
      src={src}
      sizes="100vw"
      alt={alt}
      className={cn(
        "object-cover",
        className,
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
