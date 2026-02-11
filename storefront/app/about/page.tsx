import { Award, Heart, Grape, Users, MapPin, Star } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-cream">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(45,41,38,0.55), rgba(45,41,38,0.75)),
              url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80')`,
                    }}
                />
                <div className="relative mx-auto max-w-4xl px-4 py-28 lg:py-40 text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-wine-gold-light font-medium mb-4">Our Story</p>
                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Nghệ Thuật <span className="text-wine-gold">Rượu Vang</span>
                    </h1>
                    <p className="mt-6 text-base sm:text-lg text-cream-dark/90 max-w-2xl mx-auto leading-relaxed">
                        From the lush highlands of Vietnam to your glass, every bottle tells a story of passion, heritage, and an unwavering commitment to excellence.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 px-4">
                <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-wine-gold font-medium mb-3">Our Mission</p>
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
                            Đưa Rượu Vang Việt Lên Bản Đồ Thế Giới
                        </h2>
                        <p className="mt-6 text-warm-gray leading-relaxed">
                            Thành lập năm 2015, KSP Wines bắt đầu từ một ước mơ đơn giản: tạo ra những chai rượu vang mang đậm bản sắc Việt Nam
                            nhưng đạt tiêu chuẩn quốc tế. Chúng tôi đã đi khắp các vùng đất từ Đà Lạt đến Ninh Thuận, tìm kiếm những giống nho
                            phù hợp nhất với khí hậu nhiệt đới.
                        </p>
                        <p className="mt-4 text-warm-gray leading-relaxed">
                            Qua hơn một thập kỷ, chúng tôi đã chứng minh rằng Việt Nam hoàn toàn có thể sản xuất những chai rượu vang
                            đẳng cấp, được công nhận bởi các chuyên gia hàng đầu thế giới.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { number: '10+', label: 'Years of Experience', icon: Star },
                            { number: '50+', label: 'Wine Varieties', icon: Grape },
                            { number: '15k+', label: 'Happy Customers', icon: Heart },
                            { number: '25+', label: 'International Awards', icon: Award },
                        ].map((stat, i) => (
                            <div key={i} className="rounded-2xl border border-light-border bg-white p-6 text-center transition-all hover:shadow-md">
                                <stat.icon className="mx-auto h-6 w-6 text-burgundy mb-2" />
                                <p className="font-serif text-3xl font-bold text-burgundy">{stat.number}</p>
                                <p className="mt-1 text-xs text-warm-gray">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 px-4 bg-white">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">Hành Trình Của Chúng Tôi</h2>
                        <p className="mt-3 text-warm-gray">Our journey through the years</p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { year: '2015', title: 'The Beginning', desc: 'KSP Wines was founded with a vision to create world-class Vietnamese wines.' },
                            { year: '2017', title: 'First Harvest', desc: 'Our first commercial harvest from Đà Lạt highlands, producing 5,000 bottles of our signature red.' },
                            { year: '2019', title: 'International Recognition', desc: 'Won our first Gold Medal at the International Wine Challenge, putting Vietnamese wine on the map.' },
                            { year: '2021', title: 'Expansion', desc: 'Expanded to 3 vineyards across Vietnam and launched our premium sparkling wine collection.' },
                            { year: '2024', title: 'Global Distribution', desc: 'Now available in 12 countries with partnerships across Southeast Asia and Europe.' },
                        ].map((event, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-20">
                                    <span className="font-serif text-xl font-bold text-burgundy">{event.year}</span>
                                </div>
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <div className="h-4 w-4 rounded-full bg-burgundy" />
                                    {i < 4 && <div className="w-0.5 h-16 bg-light-border" />}
                                </div>
                                <div className="pb-8">
                                    <h3 className="font-serif text-lg font-semibold text-charcoal">{event.title}</h3>
                                    <p className="mt-1 text-sm text-warm-gray leading-relaxed">{event.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 px-4">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">Đội Ngũ Của Chúng Tôi</h2>
                        <p className="mt-3 text-warm-gray">The passionate people behind every bottle</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { name: 'Nguyễn Văn Minh', role: 'Founder & CEO', emoji: '👨‍💼' },
                            { name: 'Trần Thị Hoa', role: 'Head Winemaker', emoji: '👩‍🔬' },
                            { name: 'Lê Hoàng Nam', role: 'Vineyard Director', emoji: '👨‍🌾' },
                            { name: 'Phạm Thu Hà', role: 'Brand Director', emoji: '👩‍💻' },
                        ].map((member, i) => (
                            <div key={i} className="rounded-2xl border border-light-border bg-white p-6 text-center transition-all hover:shadow-md hover:-translate-y-1">
                                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-cream-dark flex items-center justify-center text-5xl">
                                    {member.emoji}
                                </div>
                                <h3 className="font-serif text-base font-semibold text-charcoal">{member.name}</h3>
                                <p className="mt-0.5 text-xs text-warm-gray">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 wine-gradient">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-serif text-3xl font-bold text-white">Trải Nghiệm Rượu Vang Việt</h2>
                    <p className="mt-3 text-cream-dark/80 text-sm">Discover our curated collection and experience the taste of Vietnam</p>
                    <Link
                        href="/products"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-wine-gold px-8 py-3.5 text-sm font-semibold text-charcoal hover:bg-wine-gold-light transition-colors"
                    >
                        Explore Our Wines
                    </Link>
                </div>
            </section>
        </div>
    );
}
