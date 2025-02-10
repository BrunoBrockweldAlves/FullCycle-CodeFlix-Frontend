import Image from "next/image";
import Header from "./components/Header";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden lg:h-[148vh]">
      <Header />
      <main className="relative pb-24 pl-4 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute left-0 top-0 -z-10 h-[95vh] w-screen">
            <Image
              src="/witcher_banner_2.jpg"
              alt="Hero"
              fill={true}
              className="h-[65hv] object-cover object-top lg:h-[95hv]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          </div>

          <h1 className="text-2xl font-bold md:text-4x1 lg:text-7xl">
            The Witcher
          </h1>

          <p className="text-shadow-md max-w-xs text-xs md: maxmax-w-lg md:text-lg lg:max-w-2xl">
            Geralt of Rivia, a solitary monster hunter, struggles to find his
            place in a world where people often prove more wicked than beasts.
          </p>
        </div>

        <div className="flex space-x-3">
          <button className=" md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5">
            <PlayIcon className="h-6" />
            Play
          </button>
          <button className="md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5">
            <InformationCircleIcon className="h-6" />
            More Info
          </button>
        </div>

        {/* <div className="flex-col space-y-4 overflow-x-auto scrollbar-hide"> */}
        <div className="flex-col space-y-4">
          <div className='flex space-x-4 overflow-x-auto scrollbar-hide'>
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="h-28 min-w-[200px] group relative 
                transition duration-200 ease-in transform sm:h-36 hover:scale-110 ">
                  <Image
                    src={`/item_${i}.png`}
                    alt="CodeFlix"
                    className="rounded"
                    fill={true}
                    />
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
