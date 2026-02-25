import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import DisclosureBanner from "@/components/DisclosureBanner";
import Reveal from "@/components/Reveal";

import { APP_URL } from "@/lib/links";

export const metadata: Metadata = {
    title: "How it works - Veilscope",
    description:
    "A plain-English overview of the Veilscope workflow: configure, screen, and reduce",
};

export default function HowItWorksPage() {
    return (
        <div className="container section">
            <Reveal className="page-hero">
                <p className="eyebrow">How it works</p>
                <h1>Filter, screen, and refine</h1>
                <p className="lead">
                    Veilscope helps you filter public-company fundamentals without opinions or predictions.
                </p>
                <div className="page-hero-actions">
                    <CTAButton href={APP_URL}>Open the App</CTAButton>
                    <CTAButton href="/data-sources" variant="secondary">
                        Data Sources
                    </CTAButton>
                </div>
            </Reveal>

            <Reveal as="section" className="section">
                <div className="section-grid">
                    <div className="section-card">
                        <h2>Simple overview</h2>
                        <p className="muted">
                            You choose the thresholds. We apply them consistently to public filings.
                        </p>
                    </div>
                    <div className="section-card">
                        <h2>Workflow overview</h2>
                        <ul className="metrics-list">
                            <li>
                                <strong>Choose filters.</strong> Set thresholds for EPS, Operating Cash Flow, Revenue, and Relative Strength (3M vs QQQ).
                            </li>
                            <li>
                                <strong>Screen.</strong> The screener produces a list of companies that match your rules.
                            </li>
                            <li>
                                <strong>Reduce.</strong> Use plain-English rules to refine the list.
                            </li>
                        </ul>
                        <DisclosureBanner />
                    </div>
                </div>
            </Reveal>

            <Reveal as="section" className="section">
                <div className="section-grid">
                    <div className="section-card">
                        <h2>Where data comes from</h2>
                        <p className="muted">
                            We use SEC EDGAR filings and derived fundamentals. See details in Data Sources.
                        </p>
                        <CTAButton href="/data-sources" variant="secondary">
                            Data Sources
                        </CTAButton>
                    </div>
                    <div className="section-card">
                        <h2>What we don't do</h2>
                        <p className="muted">
                            We don't provide recommendations, predictions, or advice. The workflow is about applying your filters consistently.
                        </p>
                    </div>
                </div>
            </Reveal>

            <Reveal as="section" className="section">
                <div className="section-card section-card--compact">
                    <h2>Questions?</h2>
                    <p className="muted">If you're new to filings, start with the FAQ.</p>
                    <CTAButton href="/faq" variant="ghost">
                        View FAQ
                    </CTAButton>
                </div>
            </Reveal>
        </div>
    )
}