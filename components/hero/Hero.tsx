import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-amber-900">
            Freshly Baked Happiness, Every Day 🍞
          </h1>

          <p className="mt-6 text-lg text-amber-700">
            From our oven to your table — warm, delicious, and made with love.
          </p>

          <div className="mt-8">
            <Link
              href="/menu"
              className="inline-flex items-center rounded-xl bg-amber-800 px-6 py-3 text-white font-medium hover:bg-amber-900 transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
