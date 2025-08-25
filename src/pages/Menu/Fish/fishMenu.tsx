import Footer from "../../../components/footer";
import ProductCard from "../../../components/main/card";
import { fishMenu } from "../../../components/main/itemsData";
import Navbar from "../../../components/Navbar/navbar";
import MenuSection from "../menu";

const Fishmenu = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="mt-20">
        
      </div> */}

      <MenuSection />
      <div
        className="grid grid-cols-1 place-items-center h-[130vh] mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-20 py-4"
        style={{
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
        }}
      >
        {fishMenu.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Fishmenu;
