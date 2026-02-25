"use client";

export default function UpdateModalSkeleton() {
    return (
        <div className="modal-backdrop" role="presentation">
            <div className="modal" role="dialog" aria-modal="true" aria-busy="true">
                <div className="modal-scroll" aria-hidden="true">
                    <div className="skeleton skeleton-pill" />
                    <div className="skeleton skeleton-line skeleton-line--short" />
                    <div className="skeleton skeleton-line" />
                    <div className="skeleton-row">
                        <div className="skeleton skeleton-chip" />
                        <div className="skeleton skeleton-chip" />
                        <div className="skeleton skeleton-chip" />
                    </div>
                    <div className="skeleton skeleton-line" />
                    <div className="skeleton skeleton-line" />
                    <div className="skeleton skeleton-line" />
                    <div className="skeleton skeleton-line" />
                    <div className="skeleton skeleton-line skeleton-line--short" />
                    <div className="skeleton-row">
                        <div className="skeleton skeleton-pill" />
                        <div className="skeleton skeleton-pill" />
                    </div>
                </div>
            </div>
        </div>
    );
}
