import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import DisclosureBanner from "@/components/DisclosureBanner";

import { APP_URL } from "@/lib/links";

export const metadata: Metadata = {
    title: "How it works - Veilscope",
    description:
        "A plain-English walkthrough of the Veilscope workflow: configure, screen, and reduce",
};

export default function HowItWorksPage() {
    return (
        <div className="container section">
            <h1>How it works</h1>
            <p className="lead">
                Veilscope helps you filter public-company fundamentals without opinions or predictions.
            </p>

            <section className="section">
                <h2>Simple overview</h2>
                <p className="muted">
                    You choose the tresholds. We apply them consistently to public filings.
                </p>
            </section>

            <section className="section">
                <h2>Step by step</h2>
                <ol className="steps-list">
                    <li>
                        <strong>Choose filters.</strong> Set thresholds for EPS, Operating Cash Flow, Revenue, and Relative Strength (3M vs QQQ).
                    </li>
                    <li>
                        <strong>Screen.</strong> The screener produces a list of companies that match your rules.
                    </li>
                    <li>
                        <strong>Reduce.</strong> Use plain-English rules to refine the list.
                    </li>
                </ol>
                <DisclosureBanner />
            </section>

            <section className="section">
                <h2>Where data comes from</h2>
                <p className="muted">
                    We use SEC EDGAR filings and derived fundamentals. See details in Data Sources.
                </p>
                <CTAButton href="/data-sources" variant="secondary">
                    Data Sources
                </CTAButton>
            </section>

            <section className="section">
                <h2>What we don't do</h2>
                <p className="muted">
                    We don't provide reccomendations, predictions, or advice. The workflow is about applying your filters consistently.
                </p>
            </section>

            <section className="section">
                <h2>Questions?</h2>
                <p className="muted">If you're new to filings, start with the FAQ.</p>
                <CTAButton href="/faq" variant="ghost">
                    View FAQ
                </CTAButton>
            </section>

            <section className="section">
                <CTAButton href={APP_URL}>Open the App</CTAButton>
            </section>
        </div>
    )
}