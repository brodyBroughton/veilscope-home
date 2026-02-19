"use client";

import { useMemo, useState } from "react";

type Company = {
  id: string;
  name: string;
  eps: number;
  ocf: number;
  rev: number;
  rs: number;
};

const sampleCompanies: Company[] = [
  { id: "c1", name: "Apex Holdings", eps: 1.24, ocf: 2.8, rev: 9.6, rs: 4.1 },
  { id: "c2", name: "Northwind Labs", eps: 0.62, ocf: 1.1, rev: 4.2, rs: 2.3 },
  { id: "c3", name: "Brightline Co.", eps: 0.18, ocf: 0.4, rev: 1.7, rs: 1.1 },
  { id: "c4", name: "Harbor Systems", eps: 0.05, ocf: 0.2, rev: 0.9, rs: 0.7 },
  { id: "c5", name: "Silver Oak", eps: 0.92, ocf: 1.8, rev: 6.1, rs: 3.4 },
  { id: "c6", name: "Summit Ridge", eps: 1.46, ocf: 3.2, rev: 10.4, rs: 4.8 },
  { id: "c7", name: "Riverview Tech", eps: 0.31, ocf: 0.7, rev: 2.4, rs: 1.9 },
  { id: "c8", name: "Mariner Group", eps: 0.74, ocf: 1.5, rev: 5.5, rs: 2.6 },
  { id: "c9", name: "Cedar Hill", eps: 1.02, ocf: 2.2, rev: 7.8, rs: 3.9 },
  { id: "c10", name: "Everline", eps: 0.12, ocf: 0.3, rev: 1.1, rs: 0.5 },
  { id: "c11", name: "Signal Point", eps: 0.58, ocf: 1.0, rev: 3.6, rs: 2.0 },
  { id: "c12", name: "Atlas Harbor", eps: 1.31, ocf: 2.9, rev: 8.8, rs: 4.3 },
];

export default function MiniScreenerDemo() {
    const [epsDraft, setEpsDraft] = useState(0.0);
    const [ocfDraft, setOcfDraft] = useState(0.0);
    const [revDraft, setRevDraft] = useState(0.0);
    const [rsDraft, setRsDraft] = useState(0.0);

    const [epsMin, setEpsMin] = useState(0.0);
    const [ocfMin, setOcfMin] = useState(0.0);
    const [revMin, setRevMin] = useState(0.0);
    const [rsMin, setRsMin] = useState(0.0);

    const commitThresholds = () => {
        setEpsMin(epsDraft);
        setOcfMin(ocfDraft);
        setRevMin(revDraft);
        setRsMin(rsDraft);
    };

    const filtered = useMemo(
        () =>
            sampleCompanies.filter(
                (company) =>
                    company.eps >= epsMin &&
                    company.ocf >= ocfMin &&
                    company.rev >= revMin &&
                    company.rs >= rsMin
            ),
        [epsMin, ocfMin, revMin, rsMin]
    );

    const visibleCompanies = filtered.slice(0, 4);

    return (
        <div className="mini-screener surface-elevated">
            <div className="mini-screener-header">
                <p className="mini-screener-title">Mini Screener Demo</p>
                <span className="accent-chip">Sample data</span>
            </div>

            <div className="mini-screener-grid">
                <div className="mini-screener-left">
                    <div className="mini-screener-slider">
                        <div className="slider-label">
                            <span>Earnings Per Share</span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={3}
                            step={0.1}
                            value={epsDraft}
                            onChange={(event) => setEpsDraft(Number(event.target.value))}
                            onMouseUp={commitThresholds}
                            onTouchEnd={commitThresholds}
                            onKeyUp={commitThresholds}
                            onBlur={commitThresholds}
                        />
                    </div>

                    <div className="mini-screener-slider">
                        <div className="slider-label">
                            <span>Operating Cash Flow</span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={6}
                            step={0.2}
                            value={ocfDraft}
                            onChange={(event) => setOcfDraft(Number(event.target.value))}
                            onMouseUp={commitThresholds}
                            onTouchEnd={commitThresholds}
                            onKeyUp={commitThresholds}
                            onBlur={commitThresholds}
                        />
                    </div>

                    <div className="mini-screener-slider">
                        <div className="slider-label">
                            <span>Revenue</span>
                        </div>
                        <input
                            type="range"
                            min={0}
                            max={12}
                            step={0.5}
                            value={revDraft}
                            onChange={(event) => setRevDraft(Number(event.target.value))}
                            onMouseUp={commitThresholds}
                            onTouchEnd={commitThresholds}
                            onKeyUp={commitThresholds}
                            onBlur={commitThresholds}
                        />
                    </div>

                    <div className="mini-screener-slider">
                        <div className="slider-label">
                            <span>Relative Strength</span>
                        </div>
                        <input
                            type="range"
                            min={-1}
                            max={8}
                            step={0.2}
                            value={rsDraft}
                            onChange={(event) => setRsDraft(Number(event.target.value))}
                            onMouseUp={commitThresholds}
                            onTouchEnd={commitThresholds}
                            onKeyUp={commitThresholds}
                            onBlur={commitThresholds}
                        />
                    </div>
                </div>

                <div className="mini-screener-right">
                    {filtered.length === 0 ? (
                        <div className="mini-screener-empty">
                            No sample companies match these thresholds.
                        </div>
                    ) : (
                        <div className="company-list">
                            {visibleCompanies.map((company, index) => (
                                <div
                                    key={`${company.id}-${epsMin}-${ocfMin}-${revMin}-${rsMin}`}
                                    className="company-card"
                                    style={{ animationDelay: `${index * 60}ms` }}
                                >
                                    <div className="company-name">{company.name}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}