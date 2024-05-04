import Logos from "@/public/roadtoreconnect.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="w-[200px]">
      <Image src={Logos} alt="Logo" />
    </div>
  );
}
