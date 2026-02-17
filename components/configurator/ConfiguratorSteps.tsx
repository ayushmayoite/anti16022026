"use client";

import React from "react";
import { useConfigurator, LayoutType, ProductLine } from "./ConfiguratorContext";
import { cn } from "@/lib/utils";
import Image from "next/image";

const productLineOptions: { value: ProductLine; label: string; description: string; useCase: string; image: string }[] = [
    { 
        value: "deskpro", 
        label: "DeskPro System", 
        description: "Modular workstations with integrated privacy screens and cable management",
        useCase: "Open offices with defined privacy needs",
        image: "/products/deskpro-workstation-1.jpg"
    },
    { 
        value: "linear", 
        label: "Linear Workstation", 
        description: "Open collaborative benching with clean lines and shared infrastructure",
        useCase: "High-density collaborative teams",
        image: "/products/linear-workstation-1.jpg"
    },
    { 
        value: "60x30", 
        label: "60x30 Modular", 
        description: "High partition cubicle system for semi-private focused work",
        useCase: "IT teams, call centers, private workspaces",
        image: "/products/60x30-workstation-1.jpg"
    },
    { 
        value: "custom", 
        label: "Custom Solutions", 
        description: "Tailored workspace systems for unique requirements",
        useCase: "Large corporate projects, specialized needs",
        image: "/products/tcs-workspace-1.jpg"
    },
];

const layoutOptions: { value: LayoutType; label: string; description: string }[] = [
    { value: "linear", label: "Linear Bench", description: "Straight desk arrangement" },
    { value: "cluster-4", label: "Cluster of 4", description: "4-person workstation cluster" },
    { value: "cluster-6", label: "Cluster of 6", description: "6-person workspace" },
    { value: "l-shape", label: "L-Shape", description: "L-shaped desk configuration" },
    { value: "u-shape", label: "U-Shape", description: "U-shaped workspace" },
    { value: "private-cabins", label: "Private Cabins", description: "Enclosed workspaces" },
    { value: "hybrid-mix", label: "Hybrid Mix", description: "Combined open and enclosed" },
];

const finishOptions = [
    "Warm Oak",
    "Walnut",
    "Light Maple",
    "Concrete Grey",
    "Matte Black",
    "Custom Laminate",
];

const accessoryOptions = [
    "Monitor Arms",
    "Desk Dividers",
    "Cable Trays",
    "CPU Holders",
    "Bag Hooks",
    "Task Lighting",
];

export function ConfiguratorSteps() {
    const { config, updateConfig, currentStep, setCurrentStep } = useConfigurator();

    const steps = [
        { id: 0, title: "Product Line", complete: !!config.productLine },
        { id: 1, title: "Furniture Type", complete: !!config.furnitureType },
        { id: 2, title: "Seating", complete: config.seatingCount > 0 },
        { id: 3, title: "Layout", complete: !!config.layout },
        { id: 4, title: "Partitions", complete: config.partitionHeight !== "" },
        { id: 5, title: "Finishes", complete: !!config.topFinish },
        { id: 6, title: "Accessories", complete: config.accessories.length > 0 },
    ];

    return (
        <div className="space-y-8">
            {/* Step Progress Indicator */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-600">
                        Step {currentStep + 1} of {steps.length}
                    </p>
                    <div className="flex items-center gap-2">
                        {steps.map((step) => (
                            <button
                                key={step.id}
                                onClick={() => step.complete || step.id === currentStep ? setCurrentStep(step.id) : null}
                                disabled={!step.complete && step.id !== currentStep}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all",
                                    currentStep === step.id
                                        ? "bg-primary w-8"
                                        : step.complete
                                            ? "bg-neutral-400 hover:bg-primary cursor-pointer"
                                            : "bg-neutral-200 cursor-not-allowed"
                                )}
                                aria-label={`${step.complete ? 'Go to' : ''} ${step.title}`}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Step breadcrumb for clarity */}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                    {steps.slice(0, currentStep + 1).map((step, index) => (
                        <React.Fragment key={step.id}>
                            {index > 0 && <span className="text-neutral-300">/</span>}
                            <button
                                onClick={() => step.complete || step.id === currentStep ? setCurrentStep(step.id) : null}
                                disabled={!step.complete && step.id !== currentStep}
                                className={cn(
                                    "transition-colors",
                                    currentStep === step.id
                                        ? "text-primary font-medium"
                                        : step.complete
                                            ? "text-neutral-600 hover:text-primary"
                                            : "text-neutral-400 cursor-not-allowed"
                                )}
                            >
                                {step.title}
                            </button>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Step Content */}
            <div className="border border-neutral-200 p-6 lg:p-8 min-h-[400px]">
                {currentStep === 0 && (
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-serif font-light italic text-primary mb-3">
                                Choose Your Workspace System
                            </h2>
                            <p className="text-neutral-600 leading-relaxed">
                                Each system is designed for specific workplace needs. Select the one that best matches your requirements.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {productLineOptions.map((line) => (
                                <button
                                    key={line.value}
                                    onClick={() => updateConfig({ productLine: line.value })}
                                    className={cn(
                                        "group relative overflow-hidden border-2 text-left transition-all hover:shadow-xl",
                                        config.productLine === line.value
                                            ? "border-primary bg-primary/5"
                                            : "border-neutral-200 hover:border-neutral-300"
                                    )}
                                >
                                    {/* Product Image */}
                                    <div className="relative h-48 bg-neutral-100 overflow-hidden">
                                        <Image
                                            src={line.image}
                                            alt={line.label}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-xl font-medium text-white">{line.label}</h3>
                                        </div>
                                    </div>
                                    {/* Product Info */}
                                    <div className="p-6 space-y-3">
                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                            {line.description}
                                        </p>
                                        <div className="pt-2 border-t border-neutral-200">
                                            <p className="text-xs uppercase tracking-wide text-neutral-500 mb-1">
                                                Best For
                                            </p>
                                            <p className="text-sm font-medium text-neutral-900">
                                                {line.useCase}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {currentStep === 1 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-light">Select Furniture Type</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {(["desking", "cabin", "meeting"] as const).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => updateConfig({ furnitureType: type })}
                                    className={cn(
                                        "p-6 border-2 text-left transition-all hover:shadow-md",
                                        config.furnitureType === type
                                            ? "border-primary bg-primary/5"
                                            : "border-neutral-200 hover:border-neutral-300"
                                    )}
                                >
                                    <h3 className="text-lg font-medium capitalize">{type} Workstation</h3>
                                    <p className="text-sm text-neutral-600 mt-2">
                                        {type === "desking"
                                            ? "Shared and non-shared workstations"
                                            : type === "cabin"
                                                ? "Executive cabin tables"
                                                : "Conference and meeting tables"}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-light">Seating Configuration</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-3">Type</label>
                                <div className="space-y-2">
                                    {(["shared", "non-shared"] as const).map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => updateConfig({ seatingType: type })}
                                            className={cn(
                                                "w-full p-4 border-2 text-left",
                                                config.seatingType === type
                                                    ? "border-primary bg-primary/5"
                                                    : "border-neutral-200"
                                            )}
                                        >
                                            <span className="capitalize">{type.replace("-", " ")}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-3">Number of Seats</label>
                                <select
                                    value={config.seatingCount}
                                    onChange={(e) => updateConfig({ seatingCount: parseInt(e.target.value) })}
                                    className="w-full px-4 py-3 border border-neutral-200 bg-white focus:outline-none focus:border-primary"
                                >
                                    {[1, 2, 3, 4, 6, 8, 12].map((num) => (
                                        <option key={num} value={num}>
                                            {num} Seater
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={config.hasReturnPartition}
                                        onChange={(e) => updateConfig({ hasReturnPartition: e.target.checked })}
                                        className="w-5 h-5 border-neutral-300"
                                    />
                                    <span className="text-sm">Include Return Partition</span>
                                </label>
                            </div>
                        </div>
                        <button
                            onClick={() => setCurrentStep(3)}
                            className="bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-colors"
                        >
                            Next Step
                        </button>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-light">Choose Layout</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {layoutOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => updateConfig({ layout: option.value })}
                                    className={cn(
                                        "p-6 border-2 text-left transition-all hover:shadow-md",
                                        config.layout === option.value
                                            ? "border-primary bg-primary/5"
                                            : "border-neutral-200"
                                    )}
                                >
                                    <h3 className="text-lg font-medium">{option.label}</h3>
                                    <p className="text-sm text-neutral-600 mt-1">{option.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {currentStep === 4 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-light">Partition Options</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-3">Partition Height</label>
                                <select
                                    value={config.partitionHeight}
                                    onChange={(e) => updateConfig({ partitionHeight: e.target.value })}
                                    className="w-full px-4 py-3 border border-neutral-200 bg-white focus:outline-none focus:border-primary"
                                >
                                    <option value="">Select height</option>
                                    <option value="1000 mm">1000 mm</option>
                                    <option value="1200 mm">1200 mm</option>
                                    <option value="1500 mm">1500 mm</option>
                                    <option value="1800 mm">1800 mm</option>
                                    <option value="Glass top mixed">Glass top mixed</option>
                                </select>
                            </div>
                        </div>
                        <button
                            onClick={() => setCurrentStep(5)}
                            className="bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-colors"
                        >
                            Next Step
                        </button>
                    </div>
                )}

                {currentStep === 5 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-light">Select Finishes</h2>
                        <div>
                            <label className="block text-sm font-medium mb-3">Top Finish</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {finishOptions.map((finish) => (
                                    <button
                                        key={finish}
                                        onClick={() => updateConfig({ topFinish: finish })}
                                        className={cn(
                                            "p-4 border-2 text-sm",
                                            config.topFinish === finish
                                                ? "border-primary bg-primary/5"
                                                : "border-neutral-200"
                                        )}
                                    >
                                        {finish}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-3">Leg Type</label>
                                <select
                                    value={config.legType}
                                    onChange={(e) => updateConfig({ legType: e.target.value })}
                                    className="w-full px-4 py-3 border border-neutral-200 bg-white focus:outline-none focus:border-primary"
                                >
                                    <option value="">Select leg type</option>
                                    <option value="Powder coated steel">Powder coated steel</option>
                                    <option value="Loop legs">Loop legs</option>
                                    <option value="Panel legs">Panel legs</option>
                                    <option value="Height adjustable">Height adjustable</option>
                                </select>
                            </div>
                        </div>
                        <button
                            onClick={() => setCurrentStep(6)}
                            className="bg-primary text-white px-6 py-3 hover:bg-primary/90 transition-colors"
                        >
                            Next Step
                        </button>
                    </div>
                )}

                {currentStep === 6 && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-light">Accessories & Add-ons</h2>
                        <div>
                            <label className="block text-sm font-medium mb-3">Select Accessories</label>
                            <div className="grid md:grid-cols-2 gap-3">
                                {accessoryOptions.map((accessory) => (
                                    <label key={accessory} className="flex items-center gap-3 p-4 border border-neutral-200 cursor-pointer hover:bg-neutral-50">
                                        <input
                                            type="checkbox"
                                            checked={config.accessories.includes(accessory)}
                                            onChange={(e) => {
                                                const newAccessories = e.target.checked
                                                    ? [...config.accessories, accessory]
                                                    : config.accessories.filter((a) => a !== accessory);
                                                updateConfig({ accessories: newAccessories });
                                            }}
                                            className="w-5 h-5"
                                        />
                                        <span className="text-sm">{accessory}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-3">Cable Management</label>
                            <select
                                value={config.cableManagement}
                                onChange={(e) => updateConfig({ cableManagement: e.target.value })}
                                className="w-full px-4 py-3 border border-neutral-200 bg-white focus:outline-none focus:border-primary"
                            >
                                <option value="">Select option</option>
                                <option value="Tray only">Tray only</option>
                                <option value="Tray + grommet">Tray + grommet</option>
                                <option value="Spine raceway">Spine raceway</option>
                                <option value="Full under desk trunking">Full under desk trunking</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation - Always visible */}
            <div className="flex items-center justify-between gap-4 pt-8 border-t border-neutral-200">
                <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="px-8 py-3 border-2 border-neutral-300 text-neutral-700 font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-50 hover:border-neutral-400 transition-all"
                >
                    Back
                </button>
                
                <div className="flex items-center gap-3">
                    {currentStep < steps.length - 1 && (
                        <button
                            onClick={() => setCurrentStep(currentStep + 1)}
                            className="px-8 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
                        >
                            {steps[currentStep].complete ? 'Next Step' : 'Skip'}
                        </button>
                    )}
                    {currentStep === steps.length - 1 && (
                        <button
                            onClick={() => {
                                // Scroll to summary panel
                                document.querySelector('.summary-panel')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
                        >
                            View Summary
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
