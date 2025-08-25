import { Link } from "react-router-dom";
import { categories } from "../../categories/categories";

export default function MenuSection() {
  return (
    <div
      className="flex gap-6 overflow-x-auto p-4 items-center justify-center scrollbar-hide hover:overflow-x-scroll"
      style={{
        scrollBehavior: "smooth",
        scrollSnapType: "x mandatory",
      }}
    >
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={cat.path}
          className="flex flex-col items-center text-center min-w-[90px]"
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_5px] hover:scale-105 transition overflow-hidden">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-[400px] h-[80px]"
            />
          </div>
          <span className="mt-2 font-serif">{cat.name}</span>
        </Link>
      ))}
    </div>
  );
}
