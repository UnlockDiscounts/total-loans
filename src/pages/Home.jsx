import Hero from "../components/Home/Hero";
import Metrics from "../components/Home/Metrics";
import About from "../components/Home/About";
import EmiCalculator from "../components/Home/EmiCalculator";
import LoanCards from "../components/Home/LoanCards";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="order-1">
        <Hero />
      </div>
      <div className="order-2">
        <Metrics />
      </div>
      <div className="order-3">
        <About />
      </div>
      <div className="order-4 lg:order-5">
        <LoanCards />
      </div>
      <div className="order-5 lg:order-4">
        <EmiCalculator />
      </div>
    </div>
  );
}

export default Home;
