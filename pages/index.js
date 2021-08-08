import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
export default function Home(props) {
  const imgurl1 =
    "https://raw.githubusercontent.com/Vishnu-es/images/main/258b129d-d1cd-48b5-86d4-86206c13ebf7.webp";
  const imgurl2 =
    "https://raw.githubusercontent.com/Vishnu-es/images/main/2595054e-d1d9-4fde-8046-58d51fcb3164.webp";
  return (
    <div className="">
      <Head>
        <title>
          Airbnb: Holiday Rentals, Cabins, Beach Houses, Unique Homes &
          Experiences
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header></Header>

      {/* Banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2
            className="text-3xl font-semibold 
          pb-5"
          >
            Explore Nearby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {props.exploreData?.map((item) => (
              <SmallCard key={item.id} itemprop={item} />
            ))}
          </div>
        </section>
        <LargeCard
          img={imgurl1}
          id={1}
          title="Not sure where 
          to go? Perfect."
          btn="I'm flexible"
        />
        <section>
          <h2 className="text-3xl font-semibold py-6">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide ml-2 p-5">
            {props.cardsData?.map((item) => (
              <MediumCard key={item.id} itemprop={item} />
            ))}
          </div>
        </section>
        <LargeCard
          img={imgurl2}
          id={2}
          title="Try hosting"
          desc="Earn extra income and unlock new opportunities by sharing your space."
          btn="Learn more"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://vishnu-es.github.io/jsonserver/airbnbapi.json"
  ).then((res) => res.json());
  const cardsData = await fetch(
    "https://vishnu-es.github.io/jsonserver/liveanywhere.json"
  ).then((res) => res.json());
  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData,
    },
  };
}
