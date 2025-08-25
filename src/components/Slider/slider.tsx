export type ImageProp = {
  imageUrl: string[];
  autoPlay?: boolean;
  interval?: number;
};

// Slider.tsx
import { useEffect, useState } from "react";

function Slider({ imageUrl, autoPlay = true, interval = 3500 }: ImageProp) {
  const [index, setIndex] = useState(0);
  const count = imageUrl.length;

  const next = () => setIndex((i) => (i + 1) % count);
  // const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [index, autoPlay, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow">
      {/* track */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {imageUrl.map((image, i) => (
          <img
            key={i}
            src={image}
            alt={`slide-${i}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {imageUrl.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full cursor-pointer ${
              i === index ? "bg-white/90" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
