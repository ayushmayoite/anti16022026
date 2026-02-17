"use client";

import React from "react";
import Image from "next/image";
import { useConfigurator } from "./ConfiguratorContext";

const layoutImages: Record<string, string> = {
    linear: "/products/linear-workstation-1.jpg",
    "cluster-4": "/products/deskpro-workstation-1.jpg",
    "cluster-6": "/products/deskpro-workstation-2.jpg",
    "l-shape": "/products/60x30-workstation-1.jpg",
    "u-shape": "/products/60x30-workstation-2.jpg",
    "private-cabins": "/products/cabin electrical render .jpg",
    "hybrid-mix": "/products/deskpro-workstation-3.jpg",
};

export function ConfiguratorPreview() {
    const { config } = useConfigurator();

    const previewImage =
        config.layout && layoutImages[config.layout]
            ? layoutImages[config.layout]
            : "/products/deskpro-workstation-1.jpg";

    return (
        <div className="w-full max-w-2xl space-y-6">
            {/* Preview Image */}
            <div className="relative aspect-[4/3] bg-white border border-neutral-200 overflow-hidden">
                <Image
                    src={previewImage}
                    alt="Workstation Preview"
                    fill
                    className="object-contain p-4"
                    priority
                />
                {/* Overlay Info */}
                {config.layout && (
                    <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/90 backdrop-blur-sm text-white p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-wide text-neutral-400">
                                    Selected Layout
                                </p>
                                <p className="text-sm font-medium">
                                    {config.layout.replace("-", " ").toUpperCase()}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs uppercase tracking-wide text-neutral-400">
                                    Capacity
                                </p>
                                <p className="text-sm font-medium">
                                    {config.seatingCount} Seats
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Configuration Summary */}
            <div className="bg-white border border-neutral-200 divide-y divide-neutral-200">
                {/* Header */}
                <div className="p-6">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
                        Your Configuration
                    </h3>
                </div>

                {/* Product Line */}
                {config.productLine && (
                    <div className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
                                    System
                                </p>
                                <p className="text-base font-medium capitalize">{config.productLine.replace("-", " ")}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Seating Config */}
                <div className="p-6 space-y-3">
                    <p className="text-xs uppercase tracking-wide text-neutral-500">Configuration</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs text-neutral-500">Type</p>
                            <p className="text-sm font-medium capitalize">{config.furnitureType}</p>
                        </div>
                        <div>
                            <p className="text-xs text-neutral-500">Seating</p>
                            <p className="text-sm font-medium capitalize">
                                {config.seatingType} ({config.seatingCount})
                            </p>
                        </div>
                    </div>
                    {config.layout && (
                        <div className="pt-2">
                            <p className="text-xs text-neutral-500">Layout</p>
                            <p className="text-sm font-medium capitalize">
                                {config.layout.replace("-", " ")}
                            </p>
                        </div>
                    )}
                </div>

                {/* Finishes & Materials */}
                {(config.topFinish || config.legType || config.partitionHeight) && (
                    <div className="p-6 space-y-3">
                        <p className="text-xs uppercase tracking-wide text-neutral-500">Finishes & Materials</p>
                        <div className="space-y-2">
                            {config.topFinish && (
                                <div className="flex justify-between">
                                    <span className="text-xs text-neutral-500">Top Finish</span>
                                    <span className="text-sm font-medium">{config.topFinish}</span>
                                </div>
                            )}
                            {config.legType && (
                                <div className="flex justify-between">
                                    <span className="text-xs text-neutral-500">Legs</span>
                                    <span className="text-sm font-medium">{config.legType}</span>
                                </div>
                            )}
                            {config.partitionHeight && (
                                <div className="flex justify-between">
                                    <span className="text-xs text-neutral-500">Partition</span>
                                    <span className="text-sm font-medium">{config.partitionHeight}</span>
                                </div>
                            )}
                            {config.hasReturnPartition && (
                                <div className="flex justify-between">
                                    <span className="text-xs text-neutral-500">Return Partition</span>
                                    <span className="text-sm font-medium text-primary">Included</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Accessories */}
                {config.accessories.length > 0 && (
                    <div className="p-6 space-y-3">
                        <p className="text-xs uppercase tracking-wide text-neutral-500">Add-ons & Accessories</p>
                        <ul className="space-y-1">
                            {config.accessories.map((accessory, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    <span>{accessory}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Cable Management */}
                {config.cableManagement && (
                    <div className="p-6">
                        <div className="flex justify-between">
                            <span className="text-xs uppercase tracking-wide text-neutral-500">Cable Management</span>
                            <span className="text-sm font-medium">{config.cableManagement}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
