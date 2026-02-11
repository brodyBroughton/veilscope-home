type DisclosureBannerProps = {
    text?: string;
};

export default function DisclosureBanner({
    text = "Educational only. Not investment advice.",
}: DisclosureBannerProps) {
    return <div className="disclosure-banner">{text}</div>
}