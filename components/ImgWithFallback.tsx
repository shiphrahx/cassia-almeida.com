"use client";

import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function ImgWithFallback({ src, alt, fallback, className, width, height }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={() => setFailed(true)}
    />
  );
}
