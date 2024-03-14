import PlaiceHolderImages from "@/components/PlaiceHolderImages";

// https://fakestoreapi.com/products
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function PlaiceHolderSample() {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-5 gap-2 max-w-7xl mx-auto">
      {products.map(product => (
        <PlaiceHolderImages {...product} key={product.id} />
      ))}
    </div>
  );
}
