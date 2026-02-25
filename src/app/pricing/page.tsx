import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import DisclosureBanner from "@/components/DisclosureBanner";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import { APP_URL } from "@/lib/links";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing - Veilscope",
  description:
    "Transparent usage tiers for Veilscope with clear limits and no hidden data changes.",
};

const tiers = [
  {
    name: "Free",
    description: "Explore core screening with basic limits.",
    features: ["Screens/day (placeholder)", "Saved screens (placeholder)", "Exports (placeholder)"],
  },
  {
    name: "Pro",
    description: "Higher limits for active screeners",
    features: ["Screens/day (placeholder)", "Saved screens (placeholder)", "Assistant usage (placeholder)"],
  },
  {
    name: "Team",
    description: "Shared access and higher caps",
    features: ["Seats (placeholder)", "Exports (placeholder)", "Alerts (future)"],
  },
];

const faqs = [
  {
    question: "Is this investment advice?",
    answer: "No. Veilscope provides educational tools for filtering public data.",
  },
  {
    question: "Do tiers change the data quality?",
    answer: "No. Tiers only control usage limits and features, not the underlying data.",
  },
  {
    question: "Is billing live yet?",
    answer: "Not yet. Pricing and billing details will be announced before launch.",
  },
];

export default function PricingPage() {
  return (
    <div className="container section">
      <Reveal className="page-hero">
        <p className="eyebrow">Pricing</p>
        <h1>Transparent tiers, clear limits</h1>
        <p className="lead">Usage tiers keep limits clear without changing the underlying data.</p>
        <DisclosureBanner />
        <div className="page-hero-actions">
          <CTAButton href={APP_URL} newTab>
            Open the App
          </CTAButton>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <PricingTable tiers={tiers} />
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-card section-card--compact">
          <h2>Transparent Limits</h2>
          <p className="muted">
            Tiers control usage and feature access only. Data sources and methodology stay the same.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section">
        <div className="section-card section-card--compact">
          <h2>Pricing questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </Reveal>
    </div>
  );
}