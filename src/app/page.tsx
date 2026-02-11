import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import DisclosureBanner from "@/components/DisclosureBanner";
import FeatureCard from "@/components/FeatureCard";
import UpdatesFeed from "@/components/UpdatesFeed";
import { APP_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Veilscope - Transparent stock screening from SEC filings",
  description:
    "Unbiased screening of U.S. public companies using reported fundamentals. Educational only.",
};

const steps = [
  {
    title: "Configure",
    description: "Set screening thresholds for core fundamentals you control.",
  },
  {
    title: "Screen",
    description: "Run the screen to generate a list of companies.",
  },
  {
    title: "Reduce",
    description:
      "Apply plain-English rules to refine the list without advice or opinions.",
  },
];

const updates = [
  {
    id: "u1",
    title: "Progress update: new data pipeline",
    date: "2026-02-01",
    summary: "Improved filing ingestion and nightly refresh reliability",
  },
  {
    id: "u2",
    title: "UI refresh: trust motifs",
    date: "2026-01-20",
    summary: "Source badges and as-of timestamps added site-wide.",
  },
  {
    id: "u3",
    title: "Metrics glossary expanded",
    date: "2026-01-08",
    summary: "Plain-English definitions for EPS, OCF, and relative strength.",
  },
];

export default function Home() {
  return (
    <div className="home">
      <section className="container section hero">
        <div className="hero-text">
          <p className="eyebrow">Unbiased fundamentals</p>
          <h1>Unbiased screening from public filings</h1>
          <p className="lead">
            Configure filters, screen, then reduce the list with plain-English rules.
          </p>
          <div className="hero-actions">
            <CTAButton href={APP_URL}>Open the App</CTAButton>
            <CTAButton href="/methodology" variant="secondary">
              See methodology
            </CTAButton>
          </div>
          <DisclosureBanner />
        </div>
      </section>

      <section className="container section">
        <h2>How it works</h2>
        <div className="card-grid">
          {steps.map((step) => (
            <FeatureCard
              key={step.title}
              title={step.title}
              description={step.description}
              />
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>What we measure</h2>
        <ul className="metrics-list">
          <li>EPS</li>
          <li>Operating Cash Flow</li>
          <li>Revenue</li>
          <li>Relative Strength (3M vs QQQ)</li>
          <li className="muted">More metrics coming.</li>
        </ul>
      </section>

      <section className="container section trust">
        <h2>Nothing is hidden</h2>
        <p className="muted">Traceable to public filings.</p>
        <ul className="trust-list">
          <li>Direct links to sources</li>
          <li>Clear as-of dates</li>
          <li>Methodology near every claim</li>
        </ul>
        <div className="trust-actions">
          <CTAButton href="/data-sources" variant="secondary">
            Data Sources
          </CTAButton>
          <CTAButton href="/glossary" variant="ghost">
            Glossary
          </CTAButton>
        </div>
      </section>

      <section className="container section">
        <div className="section-header">
          <h2>Latest updates</h2>
          <a className="link" href="/updates">
            View updates
          </a>
        </div>
        <UpdatesFeed status="ready" items={updates} />
      </section>
    </div>
  );
}