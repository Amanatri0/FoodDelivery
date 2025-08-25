import { CgShoppingCart } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LocationSelectorModal from "../../categories/location";
import { BiSearch } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<string>("Select Location");
  const [isModalOpen, setModalOpen] = useState(false);

  // Load location from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("userLocation");
    if (saved) setLocation(saved);
  }, []);

  return (
    <div className="relative top-0 w-full h-20">
      <nav className="fixed flex justify-between items-center w-full h-20 border-b-2 px-6 lg:px-36 border-stone-200 shadow-sm shadow-stone-200 bg-white z-50">
        {/* Logo */}
        <div className="hidden lg:flex items-center w-1/6 h-full">
          <div
            className="w-52 h-full flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/logo.png" alt="logo" className="w-full" />
          </div>
        </div>

        {/* Mobile Location Picker */}
        <div className="lg:hidden flex items-center space-x-2">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <span>
              <FaLocationDot size={30} className="text-blue-800/80" />
            </span>
            <span className="truncate max-w-[120px]">{location}</span>
          </div>
        </div>

        {/* Search Box */}
        <div className="flex items-center border border-gray-400/70 rounded-3xl px-3 py-3 shadow-sm hover:shadow-md transition-all duration-200 flex-1 max-w-md mx-4">
          <BiSearch className="text-gray-600/70 size-5 mr-2" />
          <input
            type="text"
            placeholder="Search Products"
            className="flex-1 outline-none text-sm lg:text-base"
          />
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Location Picker */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <span>
              <FaLocationDot size={30} className="text-blue-800/80" />
            </span>
            <span className="truncate max-w-[150px]">{location}</span>
          </div>

          {/* Cart */}
          <NavLink
            to={"/cart"}
            className="p-2 rounded-xl border-2 border-blue-800 hover:border-blue-600/50 transition-all relative shadow-md shadow-blue-900/30 hover:shadow-blue-500/30"
          >
            <CgShoppingCart
              className="text-xl"
              onClick={() => {
                navigate("/cart");
              }}
            />
          </NavLink>

          {/* Profile */}
          <div className="w-12 h-12 flex items-center justify-center border border-stone-200 rounded-full cursor-pointer overflow-hidden">
            <img
              src="/profile.png"
              alt="profile"
              className="max-w-[70px] border-4"
            />
          </div>
        </div>
      </nav>

      {/* Modal (only rendered if open) */}
      {isModalOpen && (
        <LocationSelectorModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onLocationChange={(loc) => {
            setLocation(loc);
            localStorage.setItem("userLocation", loc);
          }}
        />
      )}
    </div>
  );
};

export default Navbar;
