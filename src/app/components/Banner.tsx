import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Movie } from "../types/movie";
import Link from "next/link";

export function Banner ({movie}:{movie:Movie}) {
  return (
    <div className="mb-10">
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
    <div className="absolute left-0 top-0 -z-10 h-[95vh] w-screen">
      <video
        autoPlay
        loop
        muted
        className='z-20 h-full w-full object-cover opacity-50 transition duration-1000 ease-in-out hidden lg:block'
        poster={movie.bannerFileURL}
        src={movie.videoFileURL}
        />

      <Image
        src={movie.bannerFileURL}
        alt={movie.title}
        fill={true}
        className="object-cover object-top opacity-30 filter lg:hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
    </div>

    <h1 className="text-2xl font-bold md:text-4x1 lg:text-7xl">
      {movie.title}
    </h1>

    <p className="text-shadow-md max-w-xs text-xs md: maxmax-w-lg md:text-lg lg:max-w-2xl">
      {movie.description}
    </p>
  </div>

  <div className="flex space-x-3">
      <Link href={`/watch/${movie.id}`}>
        <button className=" md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5">
          <PlayIcon className="h-6" />
          Play
        </button>
      </Link>
    <button className="md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5">
      <InformationCircleIcon className="h-6" />
      More Info
    </button>
  </div>
  </div>
  )
}