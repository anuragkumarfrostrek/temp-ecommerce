interface EmptyStateProps {
    title?: string;
    message?: string;
    icon?: 'products' | 'search' | 'cart';
    action?: {
        label: string;
        onClick: () => void;
    };
}

export function EmptyState({
    title = 'No data found',
    message = 'There are no items to display at the moment.',
    icon = 'products',
    action,
}: EmptyStateProps) {
    const renderIcon = () => {
        switch (icon) {
            case 'products':
                return (
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                    </svg>
                );
            case 'search':
                return (
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                );
            case 'cart':
                return (
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 px-6 py-16 dark:border-zinc-800 dark:bg-zinc-900/50">
            {/* Icon */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                {renderIcon()}
            </div>

            {/* Message */}
            <h3 className="mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">{title}</h3>
            <p className="mt-2 max-w-md text-center text-sm text-zinc-600 dark:text-zinc-400">{message}</p>

            {/* Action Button */}
            {action && (
                <button
                    onClick={action.onClick}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:hover:bg-indigo-600"
                >
                    {action.label}
                </button>
            )}
        </div>
    );
}
