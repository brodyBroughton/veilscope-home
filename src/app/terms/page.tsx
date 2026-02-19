import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms - Veilscope",
  description: "Terms of service placeholder for Veilscope.",
}

export default function TermsPage() {
  return (
    <div className="container section">
      <h1>Terms</h1>
      <p className="lead">Terms of service coming soon.</p>
    </div>
  );
}