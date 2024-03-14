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
              <Link href="/plaiceholder">Plaiceholder</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1 className="text-white text-3xl">Blur Data URL Testing!</h1>
    </main>
  );
}
