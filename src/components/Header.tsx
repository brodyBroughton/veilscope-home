import CTAButton from "./CTAButton";
import { APP_URL } from "@/lib/links";

export default function Header() {
    return (
        <header className="surface site-header">
            <div className="container header-inner">
                <a className="logo" href="/">
                    <picture>
                        <source srcSet="/brand/logo-light.svg" type="image/svg+xml" />
                        <img src="/brand/logo-light.png"
                            alt="Veilscope" 
                            height={32} 
                            width={220}
                            loading="eager"
                            decoding="async"
                        />
                    </picture>
                </a>

                <nav className="primary-nav" aria-label="Primary">
                    <a href="/how-it-works">How it works</a>
                    <a href="/pricing">Pricing</a>
                    <a href="/updates">Updates</a>
                    <a href="/methodology">Methodology</a>
                </nav>

                <CTAButton href={APP_URL}>Open the App</CTAButton>
            </div>
        </header>
    )
}