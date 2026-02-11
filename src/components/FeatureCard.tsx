type FeatureCardProps = {
    title: string;
    description: string;
    icon?: React.ReactNode;
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <div className="feature-card">
            {icon && <div className="feature-icon">{icon}</div>}
            <h3>{title}</h3>
            <p className="muted">{description}</p>
        </div>
    );
}