import { useNavigate } from "react-router-dom";

const Fish = () => {
  const navigate = useNavigate();

  const fishMenu = () => {
    navigate("/fishMenu");
  };

  return (
    <div
      className="bg-white w-[200px]  hover:scale-95 shadow-[0px_0px_5px] cursor-pointer h-[250px] overflow-hidden rounded-3xl text-xl flex flex-col justify-end transition-all duration-300 "
      onClick={fishMenu}
    >
      <div className="m-auto ">
        <img src="/fish3.png" alt="" className="ml-6" />
      </div>
      <div className="bg-blue-100 rounded-b-3xl flex items-center justify-center p-3 font-serif">
        Fresh Fish
      </div>
    </div>
  );
};

export default Fish;
