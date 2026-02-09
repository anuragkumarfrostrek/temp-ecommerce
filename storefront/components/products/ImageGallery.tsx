'use client';

import { useState } from 'react';

interface DigitalAssets {
    primaryImage?: string;
    secondaryImages?: string[];
    packagingImage?: string;
    labelImage?: string;
    datasheet?: string;
    certificates?: string[];
    videoUrl?: string;
}

interface ImageGalleryProps {
    assets: DigitalAssets;
    productName: string;
}

export function ImageGallery({ assets, productName }: ImageGalleryProps) {
    // Collect all images
    const images: { src: string; label: string }[] = [];

    if (assets.primaryImage) {
        images.push({ src: assets.primaryImage, label: 'Primary' });
    }
    if (assets.secondaryImages) {
        assets.secondaryImages.forEach((img, i) => {
            images.push({ src: img, label: `Secondary ${i + 1}` });
        });
    }
    if (assets.packagingImage) {
        images.push({ src: assets.packagingImage, label: 'Packaging' });
    }
    if (assets.labelImage) {
        images.push({ src: assets.labelImage, label: 'Label' });
    }

    const [selectedIndex, setSelectedIndex] = useState(0);
    const selectedImage = images[selectedIndex];

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-emerald-50 to-green-50 dark:border-zinc-800 dark:from-emerald-950/20 dark:to-green-950/10">
                {selectedImage ? (
                    <img
                        src={selectedImage.src}
                        alt={`${productName} - ${selectedImage.label}`}
                        className="h-full w-full object-contain p-4"
                    />
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center">
                        <svg className="h-24 w-24 text-emerald-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="mt-4 text-lg font-medium text-emerald-600/80 dark:text-emerald-400/80">
                            No images available
                        </p>
                    </div>
                )}

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={() => setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-600 shadow-lg transition-all hover:bg-emerald-50 hover:text-emerald-600 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-emerald-950 dark:hover:text-emerald-400"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-600 shadow-lg transition-all hover:bg-emerald-50 hover:text-emerald-600 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:bg-emerald-950 dark:hover:text-emerald-400"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 shadow backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-300">
                        {selectedIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${index === selectedIndex
                                    ? 'border-emerald-500 ring-2 ring-emerald-500/30'
                                    : 'border-zinc-200 hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-700'
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={img.label}
                                className="h-full w-full object-cover"
                            />
                            <span className="absolute bottom-0 left-0 right-0 bg-black/60 px-1 py-0.5 text-center text-[10px] font-medium text-white">
                                {img.label}
                            </span>
                        </button>
                    ))}
                </div>
            )}

            {/* Digital Assets Links */}
            <div className="flex flex-wrap gap-3">
                {assets.datasheet && (
                    <a
                        href={assets.datasheet}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Datasheet
                    </a>
                )}
                {assets.videoUrl && (
                    <a
                        href={assets.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Video
                    </a>
                )}
                {assets.certificates && assets.certificates.length > 0 && (
                    <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        {assets.certificates.length} Certificate{assets.certificates.length > 1 ? 's' : ''}
                    </div>
                )}
            </div>
        </div>
    );
}
