type PricingTier = {
    name: string;
    description: string;
    features: string[];
};

type PricingTableProps = {
    tiers: PricingTier[];
};

export default function PricingTable({ tiers }: PricingTableProps) {
    return (
        <div className="pricing-grid">
            {tiers.map((tier) => (
                <div key={tier.name} className="pricing-card">
                    <h3>{tier.name}</h3>
                    <p className="muted">{tier.description}</p>
                    <ul>
                        {tier.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}