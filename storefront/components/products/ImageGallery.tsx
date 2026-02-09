'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ProductDigitalAssets } from '@/types/product';

interface ImageGalleryProps {
    assets: ProductDigitalAssets;
    productName: string;
}

type ImageType = 'primary' | 'secondary' | 'packaging' | 'label';

interface GalleryImage {
    src: string;
    type: ImageType;
    label: string;
}

export function ImageGallery({ assets, productName }: ImageGalleryProps) {
    // Build gallery images from all asset types
    const galleryImages: GalleryImage[] = [
        { src: assets.primaryImage, type: 'primary', label: 'Primary' },
        ...assets.secondaryImages.map((img, i) => ({
            src: img,
            type: 'secondary' as ImageType,
            label: `Secondary ${i + 1}`,
        })),
        ...(assets.packagingImage ? [{ src: assets.packagingImage, type: 'packaging' as ImageType, label: 'Packaging' }] : []),
        ...(assets.labelImage ? [{ src: assets.labelImage, type: 'label' as ImageType, label: 'Label' }] : []),
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedImage = galleryImages[selectedIndex];

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                <Image
                    src={selectedImage.src}
                    alt={`${productName} - ${selectedImage.label}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                />
                {/* Image Type Badge */}
                <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-300">
                        {selectedImage.label}
                    </span>
                </div>
                {/* Navigation Arrows */}
                {galleryImages.length > 1 && (
                    <>
                        <button
                            onClick={() => setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-110 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:bg-zinc-800"
                            aria-label="Previous image"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-md backdrop-blur-sm transition-all hover:bg-white hover:scale-110 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:bg-zinc-800"
                            aria-label="Next image"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails */}
            {galleryImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {galleryImages.map((image, index) => (
                        <button
                            key={`${image.type}-${index}`}
                            onClick={() => setSelectedIndex(index)}
                            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${selectedIndex === index
                                    ? 'border-indigo-500 ring-2 ring-indigo-200 dark:ring-indigo-800'
                                    : 'border-zinc-200 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500'
                                }`}
                            aria-label={`View ${image.label}`}
                        >
                            <Image
                                src={image.src}
                                alt={`${productName} thumbnail - ${image.label}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                            {/* Type indicator */}
                            <span className="absolute bottom-0 left-0 right-0 bg-black/60 px-1 py-0.5 text-center text-[10px] font-medium text-white">
                                {image.label}
                            </span>
                        </button>
                    ))}
                </div>
            )}

            {/* Digital Assets Links */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h4 className="mb-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Digital Assets</h4>
                <div className="flex flex-wrap gap-2">
                    {/* Datasheet */}
                    {assets.datasheet && (
                        <a
                            href={assets.datasheet}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-400"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Datasheet
                        </a>
                    )}

                    {/* Certificates */}
                    {assets.certificates.map((cert, index) => (
                        <a
                            key={index}
                            href={cert}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-green-50 hover:text-green-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-green-900/30 dark:hover:text-green-400"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            Certificate {index + 1}
                        </a>
                    ))}

                    {/* Video */}
                    {assets.videoUrl && (
                        <a
                            href={assets.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-red-50 hover:text-red-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-red-900/30 dark:hover:text-red-400"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Product Video
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
