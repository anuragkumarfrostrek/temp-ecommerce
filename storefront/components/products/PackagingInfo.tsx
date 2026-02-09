interface Packaging {
    packagingType?: string;
    packSize?: string;
    netQuantity?: string;
    grossWeight?: string;
    packagingMaterial?: string;
    cartonSize?: string;
    unitsPerCarton?: number;
    barcode?: string;
}

interface PackagingInfoProps {
    packaging: Packaging;
}

export function PackagingInfo({ packaging }: PackagingInfoProps) {
    const fields = [
        { label: 'Packaging Type', value: packaging.packagingType },
        { label: 'Pack Size', value: packaging.packSize },
        { label: 'Net Quantity', value: packaging.netQuantity },
        { label: 'Gross Weight', value: packaging.grossWeight },
        { label: 'Packaging Material', value: packaging.packagingMaterial },
        { label: 'Carton Size', value: packaging.cartonSize },
        { label: 'Units Per Carton', value: packaging.unitsPerCarton },
        { label: 'Barcode', value: packaging.barcode, mono: true },
    ].filter(f => f.value !== undefined && f.value !== '');

    if (fields.length === 0) {
        return (
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">No packaging information available</p>
            </div>
        );
    }

    return (
        <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <div className="grid gap-4 p-5 sm:grid-cols-2">
                {fields.map((field) => (
                    <div key={field.label} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            {field.label}
                        </p>
                        <p className={`mt-1 font-semibold text-zinc-900 dark:text-zinc-100 ${field.mono ? 'font-mono text-sm' : ''}`}>
                            {field.value}
                        </p>
                    </div>
                ))}
            </div>

            {/* Barcode Visual */}
            {packaging.barcode && (
                <div className="border-t border-zinc-100 p-5 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h2M4 12h2m10 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Barcode
                            </p>
                            <p className="mt-0.5 font-mono text-lg font-semibold tracking-wider text-zinc-900 dark:text-zinc-100">
                                {packaging.barcode}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
