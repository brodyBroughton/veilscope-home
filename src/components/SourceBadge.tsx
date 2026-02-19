type SourceBadgeProps = {
    label?: string;
    href?: string;
};

export default function SourceBadge({
    label = "Source: SEC EDGAR",
    href,
}: SourceBadgeProps ) {
    if (!href) {
        return <span className="source-badge">{label}</span>;
    }

    return (
        <a className="source-badge" href={href} target="_blank" rel="noreferrer">
            {label}
        </a>
    );
}