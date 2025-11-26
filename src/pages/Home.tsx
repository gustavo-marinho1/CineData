import { CardFeatured } from "../components/CardFeatured";
import { CardHistory } from "../components/CardHistory";

const urlImg = `https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg`;
const historyImg = `https://lh3.googleusercontent.com/aida-public/AB6AXuDAZoxN7XHusRQBB-zKhqhL_RO0QrsnWBnBZU0ODxwQgoVr1SG5mrA32zq7TfsuDazo8qPVC3yTnYVOhavfHQ8nK68JZpmQcX9ZX8fqnfsmVR2fZQcNyKJK_8QO37wnwU0ymC0nb1I3yP3EhLq5SGRLwpQXXUr7kza_t6Sh3xtkeX4QcJRov-D1G9Mxx5eZNIw1vfZZgMr29jaais490SUFGw4uZy7JgbElaEoe9BC-o-U76mJWNTW_7uogkroXOUyW_VhW-Fhkp955`;

export const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-12">

      <section>
        <h2 className="text-white text-2xl font-bold leading-tight tracking-tight pb-4">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <CardHistory imageUrl={historyImg} />
          <CardHistory imageUrl={historyImg} />
          <CardHistory imageUrl={historyImg} />
          <CardHistory imageUrl={historyImg} />
          <CardHistory imageUrl={historyImg} />
        </div>
      </section>

    </div>
  )
}