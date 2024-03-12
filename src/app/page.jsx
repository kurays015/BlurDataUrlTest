// https://fakestoreapi.com/products
// https://fakestoreapi.com/products/1

import Link from "next/link";

// export const runtime = "experimental-edge";

export default function Home() {
  return (
    <main className="text-slate-300">
      <header className="flex items-center justify-between p-5">
        <h1>Suspense</h1>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        officia? Perferendis sit iste sunt quam laboriosam expedita tempore
        molestias mollitia? Enim voluptatem odit officia commodi dolore
        asperiores rem, expedita, quae iste, dignissimos hic vel soluta! Dolor
        corporis, praesentium temporibus veritatis itaque atque adipisci impedit
        veniam sunt quidem, harum saepe quos!
      </section>
    </main>
  );
}
