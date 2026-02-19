const CONTACT_URL = "https://contact.veilscope.com";

export default function Footer() {
    return (
        <footer className="surface site-footer">
            <div className="container footer-inner">
                <div className="footer-links">
                    <a href="/data-sources">Data Sources</a>
                    <a href="/glossary">Glossary</a>
                    <a href="/faq">FAQ</a>
                    <a href="/about">About</a>
                    <a href="/disclaimer">Disclaimer</a>
                    <a href="/privacy">Privacy</a>
                    <a href="/terms">Terms</a>
                    <a href={CONTACT_URL} target="_blank" rel="noreferrer">
                      Contact
                    </a>
                </div>

                <p className="disclaimer">Educational only. Not investment advice.</p>
                <p className="muted">© 2026 Veilscope</p>
            </div>
        </footer>
    )
}