"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function AfcLogo({ className }: { className?: string }) {
    return (
        <div className={cn("relative h-14 w-auto opacity-90 hover:opacity-100 transition-opacity", className)}>
            <Image
                src="/afc-logo.png"
                alt="AFC India - Strategic Partner"
                width={160}
                height={60}
                className="h-full w-auto object-contain object-left"
                priority
            />
        </div>
    );
}
