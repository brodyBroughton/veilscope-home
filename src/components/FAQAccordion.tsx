type FAQItem = {
    question: string;
    answer: string;
};

type FAQAccordionProps = {
    items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
    return (
        <div className="faq-accordion">
            {items.map((item) => (
                <details key={item.question} className="faq-item">
                    <summary>{item.question}</summary>
                    <p className="muted">{item.answer}</p>
                </details>
            ))}
        </div>
    );
}