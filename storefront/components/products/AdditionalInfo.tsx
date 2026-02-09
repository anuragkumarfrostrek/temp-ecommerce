interface AdditionalInfoData {
    manufacturerName?: string;
    manufacturerAddress?: string;
    regulatoryDetails?: string;
    storageInstructions?: string;
    handlingInstructions?: string;
    warranty?: string;
    safetyWarnings?: string;
    notes?: string;
}

interface AdditionalInfoProps {
    additionalInfo: AdditionalInfoData;
}

interface InfoSection {
    title: string;
    items: { label: string; value: string | undefined }[];
    color: string;
    icon: React.ReactNode;
}

export function AdditionalInfo({ additionalInfo }: AdditionalInfoProps) {
    const sections: InfoSection[] = [
        {
            title: 'Manufacturer',
            color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400',
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            items: [
                { label: 'Manufacturer Name', value: additionalInfo.manufacturerName },
                { label: 'Manufacturer Address', value: additionalInfo.manufacturerAddress },
            ],
        },
        {
            title: 'Regulatory',
            color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400',
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            items: [
                { label: 'Regulatory Details', value: additionalInfo.regulatoryDetails },
            ],
        },
        {
            title: 'Storage & Handling',
            color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400',
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            items: [
                { label: 'Storage Instructions', value: additionalInfo.storageInstructions },
                { label: 'Handling Instructions', value: additionalInfo.handlingInstructions },
            ],
        },
        {
            title: 'Warranty',
            color: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400',
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            items: [
                { label: 'Warranty', value: additionalInfo.warranty },
            ],
        },
        {
            title: 'Safety',
            color: 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400',
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            items: [
                { label: 'Safety Warnings', value: additionalInfo.safetyWarnings },
            ],
        },
        {
            title: 'Notes',
            color: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
            items: [
                { label: 'Notes', value: additionalInfo.notes },
            ],
        },
    ];

    // Filter sections that have at least one non-empty item
    const filledSections = sections.filter(section =>
        section.items.some(item => item.value !== undefined && item.value !== '')
    );

    if (filledSections.length === 0) {
        return (
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">No additional information available</p>
            </div>
        );
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filledSections.map((section) => (
                <div
                    key={section.title}
                    className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
                >
                    <div className="mb-4 flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${section.color}`}>
                            {section.icon}
                        </div>
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{section.title}</h4>
                    </div>

                    <div className="space-y-3">
                        {section.items
                            .filter(item => item.value !== undefined && item.value !== '')
                            .map((item) => (
                                <div key={item.label}>
                                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                        {item.label}
                                    </p>
                                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{item.value}</p>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
