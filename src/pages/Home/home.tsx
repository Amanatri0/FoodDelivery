import Navbar from "../../components/Navbar/navbar";
import Slider from "../../components/Slider/slider";
import { images } from "../../components/Slider/data";
import Main from "../../components/main/main";

const Home = () => {
  return (
    <div className="h-full">
      {/* Navigation bar */}
      <div>
        <Navbar />
      </div>

      {/* Slider  */}
      <div className="lg:w-[80vw] w-[85vw] lg:h-[76vh] h-[60vh] m-auto py-[50px] ">
        <Slider imageUrl={images} />
      </div>

      {/* Main section */}
      <div className="w-full h-[80vh] m-auto">
        <Main />
      </div>
    </div>
  );
};

export default Home;
