'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export function CartDrawer() {
    const { items, isOpen, closeCart, removeItem, updateQuantity, total, count, clearAll } = useCart();

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={closeCart}
            />

            {/* Drawer */}
            <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl dark:bg-zinc-900">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                            <svg className="h-5 w-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Your Cart</h2>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">{count} item{count !== 1 ? 's' : ''}</p>
                        </div>
                    </div>
                    <button
                        onClick={closeCart}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Cart Content */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                                <svg className="h-10 w-10 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Your cart is empty</h3>
                            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                Add some products to get started
                            </p>
                            <Link
                                href="/products"
                                onClick={closeCart}
                                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
                            >
                                Browse Products
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <div
                                    key={`${item.product._id}-${item.selectedVariant || index}`}
                                    className="flex gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50"
                                >
                                    {/* Product Image */}
                                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-700">
                                        {item.product.digitalAssets?.primaryImage ? (
                                            <Image
                                                src={item.product.digitalAssets.primaryImage}
                                                alt={item.product.name}
                                                fill
                                                className="object-cover"
                                                sizes="80px"
                                            />
                                        ) : (
                                            <div className="flex h-full w-full items-center justify-center">
                                                <svg className="h-8 w-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex flex-1 flex-col">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.product.name}</h4>
                                                {item.selectedVariant && (
                                                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.selectedVariant}</p>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.product._id, item.selectedVariant)}
                                                className="text-zinc-400 transition-colors hover:text-red-500"
                                            >
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="mt-auto flex items-center justify-between pt-2">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-700">
                                                <button
                                                    onClick={() => updateQuantity(item.product._id, item.quantity - 1, item.selectedVariant)}
                                                    className="flex h-8 w-8 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                                                >
                                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                                    </svg>
                                                </button>
                                                <span className="w-8 text-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.product._id, item.quantity + 1, item.selectedVariant)}
                                                    className="flex h-8 w-8 items-center justify-center text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                                                >
                                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                                                ${(item.product.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-zinc-200 px-6 py-4 dark:border-zinc-800">
                        {/* Subtotal */}
                        <div className="mb-4 flex items-center justify-between">
                            <span className="text-lg font-medium text-zinc-600 dark:text-zinc-400">Subtotal</span>
                            <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">${total.toFixed(2)}</span>
                        </div>

                        {/* Actions */}
                        <div className="space-y-3">
                            <button className="w-full rounded-xl bg-emerald-600 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-500/40">
                                Proceed to Checkout
                            </button>
                            <button
                                onClick={clearAll}
                                className="w-full rounded-xl border border-zinc-300 py-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
