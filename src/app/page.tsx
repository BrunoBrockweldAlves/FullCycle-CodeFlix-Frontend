import { Banner } from "@components/Banner";
import Header from "./components/Header";
import { MoviewRow } from "./components/MoviewRow";
import { getFeaturedMovie, getMoviesByGenre } from "./service/MovieService";

export default async function Home() {
  const featuredMovie = await getFeaturedMovie("101");
  const genres = ['Drama', 'Action', 'Comedy', 'Animation'];
  const movieGroups = await Promise.all(
    genres.map(async (genre) => 
    {
      const movies = await getMoviesByGenre(
        genre,
        {
          _limit: 8,
        }
      )
      return {sectionTitle: genre, movies}
    }
  ));
  return (
    <div className="relative h-screen lg:h-[148vh]">
      <Header />
      <main className="relative pb-24 pl-4 lg:pl-16">
        <Banner movie={featuredMovie}/>
        {movieGroups.map((movieGroup, index) => (
          <MoviewRow
            key={movieGroup.sectionTitle}
            sectionTitle={movieGroup.sectionTitle}
            movies={movieGroup.movies}
            />
        ))}
      </main>
    </div>
  );
}
