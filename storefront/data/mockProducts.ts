import { Product } from '@/types/product';

export const mockProducts: Product[] = [
    {
        // Core Identity
        productId: 'PROD-001',
        sku: 'SKU-IND-VALVE-001',
        name: 'Industrial Ball Valve - Heavy Duty',
        brand: 'FlowMaster Pro',
        category: 'Industrial Equipment',
        subCategory: 'Valves & Fittings',
        description: 'Heavy-duty industrial ball valve designed for high-pressure applications. Features a reinforced stainless steel body with PTFE seals for superior chemical resistance. Ideal for oil, gas, and petrochemical industries.',
        unitOfMeasure: 'Piece',
        intendedUse: 'Flow control in industrial pipelines, suitable for corrosive and high-temperature environments',

        // Specifications
        specifications: {
            material: 'Stainless Steel 316L',
            dimensions: '150mm x 100mm x 80mm',
            weight: '2.5 kg',
            color: 'Silver/Metallic',
            capacity: '1000 PSI max pressure',
            grade: 'Industrial Grade A',
            shelfLife: '10 years',
            countryOfOrigin: 'India',
        },

        // Packaging
        packaging: {
            packagingType: 'Individual Box',
            packSize: 'Single Unit',
            netQuantity: '1 Piece',
            grossWeight: '3.2 kg',
            packagingMaterial: 'Corrugated Cardboard with Foam Insert',
            cartonSize: '200mm x 150mm x 120mm',
            unitsPerCarton: 6,
            barcode: '8901234567890',
        },

        // Variants
        variants: [
            {
                variantId: 'VAR-001-A',
                variantName: '1 Inch Valve',
                variantType: 'Size',
                variantValue: '1 inch',
                variantSKU: 'SKU-IND-VALVE-001-1IN',
                variantStatus: 'active',
            },
            {
                variantId: 'VAR-001-B',
                variantName: '2 Inch Valve',
                variantType: 'Size',
                variantValue: '2 inch',
                variantSKU: 'SKU-IND-VALVE-001-2IN',
                variantStatus: 'active',
            },
            {
                variantId: 'VAR-001-C',
                variantName: '3 Inch Valve',
                variantType: 'Size',
                variantValue: '3 inch',
                variantSKU: 'SKU-IND-VALVE-001-3IN',
                variantStatus: 'inactive',
            },
        ],

        // Additional Info
        additionalInfo: {
            manufacturerName: 'FlowMaster Industries Pvt. Ltd.',
            manufacturerAddress: 'Plot 45, Industrial Area Phase II, Faridabad, Haryana 121003, India',
            regulatoryDetails: 'ISO 9001:2015 Certified, API 6D Compliant, CE Marked',
            storageInstructions: 'Store in a dry, cool place. Avoid exposure to direct sunlight and moisture.',
            handlingInstructions: 'Use appropriate lifting equipment for cartons. Do not drop or subject to impact.',
            warranty: '5 years manufacturer warranty against defects',
            safetyWarnings: 'Ensure system is depressurized before installation. Use proper PPE during handling.',
            notes: 'Custom sizes available on request. Minimum order quantity: 10 units for custom orders.',
        },

        // Digital Assets
        digitalAssets: {
            primaryImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
            secondaryImages: [
                'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
                'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
            ],
            packagingImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
            labelImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800',
            datasheet: '/documents/valve-datasheet.pdf',
            certificates: ['/documents/iso-certificate.pdf', '/documents/ce-certificate.pdf'],
            videoUrl: 'https://www.youtube.com/watch?v=example1',
        },
    },
    {
        // Core Identity
        productId: 'PROD-002',
        sku: 'SKU-CHEM-PUMP-002',
        name: 'Chemical Transfer Pump - Corrosion Resistant',
        brand: 'ChemFlow Solutions',
        category: 'Industrial Equipment',
        subCategory: 'Pumps & Motors',
        description: 'Self-priming chemical transfer pump with advanced corrosion-resistant construction. Features magnetic drive technology for leak-free operation. Perfect for handling acids, alkalis, and solvents.',
        unitOfMeasure: 'Piece',
        intendedUse: 'Transfer of corrosive chemicals in manufacturing plants, laboratories, and water treatment facilities',

        // Specifications
        specifications: {
            material: 'Polypropylene (PP) with PVDF Impeller',
            dimensions: '450mm x 300mm x 350mm',
            weight: '15 kg',
            color: 'Grey/Blue',
            capacity: '200 L/min max flow rate',
            grade: 'Chemical Grade - Class B',
            shelfLife: '15 years',
            countryOfOrigin: 'Germany',
        },

        // Packaging
        packaging: {
            packagingType: 'Wooden Crate',
            packSize: 'Single Unit',
            netQuantity: '1 Piece',
            grossWeight: '22 kg',
            packagingMaterial: 'Heat-treated Wood with Plastic Wrap',
            cartonSize: '550mm x 400mm x 450mm',
            unitsPerCarton: 1,
            barcode: '4029876543210',
        },

        // Variants
        variants: [
            {
                variantId: 'VAR-002-A',
                variantName: 'Standard Motor',
                variantType: 'Motor Type',
                variantValue: '1.5 HP',
                variantSKU: 'SKU-CHEM-PUMP-002-1.5HP',
                variantStatus: 'active',
            },
            {
                variantId: 'VAR-002-B',
                variantName: 'High Power Motor',
                variantType: 'Motor Type',
                variantValue: '3 HP',
                variantSKU: 'SKU-CHEM-PUMP-002-3HP',
                variantStatus: 'active',
            },
        ],

        // Additional Info
        additionalInfo: {
            manufacturerName: 'ChemFlow GmbH',
            manufacturerAddress: 'Industriestraße 42, 68199 Mannheim, Germany',
            regulatoryDetails: 'ATEX Certified, FDA Compliant for Food-Grade Applications',
            storageInstructions: 'Store horizontally in original packaging. Temperature range: -20°C to +50°C',
            handlingInstructions: 'Two-person lift required. Use forklift for pallet handling.',
            warranty: '3 years comprehensive warranty',
            safetyWarnings: 'Do not run pump dry. Ensure proper grounding before operation.',
            notes: 'Extended warranty available. Spare parts kit recommended for continuous operation.',
        },

        // Digital Assets
        digitalAssets: {
            primaryImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800',
            secondaryImages: [
                'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800',
            ],
            packagingImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800',
            labelImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800',
            datasheet: '/documents/pump-datasheet.pdf',
            certificates: ['/documents/atex-certificate.pdf'],
            videoUrl: 'https://www.youtube.com/watch?v=example2',
        },
    },
    {
        // Core Identity
        productId: 'PROD-003',
        sku: 'SKU-ELEC-PANEL-003',
        name: 'Industrial Control Panel - PLC Based',
        brand: 'AutoControl Systems',
        category: 'Electrical & Automation',
        subCategory: 'Control Panels',
        description: 'Fully integrated PLC-based control panel for industrial automation. Features touch screen HMI, multiple I/O modules, and built-in Ethernet connectivity. Pre-programmed for common industrial processes.',
        unitOfMeasure: 'Piece',
        intendedUse: 'Automation control for manufacturing lines, HVAC systems, and process industries',

        // Specifications
        specifications: {
            material: 'Powder Coated Mild Steel Enclosure',
            dimensions: '800mm x 600mm x 250mm',
            weight: '45 kg',
            color: 'RAL 7035 Light Grey',
            capacity: '32 Digital I/O, 8 Analog I/O',
            grade: 'IP55 Rated',
            shelfLife: '20 years',
            countryOfOrigin: 'Japan',
        },

        // Packaging
        packaging: {
            packagingType: 'Wooden Pallet with Shrink Wrap',
            packSize: 'Single Unit',
            netQuantity: '1 Piece',
            grossWeight: '58 kg',
            packagingMaterial: 'ISPM-15 Certified Wood Pallet',
            cartonSize: '900mm x 700mm x 400mm',
            unitsPerCarton: 1,
            barcode: '4512345678901',
        },

        // Variants
        variants: [
            {
                variantId: 'VAR-003-A',
                variantName: 'Basic Configuration',
                variantType: 'Configuration',
                variantValue: '16 I/O',
                variantSKU: 'SKU-ELEC-PANEL-003-16IO',
                variantStatus: 'active',
            },
            {
                variantId: 'VAR-003-B',
                variantName: 'Extended Configuration',
                variantType: 'Configuration',
                variantValue: '32 I/O',
                variantSKU: 'SKU-ELEC-PANEL-003-32IO',
                variantStatus: 'active',
            },
            {
                variantId: 'VAR-003-C',
                variantName: 'Legacy Model',
                variantType: 'Configuration',
                variantValue: '8 I/O',
                variantSKU: 'SKU-ELEC-PANEL-003-8IO',
                variantStatus: 'discontinued',
            },
        ],

        // Additional Info
        additionalInfo: {
            manufacturerName: 'AutoControl Systems Ltd.',
            manufacturerAddress: '2-14-5 Nihonbashi, Chuo-ku, Tokyo 103-0027, Japan',
            regulatoryDetails: 'UL Listed, CE Marked, RoHS Compliant',
            storageInstructions: 'Store in climate-controlled environment. Humidity < 85% RH',
            handlingInstructions: 'Handle with care - sensitive electronic equipment. Use anti-static precautions.',
            warranty: '2 years parts and labor, extendable to 5 years',
            safetyWarnings: 'Installation by certified electrician only. Disconnect power before maintenance.',
            notes: 'Custom programming available. Remote monitoring subscription optional.',
        },

        // Digital Assets
        digitalAssets: {
            primaryImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
            secondaryImages: [
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
                'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800',
            ],
            packagingImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
            labelImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800',
            datasheet: '/documents/panel-datasheet.pdf',
            certificates: ['/documents/ul-certificate.pdf', '/documents/ce-certificate.pdf', '/documents/rohs-certificate.pdf'],
            videoUrl: 'https://www.youtube.com/watch?v=example3',
        },
    },
    {
        // Core Identity
        productId: 'PROD-004',
        sku: 'SKU-SAFE-GEAR-004',
        name: 'Industrial Safety Helmet - Advanced Protection',
        brand: 'SafeGuard Pro',
        category: 'Safety Equipment',
        subCategory: 'Head Protection',
        description: 'Advanced industrial safety helmet with integrated face shield and hearing protection. Features ventilated design with adjustable suspension system. Meets highest international safety standards.',
        unitOfMeasure: 'Piece',
        intendedUse: 'Personal protective equipment for construction, mining, and manufacturing workers',

        // Specifications
        specifications: {
            material: 'High-Density Polyethylene (HDPE)',
            dimensions: '320mm x 240mm x 180mm',
            weight: '0.45 kg',
            color: 'Yellow/Orange/White (Multiple Options)',
            capacity: 'Head circumference: 52-64 cm',
            grade: 'Type I, Class E',
            shelfLife: '5 years from manufacture date',
            countryOfOrigin: 'USA',
        },

        // Packaging
        packaging: {
            packagingType: 'Individual Poly Bag in Master Carton',
            packSize: 'Single Unit',
            netQuantity: '1 Piece',
            grossWeight: '0.6 kg',
            packagingMaterial: 'LDPE Bag with Cardboard Dividers',
            cartonSize: '650mm x 500mm x 400mm',
            unitsPerCarton: 20,
            barcode: '0012345678905',
        },

        // Variants
        variants: [
            {
                variantId: 'VAR-004-A',
                variantName: 'Standard Yellow',
                variantType: 'Color',
                variantValue: 'Safety Yellow',
                variantSKU: 'SKU-SAFE-GEAR-004-YEL',
                variantStatus: 'active',
            },
            {
                variantId: 'VAR-004-B',
                variantName: 'Hi-Vis Orange',
                variantType: 'Color',
                variantValue: 'Hi-Visibility Orange',
                variantSKU: 'SKU-SAFE-GEAR-004-ORG',
                variantStatus: 'active',
            },
            {
                variantId: 'VAR-004-C',
                variantName: 'Classic White',
                variantType: 'Color',
                variantValue: 'White',
                variantSKU: 'SKU-SAFE-GEAR-004-WHT',
                variantStatus: 'active',
            },
        ],

        // Additional Info
        additionalInfo: {
            manufacturerName: 'SafeGuard Industries Inc.',
            manufacturerAddress: '1500 Industrial Parkway, Cincinnati, OH 45215, USA',
            regulatoryDetails: 'ANSI/ISEA Z89.1 Certified, CSA Z94.1 Compliant, EN 397 Approved',
            storageInstructions: 'Store away from direct sunlight and chemicals. Check before each use.',
            handlingInstructions: 'Replace immediately if cracked, dented, or after significant impact.',
            warranty: '1 year manufacturer defect warranty',
            safetyWarnings: 'Not for use in electrical work exceeding 20,000V. Replace after 5 years.',
            notes: 'Custom logo printing available for bulk orders. Accessories sold separately.',
        },

        // Digital Assets
        digitalAssets: {
            primaryImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
            secondaryImages: [
                'https://images.unsplash.com/photo-1578874691223-64558a3ca096?w=800',
            ],
            packagingImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
            labelImage: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800',
            datasheet: '/documents/helmet-datasheet.pdf',
            certificates: ['/documents/ansi-certificate.pdf', '/documents/csa-certificate.pdf'],
            videoUrl: 'https://www.youtube.com/watch?v=example4',
        },
    },
];

// Helper function to get a single product by ID
export const getProductById = (id: string): Product | undefined => {
    return mockProducts.find((product) => product.productId === id);
};

// Helper function to simulate API delay
export const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
