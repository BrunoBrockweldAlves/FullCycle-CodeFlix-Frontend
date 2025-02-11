import { Banner } from "@components/Banner";
import Header from "./components/Header";
import { MoviewRow } from "./components/MoviewRow";



export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden lg:h-[148vh]">
      <Header />
      <main className="relative pb-24 pl-4 lg:pl-16">
        <Banner/>

        <MoviewRow sectionTitle="Trending Now"/>
        <MoviewRow sectionTitle="Top Rated"/>
        <MoviewRow sectionTitle="Action Movies"/>
        <MoviewRow sectionTitle="Comedy"/>
      </main>
    </div>
  );
}
