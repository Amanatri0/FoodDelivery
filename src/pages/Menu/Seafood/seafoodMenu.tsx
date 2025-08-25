import Footer from "../../../components/footer";
import ProductCard from "../../../components/main/card";
import { seafoodMenu } from "../../../components/main/itemsData";
import Navbar from "../../../components/Navbar/navbar";
import MenuSection from "../menu";

const Seafood = () => {
  return (
    <div>
      <Navbar />
      <MenuSection />
      <div
        className="grid grid-cols-1 place-items-center h-[130vh] mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-20 py-4"
        style={{
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
        }}
      >
        {seafoodMenu.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Seafood;
