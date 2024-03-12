import ProductCard from "./ProductCard";

export default async function Products({ data }) {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const products = await res.json();
  // const products = await data.then(res => res.json());
  return (
    <div className="space-y-6">
      <div>
        <div className="text-lg font-medium text-white">
          Recommended Products for You
        </div>
        <div className="text-sm text-gray-400">
          Based on your preferences and shopping habits
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="col-span-4 lg:col-span-1">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
