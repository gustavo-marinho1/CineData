import { HistoryList } from "@/components/HistoryList";
import { CardFeatured } from "../components/CardFeatured";

const urlImg = `https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg`;

export const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-12">

      <section>
        <h2 className="text-white text-2xl font-bold leading-tight tracking-tight pb-4">Featured</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          <CardFeatured imageUrl={urlImg} title="Dune: Part Two" description="A jornada mítica de Paul Atreides continua." />
          <CardFeatured imageUrl={urlImg} title="Dune: Part Two" description="A jornada mítica de Paul Atreides continua." />
          <CardFeatured imageUrl={urlImg} title="Dune: Part Two" description="A jornada mítica de Paul Atreides continua." />
          <CardFeatured imageUrl={urlImg} title="Dune: Part Two" description="A jornada mítica de Paul Atreides continua." />
          <CardFeatured imageUrl={urlImg} title="Dune: Part Two" description="A jornada mítica de Paul Atreides continua." />
          <CardFeatured imageUrl={urlImg} title="Dune: Part Two" description="A jornada mítica de Paul Atreides continua." />
          <CardFeatured imageUrl={urlImg} title="Dune: Part Two" description="A jornada mítica de Paul Atreides continua." />
          <CardFeatured imageUrl={urlImg} title="Dune: Part Two" description="A jornada mítica de Paul Atreides continua." />
        </div>
      </section>

      <section>
        <h3 className="text-white text-xl font-bold leading-tight tracking-tight pb-2">Search history</h3>
        <HistoryList />
      </section>

    </div>
  )
}