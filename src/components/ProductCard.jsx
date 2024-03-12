import Image from "next/image";

async function getImageBase64Async(imageUrl) {
  try {
    const response = await fetch(imageUrl, {
      cache: "no-store",
    });
    const buffer = await response.arrayBuffer();
    const base64String = Buffer.from(buffer).toString("base64");
    return `data:image/jpg;base64,${base64String}`;
  } catch (error) {
    console.error("Error fetching image:", error);
    // Handle error accordingly
    return null;
  }
}

export default async function ProductCard({ image, title }) {
  const blur = await getImageBase64Async(image);

  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={500}
        height={800}
        className=""
        placeholder="blur"
        blurDataURL={blur}
      />
      <h5>{title}</h5>
    </div>
  );
}
