"use client";

import { useEffect, useRef, useState } from "react";

type UpdateModalProps = {
    title: string;
    date: string;
    summary: string;
    tags?: string[];
    body?: string;
    onClose?: () => void;
    shareUrl?: string;
};

export default function UpdateModal({ title, date, summary, tags, body, onClose, shareUrl }: UpdateModalProps) {
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const [copied, setCopied] = useState(false);

    const handleClose = () => {
        if (onClose) {
            onClose();
        } else {
            window.history.back();
        }
    };

    useEffect(() => {
        dialogRef.current?.focus();
    }, []);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        const originalPadding = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPadding;
        };
    }, []);

    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
            handleTab(event);
        };

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    const handleTab = (event: KeyboardEvent) => {
        if (!dialogRef.current || event.key !== "Tab") return;

        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    };

    const handleCopy = async () => {
        if (!shareUrl) return;

        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
    };

    return (
        <div className="modal-backdrop" role="presentation" onClick={handleClose}>
            <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="update-modal-title"
                aria-describedby="update-modal-summary"
                onClick={(event) => event.stopPropagation()
                }
                tabIndex={-1}
                ref={dialogRef}
            >
                <button className="modal-close" type="button" onClick={handleClose}>
                    Close
                </button>
    
                <div className="modal-scroll">
                    <div className="modal-date">{date}</div>
                    <h2 id="update-modal-title">{title}</h2>
                    <div className="update-card-tags">
                        {(tags ?? []).length > 0 ? (
                            tags!.map((tag) => (
                                <span
                                    key={tag}
                                    className={`update-tag${tag.toLowerCase() === "featured" ? " is-featured" : ""}`}
                                >
                                    {tag}
                                </span>
                            ))
                        ) : (
                            <span className="update-tag">Update</span>
                        )}
                    </div>
                    <p id="update-modal-summary" className="muted">
                        {summary}
                    </p>
                    {body ? <p className="modal-body">{body}</p> : null}
                    <div className="modal-actions">
                        {shareUrl ? (
                            <button
                                type="button"
                                className={`modal-action${copied ? " is-copied" : ""}`}
                                onClick={handleCopy}
                                aria-live="polite"
                            >
                            {copied ? "Copied" : "Copy share link"}
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}