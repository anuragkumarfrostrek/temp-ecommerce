import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-green-950/20" />

        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-900/20" />
        <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-green-200/50 blur-3xl dark:bg-green-900/20" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 backdrop-blur-sm dark:border-emerald-800 dark:bg-zinc-900/80">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Live API Connected</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl lg:text-7xl">
              Premium{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Wine Collection
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-400">
              Discover our curated selection of the finest wines from renowned vineyards around the world.
              Each bottle tells a story of tradition, craftsmanship, and exceptional taste.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-500/40"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Browse Collection
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-8 py-4 text-lg font-semibold text-zinc-700 transition-all hover:border-emerald-300 hover:bg-emerald-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/30"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="border-y border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Live API Tester
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Real Backend Integration
          </h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Real API Calls</h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Connected to backend at localhost:5000. All product data is fetched live from MongoDB.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Full Schema Support</h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                UI designed to display all 6 product schema sections: Identity, Specs, Packaging, Variants, Info, Assets.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Cart Functionality</h4>
              <p className="text-zinc-600 dark:text-zinc-400">
                Full shopping cart with localStorage persistence. Add items, adjust quantities, checkout ready.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* API Info Section */}
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 p-8 dark:border-emerald-800 dark:from-emerald-950/30 dark:to-green-950/20 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">API Endpoints</h3>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  This storefront connects to the backend API for live data. Add products through the backend to see them here.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    { method: 'GET', endpoint: '/api/products', desc: 'List all products' },
                    { method: 'GET', endpoint: '/api/products/:id', desc: 'Get product details' },
                    { method: 'POST', endpoint: '/api/products', desc: 'Create product' },
                    { method: 'PATCH', endpoint: '/api/products/:id', desc: 'Update product' },
                    { method: 'DELETE', endpoint: '/api/products/:id', desc: 'Delete product' },
                  ].map((api) => (
                    <div key={api.endpoint} className="flex items-center gap-4 rounded-lg bg-white/60 px-4 py-3 dark:bg-zinc-900/60">
                      <span className={`rounded px-2 py-0.5 text-xs font-bold ${api.method === 'GET' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400' :
                          api.method === 'POST' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400' :
                            api.method === 'PATCH' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400' :
                              'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400'
                        }`}>
                        {api.method}
                      </span>
                      <code className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{api.endpoint}</code>
                      <span className="ml-auto text-xs text-zinc-500 dark:text-zinc-400">{api.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Link
                  href="/products"
                  className="group flex flex-col items-center rounded-2xl border border-emerald-300 bg-white p-8 shadow-lg transition-all hover:border-emerald-500 hover:shadow-xl dark:border-emerald-700 dark:bg-zinc-900 dark:hover:border-emerald-500"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-transform group-hover:scale-110 dark:bg-emerald-900/50 dark:text-emerald-400">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">View Products</h4>
                  <p className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
                    See all products fetched from the live API
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    Browse now
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
