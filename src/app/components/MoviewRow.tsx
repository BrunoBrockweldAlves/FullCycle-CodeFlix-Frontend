import Image from "next/image";

type MovieRowProps = {
  sectionTitle: string;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({index}:MovieCardProps) => {
  return (<div className="h-28 min-w-[200px] group relative 
    transition duration-200 ease-in transform bg-gradient-to-t from-transparent to-black 
    sm:h-36 hover:scale-110 hover:z-50
    md:h-40 md:win-w-[300px] lg:h-52 lg:min-w-[400px] ">
      <Image
        src={`/item_${index}.png`}
        alt="CodeFlix"
        className="rounded"
        fill={true} />
    </div>);
}

export function MoviewRow({sectionTitle}:MovieRowProps) {
  return (
    <div className="flex-col space-y-4">
      <div className="flex">
        <h2 className="-ml-2 inline-flex items-center text-2xl font-bold">{sectionTitle}</h2>
      </div>
      <div className='-ml-7 flex space-x-4 overflow-x-auto scrollbar-hide p-6'>
        {[1, 2, 3, 4, 5].map((i) => (
          <MovieCard index={i} key={i} />
        ))}
      </div>
    </div>);
}
