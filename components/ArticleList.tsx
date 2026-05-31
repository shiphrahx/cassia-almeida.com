"use client";

import { useEffect, useRef, useState } from "react";
import type { Article } from "@/data/articles";

const PAGE_SIZE = 8;

type YearGroup = { year: number; articles: Article[] };

function groupByYear(articles: Article[]): YearGroup[] {
  const map = new Map<number, Article[]>();
  for (const a of articles) {
    const year = new Date(a.date).getFullYear();
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(a);
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, articles]) => ({ year, articles }));
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
}

export default function ArticleList({ articles }: { articles: Article[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible((v) => Math.min(v + PAGE_SIZE, articles.length));
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [articles.length]);

  const sliced = articles.slice(0, visible);
  const groups = groupByYear(sliced);

  return (
    <>
      {groups.map(({ year, articles: groupArticles }) => (
        <div key={year} className="section">
          <div className="section-header">
            <span className="section-title">{year}</span>
          </div>
          <div className="list">
            {groupArticles.map((a) => (
              <a
                key={a.url}
                className="list-item"
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="list-item-title">{a.title}</span>
                <span className="list-item-meta">{formatDate(a.date)}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
      {visible < articles.length && (
        <div ref={sentinelRef} style={{ height: 1 }} />
      )}
    </>
  );
}
