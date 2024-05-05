"use client";

import { RtImage } from "@/components/RtImage";
import { Button, Accordion, AccordionItem } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <header className="relative w-auto lg:h-[700px]  sm:h-[500px] h-[500px] overflow-auto flex text-white ">
        <RtImage
          fill
          src="rtreconnect/vvieln9bzqb7cvui879k"
          alt="Description of my image"
        />
        <div className="bg-black/30 absolute inset-0" />

        <div className="absolute top-0 right-0 left-0 bottom-0 items-center w-full flex  lg:p-0 sm:p-3 p-5 sm:w-auto h-auto ">
          <div className="flex flex-col lg:gap-[24px] lg:max-w-[1200px] mx-auto h-auto   sm:gap-[10px] gap-[10px]">
            <h1 className="font-mont hello font-bold lg:text-6xl sm:text-4xl text-4xl  ">
              Empowering Youth to Reach, Teach, Mentor, and Unleash
            </h1>
            <p className="text-[18px] text-white">
              Join us in spreading the love of Jesus and mentoring youth to
              follow His path.
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
      <div className="lg:py-[112px] px-5 py-[56px] max-w-[1200px] mx-auto flex lg:flex-row flex-col items-center justify-between gap-[80px]">
        <div className=" mx-auto flex flex-col lg:gap-[32px] gap-3 ">
          <h1 className="lg:text-4xl text-[30px] font-mont hello font-bold">
            Building Our Lives on the Foundation of Christ
          </h1>
          <p className="text-[18px] text-gray-700">
            At Road To Reconnect, we believe that Jesus is the cornerstone of
            our lives. Through mentoring and spreading His love, we guide youths
            to follow His path.
          </p>
          <div className="flex lg:flex-row flex-col gap-2 justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-[20px] font-mont ">
                Scripture Reference
              </h1>
              <p className="text-[18px]">
                Ephesians 2:20 - "Built on the foundation of the apostles and
                prophets, with Christ Jesus himself as the chief cornerstone."
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-[20px] font-mont">
                Scripture Reference
              </h1>
              <p className="text-[18px]">
                Matthew 7:24 - "Therefore everyone who hears these words of mine
                and puts them into practice is like a wise man who built his
                house on the rock."
              </p>
            </div>
          </div>
        </div>

        <RtImage
          src="rtreconnect/produafzb55xsegsfhzu"
          width={500}
          height={500}
          alt="hello"
        />
      </div>
      <div className=" bg-slate-50 flex mx-auto">
        <div className="lg:py-[112px] px-5 py-[56px] max-w-[1200px] mx-auto flex lg:flex-row flex-col items-center justify-between gap-[80px]">
          <RtImage
            src="rtreconnect/d9awfkxh0zlg9u9vniix"
            width={500}
            height={500}
            alt="hello"
          />
          <div className=" mx-auto flex flex-col lg:gap-[32px] gap-3 ">
            <h1 className="lg:text-4xl text-[30px] font-mont hello font-bold">
              Discover the Benefits of Joining Our Road to Reconnect Community
            </h1>
            <p className="text-[18px] ">
              Find answers to commonly asked questions about our community,
              membership, and programs.
            </p>
            <div className="flex lg:flex-row flex-col gap-2 justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-[20px] font-mont ">
                  Spiritual Growth{" "}
                </h1>
                <p className="text-[18px]">
                  Experience a deep connection with God and strengthen your
                  faith through our community.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-[20px] font-mont">
                  Scripture Reference
                </h1>
                <p className="text-[18px]">
                  Find a welcoming and caring community that supports you on
                  your journey of faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex mx-auto  text-white relative overflow-auto h-[390px]  px-5">
        <RtImage
          fill
          src="rtreconnect/vvieln9bzqb7cvui879k"
          alt="Description of my image"
        />
        <div className="bg-black/30 absolute inset-0" />

        <div className="absolute top-0 bottom-0 right-0 left-0  lg:max-w-[1200px] px-5 py-[56px] mx-auto  flex lg:flex-row flex-col items-center lg:gap-[80px] gap-[20px] ">
          <h1 className="lg:text-4xl text-[30px] font-mont hello font-bold">
            Discover the Benefits of Joining Our Road to Reconnect Community
          </h1>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[18px] text-white">
              Discover a power of connection and mentorship
            </p>
            <div>
              <div className="flex flex-row gap-[20px] ">
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
        </div>
      </section>

      <section className="flex mx-auto lg:py-[112px] w-full py-[56px] px-5">
        <div className="flex flex-col gap-[30px] lg:w-[1200px]  mx-auto items-center">
          <div className="text-center gap-2">
            <h1 className="lg:text-4xl text-[30px] font-mont hello font-bold">
              FAQs
            </h1>
            <p className="text-[18px]">
              Discover a power of connection and mentorship
            </p>
          </div>
          <div className="w-full lg:mb-0 sm:mb-10 mb-10">
            <Accordion className="w-full">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="How do I join?"
                className="w-full"
              >
                To join our community, simply visit our website and fill out the
                membership form. Once submitted, our team will review your
                application and get back to you within 48 hours.
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="What programs do you offer?"
                className="w-full"
              >
                We offer a variety of programs for youth, including mentorship,
                leadership development, and community service opportunities.
                Visit our Programs page to learn more.{" "}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="How can I get involved?"
                className="w-full"
              >
                Getting involved is easy! You can volunteer for our events,
                become a mentor, or support us through donations. Contact us for
                more information on how you can make a difference.{" "}
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex flex-col gap-3 text-center items-center">
            <h4 className="text-3xl font-bold font-mont">
              Still Have Questions?
            </h4>
            <p className="text-[18px]">Contact us for further assistance</p>
            <Button
              className="w-fit"
              variant="bordered"
              radius="none"
              size="lg"
            >
              Contact
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
