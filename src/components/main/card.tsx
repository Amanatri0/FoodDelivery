import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  price2: number;
  oldPrice: number;
  weights: string[];
  defaultWeight: string;
  bgColor: string;
}

export default function ProductCard({
  name,
  image,
  price,
  price2,
  oldPrice,
  weights,
  defaultWeight,
  bgColor,
}: Product) {
  const [quantity, setQuantity] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(defaultWeight);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 0));

  return (
    <div className="">
      <div
        className={`w-[300px] md:w-[250px] p-4 rounded-2xl shadow-[0_0_5px] flex flex-col items-center text-2xl lg:text-base`}
        style={{ backgroundColor: bgColor }}
      >
        {/* Favorite Icon */}
        <div className="w-full flex justify-end text-red-500 text-lg">
          <AiOutlineHeart />
        </div>

        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-fit h-[120px] object-cover rounded-full hover:scale-95 transition-all duration-300 cursor-pointer"
        />

        {/* Title */}
        <h2 className="font-semibold text-lg mt-2 text-center">{name}</h2>
        <p className="text-gray-600 text-sm">1 pack</p>

        {/* Weight Selector */}
        <div className="flex gap-2 mt-2">
          {weights.map((w) => (
            <button
              key={w}
              onClick={() => setSelectedWeight(w)}
              className={`px-3 py-1 rounded-md text-sm border cursor-pointer hover:shadow-[0_0_5px] transition-all duration-300 ${
                selectedWeight === w
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              }`}
            >
              {w}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-green-600 font-semibold">
            ₹{selectedWeight === "0.5kg" ? price : price2}
          </span>
          <span className="text-gray-400 line-through">₹{oldPrice}</span>
        </div>

        {/* Add / Counter */}
        <div className="mt-3">
          {quantity === 0 ? (
            <button
              onClick={increase}
              className="border border-blue-500 text-blue-500 px-6 py-1 rounded-md hover:text-white hover:bg-blue-700 cursor-pointer transition-all duration-300 hover:shadow-[0_0_5px]"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center border border-blue-500 rounded-md overflow-hidden">
              <button
                onClick={decrease}
                className="px-3 py-1 text-red-600 font-bold cursor-pointer"
              >
                −
              </button>
              <span className="px-3">{quantity}</span>
              <button
                onClick={increase}
                className="px-3 py-1  text-green-600 font-bold cursor-pointer"
              >
                +
              </button>
            </div>
          )}
        </div>

        <hr className="text-gray-400 border w-full mt-5" />

        {/* Delivery Info */}
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
          <span>🚚</span> Single day delivery
        </div>
      </div>
    </div>
  );
}
