import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Veilscope",
  description: "Important disclosures and limitations for Veilscope.",
};

export default function DisclaimerPage() {
  return (
    <div className="container section">
      <h1>Disclaimer</h1>

      <section className="section">
        <p className="lead">Educational only. Not investment advice.</p>
        <p className="muted">Veilscope does not provide recommendations, predictions, or financial advice. You are responsible for your own decisions.</p>
      </section>

      <section className="section">
        <h2>Data sources and accuracy</h2>
        <p className="muted">
          Data is derived from public filings and may contain delays, gaps, or errors. We do not guarantee completeness or accuracy.
        </p>
      </section>

      <section className="section">
        <h2>No guarantees</h2>
        <p className="muted">
          Past performance and historical data do not imply future results.
        </p>
      </section>
    </div>
  );
}