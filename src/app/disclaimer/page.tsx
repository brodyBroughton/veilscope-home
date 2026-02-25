import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Disclaimer - Veilscope",
  description: "Important disclosures and limitations for Veilscope.",
};

export default function DisclaimerPage() {
  return (
    <div className="container section">
      <Reveal className="page-hero">
        <p className="eyebrow">Disclaimer</p>
        <h1>Educational only</h1>
        <p className="lead">Veilscope is a screening tool, not advice.</p>
        <p className="muted">
          Veilscope does not provide recommendations, predictions, or financial advice. You are responsible for your own decisions.
        </p>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-grid">
          <div className="section-card">
            <h2>Data sources and accuracy</h2>
            <p className="muted">
              Data is derived from public filings and may contain delays, gaps, or errors. We do not guarantee completeness or accuracy.
            </p>
          </div>
          <div className="section-card">
            <h2>No guarantees</h2>
            <p className="muted">Past performance and historical data do not imply future results.</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}