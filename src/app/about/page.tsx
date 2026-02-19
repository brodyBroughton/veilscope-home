import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About - Veilscope",
  description: "Veilscope's mission and principles; transparency, trust, and user control.",
};

export default function AboutPage() {
  return (
    <div className="container section">
      <h1>About</h1>
      <p className="lead">
        Veilscope is built to make public-filing data easier to filter and verify.
      </p>

      <section className="section">
        <h2>Mission</h2>
        <p className="muted">
          Provide transparent access to unbiased public-company fundamentals with clear sources and timestamps.
        </p>
      </section>

      <section className="section">
        <h2>Principles</h2>
        <ul className="metrics-list">
          <li><strong>Transparency:</strong> Source links, as-of dates, and methodology.</li>
          <li><strong>Trust:</strong> Clean, consistent UI and clear disclosures.</li>
          <li><strong>Information access:</strong> Beginner-friendly definitions and links.</li>
        </ul>
      </section>

      <section className="section">
        <h2>What Veilscope is (and isn't)</h2>
        <p className="muted">
          Veilscope is a filtering tool for public data. It does not provide recommendations, predictions, or advice.
        </p>
      </section>

      <section className="section">
        <CTAButton href="/methodology" variant="secondary">
          Methodology
        </CTAButton>
        <CTAButton href="/data-sources" variant="ghost">
          Data Sources
        </CTAButton>
        <CTAButton href="/glossary" variant="ghost">
          Glossary
        </CTAButton>
      </section>
    </div>
  );
}