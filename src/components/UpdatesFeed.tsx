type UpdateItem = {
    id: string;
    title: string;
    date: string;
    summary: string;
};

type UpdatesFeedProps = {
    status: "loading" | "error" | "empty" | "ready";
    items: UpdateItem[];
};

export default function UpdatesFeed({ status, items }: UpdatesFeedProps) {
    if (status === "loading") {
        return <div className="updates-feed">Loading updates...</div>;
    }

    if (status === "error") {
        return <div className="updates-feed">Unable to load updates.</div>;
    }

    if (status === "empty") {
        return <div className="updates-feed">No updates yet.</div>
    }

    return (
        <div className="updates-feed">
            <ul className="updates-list">
                {items.map((item) => (
                    <li key={item.id} className="updates-item">
                        <div className="updates-meta">{item.date}</div>
                        <h4>{item.title}</h4>
                        <p className="muted">{item.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}