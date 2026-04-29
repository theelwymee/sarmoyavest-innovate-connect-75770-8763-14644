import { useEffect, useState } from "react";

// Namespace for this site's counters on counterapi.dev (free public counter service).
const NAMESPACE = "sarmoyavest-insights";
const BASE = "https://api.counterapi.dev/v1";

/**
 * Read the current view count for one or more insight slugs without incrementing.
 */
export function useInsightViewCounts(slugs: string[]) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      slugs.map(async (slug) => {
        try {
          const res = await fetch(`${BASE}/${NAMESPACE}/${slug}`);
          if (!res.ok) return [slug, 0] as const;
          const data = await res.json();
          return [slug, Number(data?.count ?? 0)] as const;
        } catch {
          return [slug, 0] as const;
        }
      }),
    ).then((entries) => {
      if (cancelled) return;
      setCounts(Object.fromEntries(entries));
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugs.join(",")]);

  return counts;
}

/**
 * Increment the view count for a single article — call only when the article page opens.
 * Uses a per-tab guard to avoid double-counting in React StrictMode.
 */
export function useIncrementInsightView(slug: string | undefined) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;
    const guardKey = `insight-viewed:${slug}`;
    let cancelled = false;

    const run = async () => {
      try {
        const alreadyCounted = sessionStorage.getItem(guardKey);
        const endpoint = alreadyCounted
          ? `${BASE}/${NAMESPACE}/${slug}`
          : `${BASE}/${NAMESPACE}/${slug}/up`;
        const res = await fetch(endpoint);
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled) setCount(Number(data?.count ?? 0));
        if (!alreadyCounted) sessionStorage.setItem(guardKey, "1");
      } catch {
        // network errors are silent — counter is non-critical
      }
    };
    run();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return count;
}