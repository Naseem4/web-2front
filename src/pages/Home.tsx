import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Navbar";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Stats from "../components/Home/Stats";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Footer />
    </div>
  );
}