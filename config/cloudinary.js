import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // Assuming your variables are named like this
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function RtReconnect() {
  const result = await cloudinary.api.resources({
    type: "upload",
    prefix: "rtreconnect/",
    max_results: 500,
  });

  return result;
}
