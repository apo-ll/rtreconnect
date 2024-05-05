import { RtImage } from "@/components/RtImage";
import { Button } from "@nextui-org/react";

export default function AboutUs() {
  return (
    <main>
      <header className="relative w-auto lg:h-[600px]  sm:h-[500px] h-[500px] overflow-auto flex text-white ">
        <RtImage
          fill
          src="rtreconnect/vvieln9bzqb7cvui879k"
          alt="Description of my image"
        />
        <div className="bg-black/30 absolute inset-0" />

        <div className="absolute top-0 right-0 left-0 bottom-0 items-center w-full flex  lg:p-0 sm:p-3 p-5 sm:w-auto h-auto ">
          <div className="flex flex-col lg:gap-[24px] lg:max-w-[1200px] mx-auto h-auto   sm:gap-[10px] gap-[10px]">
            <h1 className="font-mont hello font-bold lg:text-6xl sm:text-4xl text-4xl  ">
              Building a Faithful community
            </h1>
            <p className="text-[18px] text-white">
              Welcome to Road to Reconnect, a community centered around Christ,
              where we foster love and mentorship.
            </p>
            <div className="flex flex-row gap-[20px] items-center ">
              <Button
                radius="none"
                color="primary"
                className="text-black"
                size="lg"
              >
                Learn More
              </Button>
              <Button
                radius="none"
                variant="bordered"
                className="text-white"
                size="lg"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
