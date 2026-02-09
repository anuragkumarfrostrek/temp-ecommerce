interface LoadingStateProps {
    message?: string;
    type?: 'card' | 'detail' | 'table';
}

export function LoadingState({ message = 'Loading...', type = 'card' }: LoadingStateProps) {
    if (type === 'card') {
        return (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="animate-pulse rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
                    >
                        <div className="aspect-square rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                        <div className="mt-4 space-y-3">
                            <div className="h-4 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
                            <div className="h-3 w-1/2 rounded bg-zinc-200 dark:bg-zinc-800" />
                            <div className="h-3 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === 'detail') {
        return (
            <div className="animate-pulse space-y-8">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="aspect-square rounded-xl bg-zinc-200 dark:bg-zinc-800" />
                    <div className="space-y-4">
                        <div className="h-8 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
                        <div className="h-4 w-1/2 rounded bg-zinc-200 dark:bg-zinc-800" />
                        <div className="h-4 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
                        <div className="mt-6 h-24 rounded bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-48 rounded-xl bg-zinc-200 dark:bg-zinc-800" />
                    ))}
                </div>
            </div>
        );
    }

    if (type === 'table') {
        return (
            <div className="animate-pulse space-y-3">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex gap-4">
                        <div className="h-6 w-1/3 rounded bg-zinc-200 dark:bg-zinc-800" />
                        <div className="h-6 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-16">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-200 border-t-indigo-600 dark:border-zinc-700 dark:border-t-indigo-400" />
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{message}</p>
        </div>
    );
}
