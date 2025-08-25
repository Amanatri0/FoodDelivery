import { useState } from "react";

// --- Types ---
export interface MenuItem {
  id: number;
  name: string;
  image: string;
  price: number; // for 0.5kg
  price2: number; // for 1kg
  oldPrice: number;
  weights: string[];
  defaultWeight: string;
  bgColor: string;
}

export interface CartItem extends MenuItem {
  selectedWeight: string;
  quantity: number;
  price: number; // active price based on weight
}

export interface Address {
  id: number;
  label: string;
  details: string;
}

// --- Example addresses ---
const addresses: Address[] = [
  { id: 1, label: "Home", details: "123 Main St, Guwahati" },
  { id: 2, label: "Office", details: "ABC Towers, 2nd Floor" },
];

// --- Example product list (import your items / fishMenu / muttonMenu etc) ---
const sampleItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Curry Cut",
    image: "/chicken.png",
    price: 180,
    price2: 350,
    oldPrice: 200,
    weights: ["0.5kg", "1kg"],
    defaultWeight: "0.5kg",
    bgColor: "bg-yellow-50",
  },
  {
    id: 2,
    name: "Fish Rohu",
    image: "/fish.png",
    price: 250,
    price2: 480,
    oldPrice: 300,
    weights: ["0.5kg", "1kg"],
    defaultWeight: "1kg",
    bgColor: "bg-blue-50",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedWeight, setSelectedWeight] = useState<{
    [id: number]: string;
  }>({});
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(
    null
  );

  // --- Add to cart ---
  const addToCart = (product: MenuItem, weight: string) => {
    const unitPrice = weight === "1kg" ? product.price2 : product.price;

    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.selectedWeight === weight
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedWeight === weight
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        { ...product, selectedWeight: weight, quantity: 1, price: unitPrice },
      ];
    });
  };

  // --- Decrease qty ---
  const decreaseQty = (id: number, weight: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.selectedWeight === weight
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // --- Remove item ---
  const removeFromCart = (id: number, weight: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedWeight === weight))
    );
  };

  // --- Totals ---
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId);

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      {/* Product listing */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sampleItems.map((product) => (
            <div
              key={product.id}
              className={`rounded-2xl shadow p-4 flex flex-col ${product.bgColor}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-32 object-contain mb-2"
              />
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500 line-through">
                ₹{product.oldPrice}
              </p>
              <p className="font-semibold">
                ₹{product.price} (0.5kg) / ₹{product.price2} (1kg)
              </p>

              {/* Weight selector */}
              <select
                value={selectedWeight[product.id] ?? product.defaultWeight}
                onChange={(e) =>
                  setSelectedWeight((prev) => ({
                    ...prev,
                    [product.id]: e.target.value,
                  }))
                }
                className="border px-2 py-1 rounded mt-2"
              >
                {product.weights.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>

              <button
                onClick={() =>
                  addToCart(
                    product,
                    selectedWeight[product.id] ?? product.defaultWeight
                  )
                }
                className="mt-3 bg-green-600 text-white px-3 py-1 rounded-xl"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart + Address */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedWeight}`}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p>
                    {item.name} ({item.selectedWeight})
                  </p>
                  <p className="text-sm text-gray-600">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => decreaseQty(item.id, item.selectedWeight)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item, item.selectedWeight)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedWeight)}
                    className="px-2 bg-red-500 text-white rounded"
                  >
                    x
                  </button>
                </div>
              </div>
            ))}

            <p className="font-bold mt-2">Total: ₹{totalPrice}</p>
          </div>
        )}

        {/* Address */}
        <h2 className="text-lg font-semibold mt-6 mb-2">Delivery Address</h2>
        <select
          value={selectedAddressId ?? ""}
          onChange={(e) => setSelectedAddressId(Number(e.target.value))}
          className="border px-2 py-1 rounded w-full"
        >
          <option value="" disabled>
            Select an address
          </option>
          {addresses.map((a) => (
            <option key={a.id} value={a.id}>
              {a.label} - {a.details}
            </option>
          ))}
        </select>

        {/* Place order */}
        <button
          disabled={cart.length === 0 || !selectedAddressId}
          onClick={() => {
            alert(
              `Order placed!\n\nTotal: ₹${totalPrice}\nAddress: ${selectedAddress?.details}`
            );
            setCart([]); // reset cart
          }}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl disabled:opacity-50"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
