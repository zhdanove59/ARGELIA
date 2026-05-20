import { useEffect, useState } from "react";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import LoadingScreen from "./components/LoadingScreen";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import History from "./components/History";
import FamousPeople from "./components/FamousPeople";
import Landscapes from "./components/Landscapes";
import Gastronomy from "./components/Gastronomy";
import WhyVisit from "./components/WhyVisit";
import AlgeriaMap from "./components/AlgeriaMap";
import Media from "./components/Media";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <LanguageProvider>
      <div className="App grain relative">
        {loading && <LoadingScreen />}
        <Particles />
        <Navigation />
        <main className="relative z-10">
          <Hero />
          <History />
          <FamousPeople />
          <Landscapes />
          <Gastronomy />
          <WhyVisit />
          <AlgeriaMap />
          <Media />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
