import { RtImage } from "@/components/RtImage";
import { RtReconnect } from "@/config/cloudinary";
import { MasonryGrid } from "@/components/grid";

export default async function Gallery() {
  const images = await RtReconnect();
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex justify-center mx-auto w-full mb-20 mt-10">
        <h1 className="text-center font-mont text-5xl font-bold">Gallery</h1>
      </div>
      <MasonryGrid>
        {images.resources.map((image) => (
          <div key={image.asset_id} className="my-masonry-grid_item rounded-xl">
            <RtImage
              src={image.public_id}
              width={500}
              height={500}
              fill={false}
              alt="Description of my image"
              className="rounded-lg "
            />
          </div>
        ))}
      </MasonryGrid>
    </div>
  );
}
