import { BiPhone } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full h-auto hidden lg:flex flex-wrap justify-start sm:justify-between text-themeSky bg-stone-200 py-7 px-4 md:px-6 lg:px-16 xl:px-36 2xl:px-40 ">
      <div className="w-full h-fit flex flex-col md:flex-row items-start justify-between">
        <div className="w-full sm:w-72 flex flex-col text-justify space-y-2 p-2 pl-0 pr-2">
          <div className="w-48 flex items-center justify-center overflow-hidden cursor-pointer">
            <img src="/public/logo.png" alt="" />
          </div>
          <p className="text-stone-700 text-justify">
            Widest range of non-veg products. Guaranteed freshness delivered to
            your doorstep.
            <br />
            Get your order delivered to your doorstep in 120 minutes.
            <br />
            Your one-stop non-veg solution. Fish | Meat | Seafood | Eggs
          </p>
          <p className="text-xl text-blue-900/70 font-serif pt-3 pb-1 heading text-left whitespace-nowrap">
            Visit Minbury App on Mobile
          </p>
          <a
            href="https://play.google.com/store/search?q=minbury&c=apps&hl=en"
            target="_black"
            className="w-52 h-full flex items-center justify-center overflow-hidden cursor-pointer"
          >
            <img
              src="/public/googleLogo.webp"
              alt="image"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        <div className="w-full sm:w-fit space-y-2 p-4 pl-0 flex flex-col">
          <p className="text-primary font-semibold text-2xl whitespace-nowrap pb-2 heading">
            Explore
          </p>
          <div className="flex flex-col justify-center space-y-1 w-fit tracking-tight">
            <p className="tracking-wide text-stone-700 cursor-pointer hover:text-blue-400">
              Home
            </p>
            <p className="tracking-wide pt-2 text-stone-700 cursor-pointer hover:text-primary">
              Categories
            </p>
            <p className="tracking-wide pt-2 text-stone-700 cursor-pointer hover:text-primary">
              Favorites
            </p>
            <p className="tracking-wide pt-2 text-stone-700 cursor-pointer hover:text-primary">
              Orders
            </p>
          </div>
        </div>
        <div className="w-full sm:w-fit space-y-2 p-4 pl-0 flex flex-col">
          <p className="text-primary font-semibold text-2xl whitespace-nowrap pb-2 heading">
            Legal
          </p>
          <div className="flex flex-col justify-center space-y-1 w-fit tracking-tight">
            <p className="tracking-wide text-stone-700 cursor-pointer hover:text-blue-400">
              Privacy
            </p>
            <p className="tracking-wide pt-2 text-stone-700 cursor-pointer hover:text-primary">
              Terms of Use
            </p>
            <p className="tracking-wide pt-2 text-stone-700 cursor-pointer hover:text-primary">
              Return & Refund
            </p>
          </div>
        </div>
        <div className="w-full sm:w-fit space-y-2 p-4 pl-0 flex flex-col">
          <p className="text-primary font-semibold text-2xl whitespace-nowrap pb-2 heading">
            Connect
          </p>
          <div className="flex flex-col justify-center space-y-1 w-fit tracking-tight">
            <p className="tracking-wide text-stone-700">
              Saukuchi Tiniali,
              <br />
              Lokhra - Lalganesh Road,
              <br />
              Opp Betkuchi High School,
              <br />
              Guwahati-781040
            </p>
            <div className="w-full flex space-x-2 pt-3">
              <MdEmail className="h-6 w-6 fill-blue-600" />
              <p className="flex-1 text-stone-700">support@bonphul-foods.com</p>
            </div>
            <div className="w-full flex space-x-2 pt-3">
              <BiPhone className="h-6 w-6 fill-blue-600" />
              <p className="flex-1 text-stone-700"> +91 70990 65777</p>
            </div>
          </div>

          <div className="w-36 px-2 pl-0 py-4">
            <p className="text-lg text-blue-700/70 font-medium pb-3 heading">
              Follow up
            </p>
            <div className="flex justify-between fill-blue-600">
              <a
                href=""
                className="w-8 h-8 flex items-center justify-center border rounded-lg cursor-pointer hover:scale-95  duration-500"
              >
                <BsInstagram />
              </a>
              <a
                href=""
                className="w-8 h-8 flex items-center justify-center border rounded-lg cursor-pointer hover:scale-95  duration-500"
              >
                <BsFacebook />
              </a>
              <a
                href=""
                className="w-8 h-8 flex items-center justify-center border rounded-lg cursor-pointer hover:scale-95  duration-500"
              >
                <BsWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
