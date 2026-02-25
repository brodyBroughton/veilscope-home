import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About - Veilscope",
  description: "Veilscope's mission and principles; transparency, trust, and user control.",
};

export default function AboutPage() {
  return (
    <div className="container section">
      <Reveal className="page-hero">
        <p className="eyebrow">About</p>
        <h1>Transparency-first screening</h1>
        <p className="lead">
          Veilscope makes public-filing data easier to filter and verify — without opinions.
        </p>
        <div className="chip-row">
          <span className="accent-chip">Transparency</span>
          <span className="accent-chip">Traceable sources</span>
          <span className="accent-chip">User-controlled filters</span>
        </div>
        <div className="page-hero-actions">
          <CTAButton href="/methodology" variant="secondary">
            Methodology
          </CTAButton>
          <CTAButton href="/data-sources" variant="ghost">
            Data Sources
          </CTAButton>
          <CTAButton href="/glossary" variant="ghost">
            Glossary
          </CTAButton>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-grid">
          <div className="section-card">
            <h2>Mission</h2>
            <p className="muted">
              Provide transparent access to unbiased public-company fundamentals with clear sources and timestamps.
            </p>
          </div>
          <div className="section-card">
            <h2>Principles</h2>
            <ul className="metrics-list">
              <li><strong>Transparency:</strong> Source links, as-of dates, and methodology.</li>
              <li><strong>Trust:</strong> Clean, consistent UI and clear disclosures.</li>
              <li><strong>Information access:</strong> Beginner-friendly definitions and links.</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-card">
          <h2>What Veilscope is (and isn't)</h2>
          <p className="muted">
            Veilscope is a filtering tool for public data. It does not provide recommendations, predictions, or advice.
          </p>
        </div>
      </Reveal>
    </div>
  );
}