"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import UpdateModalSkeleton from "@/components/UpdateModalSkeleton";

type UpdateCardLinkProps = {
    href: string;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
};

export default function UpdateCardLink({ href, className, style, children }: UpdateCardLinkProps) {
    const pathname = usePathname();
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        if (!showLoading) return;

        const handleReady = () => setShowLoading(false);
        window.addEventListener("update-modal:ready", handleReady);

        const timeoutId = window.setTimeout(() => {
            setShowLoading(false);
        }, 10000);

        return () => {
            window.removeEventListener("update-modal:ready", handleReady);
            window.clearTimeout(timeoutId);
        };
    }, [showLoading]);

    useEffect(() => {
        if (!showLoading) return;
        if (pathname.startsWith("/updates") || pathname === "/") return;
        setShowLoading(false);
    }, [pathname, showLoading]);

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (event.defaultPrevented) return;
        if (event.button !== 0) return;
        if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
        setShowLoading(true);
    };

    return (
        <>
            <Link href={href} className={className} style={style} onClick={handleClick}>
                {children}
            </Link>
            {showLoading ? <UpdateModalSkeleton /> : null}
        </>
    );
}
