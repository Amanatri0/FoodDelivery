import { useNavigate } from "react-router-dom";

const Seafood = () => {
  const navigate = useNavigate();

  const seafoodMenu = () => {
    navigate("/seafoodMenu");
  };

  return (
    <div
      className="bg-white w-[200px]  hover:scale-95 shadow-[0px_0px_5px] cursor-pointer h-[250px] overflow-hidden rounded-3xl text-xl flex flex-col justify-end transition-all duration-300 "
      onClick={seafoodMenu}
    >
      <div className="m-auto ">
        <img src="/goat1.png" alt="" />
      </div>
      <div className="bg-blue-100 rounded-b-3xl flex items-center justify-center p-3 font-serif">
        Seafood
      </div>
    </div>
  );
};

export default Seafood;
