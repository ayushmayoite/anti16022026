"use client";

import React from "react";
import { useConfigurator } from "./ConfiguratorContext";
import { ConfiguratorPreview } from "./ConfiguratorPreview";
import { ConfiguratorSteps } from "./ConfiguratorSteps";
import { SummaryPanel } from "./SummaryPanel";

export function ConfiguratorLayout() {
    return (
        <div className="min-h-screen bg-background">
            {/* Mobile: Stacked layout, Desktop: Side-by-side */}
            <div className="lg:grid lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_600px] lg:gap-0">
                {/* Left Panel - Controls (Scrollable on both mobile and desktop) */}
                <div className="bg-white">
                    <div className="container-wide py-8 lg:py-16 space-y-12">
                        <div className="space-y-6">
                            <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 font-sans">
                                Build Your Workspace
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light italic text-primary">
                                Workstation Configurator
                            </h1>
                            <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl">
                                Explore modular office furniture tailored to your needs. Configure layouts, finishes, and accessories to create the perfect workspace.
                            </p>
                        </div>

                        <ConfiguratorSteps />
                    </div>

                    {/* Summary Panel - Bottom of controls */}
                    <div className="border-t border-neutral-200 bg-neutral-50">
                        <SummaryPanel />
                    </div>
                </div>

                {/* Right Panel - Preview (Hidden on mobile, Sticky on desktop) */}
                <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen bg-neutral-100 border-l border-neutral-200">
                    <div className="h-full flex items-center justify-center p-12">
                        <ConfiguratorPreview />
                    </div>
                </div>
            </div>
        </div>
    );
}
