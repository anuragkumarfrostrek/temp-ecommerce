import { Product } from '@/lib/api';
import { ProductCard } from './ProductCard';
import { LoadingState } from '@/components/ui/LoadingState';
import { ErrorState } from '@/components/ui/ErrorState';
import { EmptyState } from '@/components/ui/EmptyState';

interface ProductGridProps {
    products: Product[] | null;
    loading?: boolean;
    error?: Error | null;
    onRetry?: () => void;
}

export function ProductGrid({ products, loading, error, onRetry }: ProductGridProps) {
    // Loading State
    if (loading) {
        return <LoadingState type="card" />;
    }

    // Error State
    if (error) {
        return (
            <ErrorState
                title="Failed to load products"
                message={error.message || 'Could not connect to the server. Make sure the backend is running.'}
                onRetry={onRetry}
            />
        );
    }

    // Empty State
    if (!products || products.length === 0) {
        return (
            <EmptyState
                title="No products found"
                message="There are no products available yet. Add some products through the backend API."
                icon="products"
            />
        );
    }

    // Products Grid
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
}
