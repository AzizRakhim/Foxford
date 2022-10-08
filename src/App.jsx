import { Routes, Route } from "react-router-dom";
import './App.scss';
import Advantages from "./components/Advantages/Advantages";
import Better from "./components/Better/Better";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Location from "./components/Location/Location";
import Plans from "./components/Plans/Plans";
import Results from "./components/Results/Results";
import Reverse from "./components/Reverse/Reverse";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <Better />
          {/* <Reverse />
          <Plans />
          <Advantages />
          <Results />
          <Contact />
          <Location />
          <Footer /> */}
        </>}
      />
    </Routes>
  );
}

export default App;
