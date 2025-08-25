import Chicken from "../../pages/Menu/Chicken/chicken";
import Fish from "../../pages/Menu/Fish/fish";
import Mutton from "../../pages/Menu/Mutton/mutton";
import ProductCard from "./card";
import { items, polularItems } from "./itemsData";

import Slider from "../Slider/slider";
import { deals } from "../Slider/data";
import Footer from "../footer";

const Main = () => {
  return (
    <main>
      {/* Shop By category */}
      <section className="lg:ml-37 ml-10">
        <span>
          <h1 className="text-2xl lg:text-3xl font-serif text-blue-800/70">
            Shop-by Categories
          </h1>
          <h2 className="text-[20px] lg:text-md font-sans text-gray-500">
            Everything you need-on a budget
          </h2>
        </span>
        <div
          className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide px-6 py-4 hover:overflow-x-scroll"
          style={{
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
          }}
        >
          <span>
            <Fish />
          </span>
          <span>
            <Chicken />
          </span>
          <span>
            <Mutton />
          </span>
          <span>
            <Fish />
          </span>
          {/* <Seafood /> */}
        </div>
      </section>
      <div className="lg:w-[75vw] w-[80vw] lg:h-[70vh] h-[50vh] py-[50px] ml-37">
        <span>
          <h1 className="text-2xl lg:text-3xl font-serif text-blue-800/70">
            Top Deals
          </h1>
          <h2 className="text-[20px] lg:text-md font-sans text-gray-500">
            Pay less, Buy more
          </h2>
        </span>

        <div className="lg:w-[75vw] w-[80vw] lg:h-[60vh] h-[40vh] py-[40px] ml-10">
          <Slider imageUrl={deals} />
        </div>
      </div>

      {/* Top Rated section */}
      <section className="h-[80vh] lg:ml-37 mt-10 ml-10 ">
        <div>
          <h1 className="text-2xl lg:text-3xl font-serif text-blue-800/70">
            Top rated
          </h1>
          <h3 className="text-[20px] lg:text-md font-sans text-gray-500">
            Most Loved Items
          </h3>
        </div>

        <div
          className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide px-6 py-4 hover:overflow-x-scroll"
          style={{
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
          }}
        >
          {items.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </section>

      <section className="h-[80vh] lg:ml-37 mt-10 ml-10 ">
        <div>
          <h1 className="text-2xl lg:text-3xl font-serif text-blue-800/70">
            Popular Items
          </h1>
          <h3 className="text-[20px] lg:text-md font-sans text-gray-500">
            Freshness Delivered
          </h3>
        </div>

        <div
          className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide px-6 py-4 hover:overflow-x-scroll"
          style={{
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
          }}
        >
          {polularItems.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </section>

      <section className="ml-40 mb-20 w-[80vw]">
        <img
          src="/public/lastimage.png"
          alt=""
          className="w-full rounded-2xl"
        />
      </section>

      <Footer />
    </main>
  );
};

export default Main;
