import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

async function getImage(src) {
  const buffer = await fetch(src, { cache: "no-store" }).then(async res =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
}

export default async function PlaiceHolderImages({ image, title }) {
  const { base64, img } = await getImage(image);

  return (
    <div>
      {" "}
      <Image
        {...img}
        alt={title}
        width={500}
        height={800}
        placeholder="blur"
        blurDataURL={base64}
      />
    </div>
  );
}
