import Footer from "./Features/Footer";
import BentoBoxes from "./Features/BentoBoxes";
import Header from "./Features/Header";
export default function App() {
  return (
    <div className="relative w-screen h-screen flex justify-center">
      <div className="w-7xl h-fit">
        <Header />
        <BentoBoxes />
        <Footer />
      </div>
    </div>
  );
}
