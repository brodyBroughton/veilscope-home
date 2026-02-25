import type { Metadata } from "next";
import SourceBadge from "@/components/SourceBadge";
import TimestampChip from "@/components/TimestampChip";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Data Sources - Veilscope",
  description:
    "Source transparency for Veilscope: SEC EDGAR filings, derived fundamentals, and update cadence.",
};

export default function DataSourcesPage() {
  return (
    <div className="container section">
      <Reveal className="page-hero">
        <p className="eyebrow">Data sources</p>
        <h1>Traceable to primary filings</h1>
        <p className="lead">
          All screening data is sourced from public filings and derived fundamentals. Educational only. Not investment advice.
        </p>
        <div className="chip-row">
          <SourceBadge />
          <TimestampChip date="2026-02-11" />
        </div>
        <div className="page-hero-actions">
          <CTAButton href="/glossary" variant="secondary">
            Glossary
          </CTAButton>
          <CTAButton href="/methodology" variant="ghost">
            Methodology
          </CTAButton>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-grid">
          <div className="section-card">
            <h2>SEC EDGAR filings</h2>
            <p className="muted">We read 10-Q and 10-K filings from SEC EDGAR.</p>
          </div>
          <div className="section-card">
            <h2>Derived fundamentals</h2>
            <p className="muted">Fundamentals series are derived via edgartools to keep metrics consistent.</p>
          </div>
          <div className="section-card">
            <h2>Future market data</h2>
            <p className="muted">A broader 10-year market data layer is planned for custom charts.</p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-grid">
          <div className="section-card">
            <h2>Update cadence</h2>
            <p className="muted">Data is updated nightly when new filings are available.</p>
            <div className="chip-row">
              <TimestampChip date="2026-02-11" />
            </div>
          </div>
          <div className="section-card">
            <h2>How we prevent bias</h2>
            <p className="muted">The same rules apply to every company. You control the filters.</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}