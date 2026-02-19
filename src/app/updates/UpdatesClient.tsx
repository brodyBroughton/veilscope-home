"use client";

import { useEffect, useMemo, useState } from "react";
import CTAButton from "@/components/CTAButton";
import UpdatesFeed from "@/components/UpdatesFeed";
import { APP_URL, UPDATES_API_URL } from "@/lib/links";

type UpdateItem = {
  id: string;
  slug?: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  featured?: boolean;
};

type UpdatesClientProps = {
  initialItems?: UpdateItem[];
};

export default function UpdatesClient({ initialItems }: UpdatesClientProps) {
  const normalizeItems = (list: UpdateItem[]) =>
    list.map((item) => {
      const tags = item.tags ? [...item.tags] : [];
      if (item.featured && !tags.some((tag) => tag.toLowerCase() === "featured")) {
        tags.unshift("Featured");
      }

      return { ...item, tags };
    });

  const [status, setStatus] = useState<"loading" | "error" | "empty" | "ready">(
    initialItems ? (initialItems.length > 0 ? "ready" : "empty") : "loading"
  );
  const [items, setItems] = useState<UpdateItem[]>(() => normalizeItems(initialItems ?? []));
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"featured" | "newest" | "oldest">(
    "featured"
  );
  const [activeFilter, setActiveFilter] = useState<
    "all" | "reports" | "brody" | "jacob"
  >("all");

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Weekly Reports", value: "reports" },
    { label: "Brody", value: "brody" },
    { label: "Jacob", value: "jacob" },
  ] as const;

  useEffect(() => {
    if (initialItems) {
      return;
    }

    let active = true;

    async function loadUpdates() {
      try {
        const res = await fetch(UPDATES_API_URL);
        if (!res.ok) throw new Error("Failed to load updates.");

        const data = await res.json();
        const list = Array.isArray(data) ? data : data?.items ?? [];
        const normalized = normalizeItems(list);

        if (!active) return;

        if (normalized.length === 0) {
          setStatus("empty");
        } else {
          setItems(normalized);
          setStatus("ready");
        }
      } catch {
        if (!active) return;
        setStatus("error");
      }
    }

    loadUpdates();

    return () => {
      active = false;
    };
  }, [initialItems]);

  const displayItems = useMemo(() => {
    let list = items;
    const query = searchTerm.trim().toLowerCase();

    if (query) {
      list = list.filter((item) => {
        const tags = item.tags?.join(" ").toLowerCase() ?? "";
        return (
          item.title.toLowerCase().includes(query) ||
          item.summary.toLowerCase().includes(query) ||
          tags.includes(query)
        );
      });
    }

    if (activeFilter !== "all") {
      list = list.filter((item) => {
        const tags = item.tags?.map((tag) => tag.toLowerCase()) ?? [];
        const summary = item.summary.toLowerCase();
        const title = item.title.toLowerCase();

        if (activeFilter === "reports") {
          return (
            tags.some((tag) => tag.includes("report")) ||
            title.includes("report") ||
            summary.includes("report")
          );
        }

        if (activeFilter === "brody") {
          return tags.some((tag) => tag.includes("brody"));
        }

        if (activeFilter === "jacob") {
          return tags.some((tag) => tag.includes("jacob"));
        }

        return true;
      });
    }

    list = [...list].sort((a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();

      if (sortOrder === "featured") {
        const featuredDelta = Number(b.featured) - Number(a.featured);
        return featuredDelta !== 0 ? featuredDelta : bTime - aTime;
      }

      return sortOrder === "newest" ? bTime - aTime : aTime - bTime;
    });

    return list;
  }, [activeFilter, items, searchTerm, sortOrder]);

  const animationKey = `${searchTerm.trim()}-${activeFilter}-${sortOrder}-${displayItems.length}`;
  const compactFeatured =
    sortOrder !== "featured" || activeFilter !== "all" || searchTerm.trim().length > 0;

  return (
    <>
      <section className="section updates-controls">
        <div className="updates-search">
          <label className="updates-label" htmlFor="updates-search">
            Search
          </label>
          <input
            id="updates-search"
            type="search"
            placeholder="Search updates…"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="updates-filters" role="group" aria-label="Filter updates">
          {filterOptions.map((chip) => (
            <button
              key={chip.value}
              type="button"
              className={`filter-chip${
                activeFilter === chip.value ? " is-active" : ""
              }`}
              onClick={() => setActiveFilter(chip.value)}
            >
              {chip.label}
            </button>
          ))}
        </div>

        <div className="updates-sort">
          <label className="updates-label" htmlFor="updates-sort">
            Sort
          </label>
          <select
            id="updates-sort"
            value={sortOrder}
            onChange={(event) =>
              setSortOrder(event.target.value as "featured" | "newest" | "oldest")
            }
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </section>

      <section className="section updates-feed-section">
        <UpdatesFeed
          status={status}
          items={displayItems}
          animationKey={animationKey}
          compactFeatured={compactFeatured}
        />
      </section>

      <section className="section updates-cta">
        <CTAButton href={APP_URL} newTab>
          Open the App
        </CTAButton>
        <CTAButton href="/methodology" variant="secondary">
          Read Methodology
        </CTAButton>
      </section>
    </>
  );
}