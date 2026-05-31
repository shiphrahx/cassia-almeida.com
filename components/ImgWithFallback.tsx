"use client";

interface Props {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}

export default function ImgWithFallback({ src, alt, fallback, className }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const el = e.target as HTMLImageElement;
        el.style.display = "none";
        if (el.parentElement) el.parentElement.textContent = fallback;
      }}
    />
  );
}
