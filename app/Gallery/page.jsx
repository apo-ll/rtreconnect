import { RtImage } from "@/components/RtImage";
import { RtReconnect } from "@/config/cloudinary";
import { MasonryGrid } from "@/components/grid";

export default async function Gallery() {
  const images = await RtReconnect();
  return (
    <div className="container lg:mx-auto lg:max-w-7xl lg:px-0 sm:px-4 px-4">
      <div className="flex justify-center mx-auto w-full lg:mb-20 sm:mb-10 mb-10 mt-10">
        <h1 className="text-center font-mont lg:text-5xl sm:text-3xl text-3xl font-bold">
          Gallery
        </h1>
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
