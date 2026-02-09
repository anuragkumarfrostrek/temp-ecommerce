// Product Core Identity
export interface ProductCoreIdentity {
    productId: string;
    sku: string;
    name: string;
    brand: string;
    category: string;
    subCategory: string;
    description: string;
    unitOfMeasure: string;
    intendedUse: string;
}

// Product Specifications
export interface ProductSpecifications {
    material: string;
    dimensions: string;
    weight: string;
    color: string;
    capacity: string;
    grade: string;
    shelfLife: string;
    countryOfOrigin: string;
}

// Product Packaging
export interface ProductPackaging {
    packagingType: string;
    packSize: string;
    netQuantity: string;
    grossWeight: string;
    packagingMaterial: string;
    cartonSize: string;
    unitsPerCarton: number;
    barcode: string;
}

// Product Variant
export interface ProductVariant {
    variantId: string;
    variantName: string;
    variantType: string;
    variantValue: string;
    variantSKU: string;
    variantStatus: 'active' | 'inactive' | 'discontinued';
}

// Product Additional Info
export interface ProductAdditionalInfo {
    manufacturerName: string;
    manufacturerAddress: string;
    regulatoryDetails: string;
    storageInstructions: string;
    handlingInstructions: string;
    warranty: string;
    safetyWarnings: string;
    notes: string;
}

// Product Digital Assets
export interface ProductDigitalAssets {
    primaryImage: string;
    secondaryImages: string[];
    packagingImage: string;
    labelImage: string;
    datasheet: string;
    certificates: string[];
    videoUrl: string;
}

// Combined Product Interface
export interface Product {
    // Core Identity
    productId: string;
    sku: string;
    name: string;
    brand: string;
    category: string;
    subCategory: string;
    description: string;
    unitOfMeasure: string;
    intendedUse: string;

    // Specifications
    specifications: ProductSpecifications;

    // Packaging
    packaging: ProductPackaging;

    // Variants
    variants: ProductVariant[];

    // Additional Info
    additionalInfo: ProductAdditionalInfo;

    // Digital Assets
    digitalAssets: ProductDigitalAssets;
}

// API Response Types
export interface ProductsResponse {
    data: Product[];
    total: number;
    page: number;
    limit: number;
}

export interface ProductResponse {
    data: Product;
}

// Hook Return Types
export interface UseProductsReturn {
    data: Product[] | null;
    loading: boolean;
    error: Error | null;
    refetch: () => void;
}

export interface UseProductReturn {
    data: Product | null;
    loading: boolean;
    error: Error | null;
    refetch: () => void;
}
