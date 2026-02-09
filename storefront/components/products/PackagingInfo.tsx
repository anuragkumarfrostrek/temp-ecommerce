import { ProductPackaging } from '@/types/product';

interface PackagingInfoProps {
    packaging: ProductPackaging;
}

export function PackagingInfo({ packaging }: PackagingInfoProps) {
    const packagingFields = [
        { label: 'Packaging Type', value: packaging.packagingType },
        { label: 'Pack Size', value: packaging.packSize },
        { label: 'Net Quantity', value: packaging.netQuantity },
        { label: 'Gross Weight', value: packaging.grossWeight },
        { label: 'Packaging Material', value: packaging.packagingMaterial },
        { label: 'Carton Size', value: packaging.cartonSize },
        { label: 'Units Per Carton', value: packaging.unitsPerCarton.toString() },
        { label: 'Barcode', value: packaging.barcode },
    ];

    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Packaging Information
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
                {packagingFields.map((field) => (
                    <div
                        key={field.label}
                        className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50"
                    >
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{field.label}</p>
                        <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-100">{field.value}</p>
                    </div>
                ))}
            </div>

            {/* Barcode Visual */}
            <div className="mt-6 rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-4 text-center dark:border-zinc-700 dark:bg-zinc-800/30">
                <div className="mb-2 flex items-center justify-center">
                    <svg className="h-8 w-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                    </svg>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Barcode</p>
                <p className="mt-1 font-mono text-lg font-bold tracking-wider text-zinc-900 dark:text-zinc-100">
                    {packaging.barcode}
                </p>
            </div>
        </div>
    );
}
