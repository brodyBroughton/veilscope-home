import type { Metadata } from "next";
import SourceBadge from "@/components/SourceBadge";
import TimestampChip from "@/components/TimestampChip";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Data Sources - Veilscope",
  description:
    "Source transparency for Veilscope: SEC EDGAR filings, derived fundamentals, and update cadence.",
};

export default function DataSourcesPage() {
  return (
    <div className="container section">
      <h1>Data Sources</h1>
      <p className="lead">
        All screening data is traceable to public filings. Educational only. Not investment advice.
      </p>

      <section className="section">
        <h2>SEC EDGAR filings</h2>
        <p className="muted">
          We read 10-Q and 10-K filings from SEC EDGAR.
        </p>
        <SourceBadge />
      </section>

      <section className="section">
        <h2>Derived fundamentals</h2>
        <p className="muted">
          Fundamentals series are derived via edgartools to keep metrics consistent.
        </p>
      </section>

      <section className="section">
        <h2>Future market data</h2>
        <p className="muted">
          A broader 10-year market data layer is planned for custom charts.
        </p>
      </section>

      <section className="section">
        <h2>Update cadence</h2>
        <p className="muted">
          Data is updated nightly when new filings are available.
        </p>
        <TimestampChip date="2026-02-11" />
      </section>

      <section className="section">
        <h2>How we prevent bias</h2>
        <p className="muted">
          The same rules apply to every company. You control the filters.
        </p>
      </section>

      <section className="section">
        <CTAButton href="/glossary" variant="secondary">
          Glossary
        </CTAButton>
        <CTAButton href="/methodology" variant="ghost">
          Methodology
        </CTAButton>
      </section>
    </div>
  );
}