'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Order, ShippingAddress } from '@/types';
import { CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function CheckoutPage() {
    const router = useRouter();
    const { items, totalPrice, clearCart } = useCart();
    const { isAuthenticated, addOrder, addAddress } = useAuth();
    const [step, setStep] = useState(1); // 1: Address, 2: Payment, 3: Confirmation
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [address, setAddress] = useState<ShippingAddress>({
        full_name: '',
        address_line: '',
        city: '',
        state: '',
        zip_code: '',
        country: 'Vietnam',
        phone: '',
    });

    const shippingCost = totalPrice > 500000 ? 0 : 50000;
    const grandTotal = totalPrice + shippingCost;

    if (items.length === 0 && !orderPlaced) {
        router.push('/cart');
        return null;
    }

    const handlePlaceOrder = () => {
        if (!address.full_name || !address.address_line || !address.city || !address.phone) {
            toast.error('Please fill in all required fields');
            return;
        }

        const order: Order = {
            id: `ORD-${Date.now()}`,
            items: [...items],
            total: grandTotal,
            status: 'confirmed',
            shipping_address: address,
            created_at: new Date().toISOString(),
        };

        addOrder(order);
        addAddress(address);
        clearCart();
        setOrderPlaced(true);
        setStep(3);
        toast.success('Order placed successfully!');
    };

    // Order Confirmation
    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-cream flex items-center justify-center">
                <div className="text-center max-w-md p-8">
                    <CheckCircle className="mx-auto h-20 w-20 text-green-600 mb-6" />
                    <h1 className="font-serif text-3xl font-bold text-charcoal">Order Confirmed!</h1>
                    <p className="mt-3 text-warm-gray">
                        Thank you for your order. We&apos;ll send you an email confirmation shortly.
                    </p>
                    <div className="mt-8 flex flex-col gap-3">
                        <Link
                            href="/account"
                            className="rounded-lg bg-burgundy py-3 text-sm font-semibold text-white hover:bg-burgundy-dark transition-colors"
                        >
                            View Order History
                        </Link>
                        <Link
                            href="/products"
                            className="rounded-lg border border-light-border py-3 text-sm font-medium text-charcoal hover:bg-white transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream">
            {/* Step Indicator */}
            <div className="border-b border-light-border bg-white py-6">
                <div className="mx-auto max-w-4xl flex items-center justify-center gap-8">
                    {['Cart', 'Address', 'Payment', 'Confirmation'].map((s, i) => (
                        <div key={s} className="flex items-center gap-2">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${i <= step ? 'bg-burgundy text-white' : 'bg-cream-dark text-warm-gray'
                                }`}>
                                {i + 1}
                            </div>
                            <span className={`text-sm font-medium hidden sm:inline ${i <= step ? 'text-burgundy' : 'text-warm-gray'}`}>
                                {s}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-4 py-10">
                {step === 1 && (
                    <div>
                        <h1 className="font-serif text-2xl font-bold text-charcoal mb-6">Shipping Address</h1>
                        <div className="rounded-xl border border-light-border bg-white p-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-charcoal mb-1">Full Name *</label>
                                    <input
                                        type="text"
                                        value={address.full_name}
                                        onChange={e => setAddress({ ...address, full_name: e.target.value })}
                                        className="w-full rounded-lg border border-light-border px-4 py-2.5 text-sm focus:border-burgundy focus:outline-none"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-charcoal mb-1">Address *</label>
                                    <input
                                        type="text"
                                        value={address.address_line}
                                        onChange={e => setAddress({ ...address, address_line: e.target.value })}
                                        className="w-full rounded-lg border border-light-border px-4 py-2.5 text-sm focus:border-burgundy focus:outline-none"
                                        placeholder="Street address"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal mb-1">City *</label>
                                    <input
                                        type="text"
                                        value={address.city}
                                        onChange={e => setAddress({ ...address, city: e.target.value })}
                                        className="w-full rounded-lg border border-light-border px-4 py-2.5 text-sm focus:border-burgundy focus:outline-none"
                                        placeholder="City"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal mb-1">State / Province</label>
                                    <input
                                        type="text"
                                        value={address.state}
                                        onChange={e => setAddress({ ...address, state: e.target.value })}
                                        className="w-full rounded-lg border border-light-border px-4 py-2.5 text-sm focus:border-burgundy focus:outline-none"
                                        placeholder="State"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal mb-1">ZIP Code</label>
                                    <input
                                        type="text"
                                        value={address.zip_code}
                                        onChange={e => setAddress({ ...address, zip_code: e.target.value })}
                                        className="w-full rounded-lg border border-light-border px-4 py-2.5 text-sm focus:border-burgundy focus:outline-none"
                                        placeholder="ZIP"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-charcoal mb-1">Phone *</label>
                                    <input
                                        type="tel"
                                        value={address.phone}
                                        onChange={e => setAddress({ ...address, phone: e.target.value })}
                                        className="w-full rounded-lg border border-light-border px-4 py-2.5 text-sm focus:border-burgundy focus:outline-none"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(2)}
                                className="mt-6 w-full rounded-lg bg-burgundy py-3 text-sm font-semibold text-white hover:bg-burgundy-dark transition-colors"
                            >
                                Continue to Payment
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h1 className="font-serif text-2xl font-bold text-charcoal mb-6">Payment</h1>
                        <div className="rounded-xl border border-light-border bg-white p-6">
                            <div className="space-y-4 mb-6">
                                <label className="flex items-center gap-3 rounded-lg border border-light-border p-4 cursor-pointer hover:border-burgundy transition-colors">
                                    <input type="radio" name="payment" defaultChecked className="accent-burgundy" />
                                    <span className="text-sm font-medium text-charcoal">Cash on Delivery (COD)</span>
                                </label>
                                <label className="flex items-center gap-3 rounded-lg border border-light-border p-4 cursor-pointer hover:border-burgundy transition-colors">
                                    <input type="radio" name="payment" className="accent-burgundy" />
                                    <span className="text-sm font-medium text-charcoal">Bank Transfer</span>
                                </label>
                            </div>

                            {/* Order Summary */}
                            <div className="border-t border-light-border pt-4 space-y-2 text-sm">
                                <div className="flex justify-between"><span className="text-warm-gray">Subtotal ({items.length} items)</span><span>{totalPrice.toLocaleString('vi-VN')}₫</span></div>
                                <div className="flex justify-between"><span className="text-warm-gray">Shipping</span><span>{shippingCost === 0 ? 'Free' : `${shippingCost.toLocaleString('vi-VN')}₫`}</span></div>
                                <div className="flex justify-between font-serif text-lg font-bold text-burgundy pt-2 border-t border-light-border mt-2">
                                    <span>Total</span><span>{grandTotal.toLocaleString('vi-VN')}₫</span>
                                </div>
                            </div>

                            <div className="mt-6 flex gap-3">
                                <button
                                    onClick={() => setStep(1)}
                                    className="rounded-lg border border-light-border px-6 py-3 text-sm font-medium text-charcoal hover:bg-cream transition-colors"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={handlePlaceOrder}
                                    className="flex-1 rounded-lg bg-burgundy py-3 text-sm font-semibold text-white hover:bg-burgundy-dark transition-colors"
                                >
                                    Place Order — {grandTotal.toLocaleString('vi-VN')}₫
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
