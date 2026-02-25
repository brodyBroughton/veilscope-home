import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ - Veilscope",
  description: "Answers to common questions about Veilscope and its data sources.",
};

const items = [
  {
    question: "What is the SEC?",
    answer: "The U.S. Securities and Exchange Commission, which regulates public markets.",
  },
  {
    question: "What is EDGAR?",
    answer: "The SEC’s public database of company filings.",
  },
  {
    question: "What is a 10‑Q / 10‑K?",
    answer: "Quarterly (10‑Q) and annual (10‑K) reports filed by public companies.",
  },
  {
    question: "Is this investment advice?",
    answer: "No. Veilscope is educational only and does not provide recommendations.",
  },
  {
    question: "What data do you use?",
    answer: "Public SEC EDGAR filings and derived fundamentals from those filings.",
  },
  {
    question: "How often is data updated?",
    answer: "Nightly when new filings are available.",
  },
  {
    question: "What does “Relative Strength vs QQQ (3M)” mean?",
    answer: "It compares a company’s 3‑month return to QQQ over the same period.",
  },
  {
    question: "What does the assistant do?",
    answer: "It translates your plain‑English rules into filter changes. It does not provide advice.",
  },
];

export default function FAQPage() {
  return (
    <div className="container section">
      <Reveal className="page-hero">
        <p className="eyebrow">FAQ</p>
        <h1>Clear answers, quick references</h1>
        <p className="lead">Short, beginner‑friendly explanations of how Veilscope works.</p>
        <div className="page-hero-actions">
          <CTAButton href="/glossary" variant="secondary">
            Glossary
          </CTAButton>
          <CTAButton href="/data-sources" variant="ghost">
            Data Sources
          </CTAButton>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-card section-card--compact">
          <FAQAccordion items={items} />
        </div>
      </Reveal>
    </div>
  );
}