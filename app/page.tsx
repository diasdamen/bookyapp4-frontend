import About from "@/components/About";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Reviews from "@/components/Reviews";
import Rooms from "@/components/Rooms";

const Home =()=> {
  return (
    <main>
      <Hero />
      <About />
      <Rooms />
      <Reviews />
      <Map />
    </main>
  );
};

export default Home;
