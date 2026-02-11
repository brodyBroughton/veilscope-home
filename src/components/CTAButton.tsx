type CTAButtonProps = {
    href: string;
    variant?: "primary" | "secondary" | "ghost";
    newTab?: boolean;
    children: React.ReactNode;
};

const variantClass = {
    primary: "cta cta-primary",
    secondary: "cta cta-secondary",
    ghost: "cta cta-ghost",
};

export default function CTAButton({
    href,
    variant = "primary",
    newTab = false,
    children,
}: CTAButtonProps) {
    const className = variantClass[variant];

    return (
        <a
            className={className}
            href={href}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noreferrer" : undefined}
        >
            {children}
        </a>
    );
}
