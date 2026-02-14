import { Route, Routes } from "react-router";
import Header from "./components/Header";
import { HeroSlider } from "./components/HeroSlider";
import { LoanServices } from "./components/LoanServices";
import { WhyChoose } from "./components/WhyChoose";
import { Articles } from "./components/Articles";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-white ">
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <HeroSlider />
      <LoanServices />
      <WhyChoose />
      <Testimonials />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
