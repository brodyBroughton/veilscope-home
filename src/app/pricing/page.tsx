import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import DisclosureBanner from "@/components/DisclosureBanner";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import { APP_URL } from "@/lib/links";

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
      <h1>Pricing</h1>
      <p className="lead">Clear tiers with transparent limits and no hidden data changes.</p>
      <DisclosureBanner />

      <section className="section">
        <PricingTable tiers={tiers} />
      </section>

      <section className="section">
        <h2>Transparent Limits</h2>
        <p className="muted">
          Tiers control usage and feature access only. Data sources and methodology stay the same.
        </p>
      </section>

      <section className="section">
        <CTAButton href={APP_URL} newTab>
          Open the App
        </CTAButton>
      </section>

      <section className="section">
        <h2>Pricing questions</h2>
        <FAQAccordion items={faqs} />
      </section>
    </div>
  );
}