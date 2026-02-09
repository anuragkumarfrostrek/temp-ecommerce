import { ProductAdditionalInfo } from '@/types/product';

interface AdditionalInfoProps {
    additionalInfo: ProductAdditionalInfo;
}

export function AdditionalInfo({ additionalInfo }: AdditionalInfoProps) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Additional Information
            </h3>

            <div className="space-y-6">
                {/* Manufacturer Details */}
                <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Manufacturer Details
                    </h4>
                    <div className="space-y-2">
                        <div>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">Manufacturer Name</span>
                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{additionalInfo.manufacturerName}</p>
                        </div>
                        <div>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">Address</span>
                            <p className="text-sm text-zinc-700 dark:text-zinc-300">{additionalInfo.manufacturerAddress}</p>
                        </div>
                    </div>
                </div>

                {/* Regulatory Details */}
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Regulatory Details
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">{additionalInfo.regulatoryDetails}</p>
                </div>

                {/* Storage & Handling */}
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                        <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-300">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                            Storage Instructions
                        </h4>
                        <p className="text-sm text-amber-800 dark:text-amber-200">{additionalInfo.storageInstructions}</p>
                    </div>

                    <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
                        <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-purple-700 dark:text-purple-300">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                            Handling Instructions
                        </h4>
                        <p className="text-sm text-purple-800 dark:text-purple-200">{additionalInfo.handlingInstructions}</p>
                    </div>
                </div>

                {/* Warranty */}
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/30">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-700 dark:text-green-300">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Warranty
                    </h4>
                    <p className="text-sm text-green-800 dark:text-green-200">{additionalInfo.warranty}</p>
                </div>

                {/* Safety Warnings */}
                <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-700 dark:text-red-300">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Safety Warnings
                    </h4>
                    <p className="text-sm text-red-800 dark:text-red-200">{additionalInfo.safetyWarnings}</p>
                </div>

                {/* Notes */}
                <div className="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Notes
                    </h4>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">{additionalInfo.notes}</p>
                </div>
            </div>
        </div>
    );
}
