import React, { useEffect, useState } from "react";

interface LocationSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationChange: (location: string) => void;
}

const LocationSelectorModal: React.FC<LocationSelectorModalProps> = ({
  isOpen,
  onClose,
  onLocationChange,
}) => {
  const [location, setLocation] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("userLocation");
    if (saved) {
      setLocation(saved);
      onLocationChange(saved);
    }
  }, [onLocationChange]);

  // Use current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            const locName =
              data.address?.road || data.address?.suburb || data.display_name;

            if (locName) {
              setLocation(locName);
              localStorage.setItem("userLocation", locName);
              onLocationChange(locName);
              onClose();
            }
          } catch (err) {
            console.error("Error fetching location:", err);
          }
        },
        (err) => {
          console.error("Geolocation error:", err);
          alert("Unable to fetch location. Please enter manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Use pincode
  const applyPincode = async () => {
    if (!pincode) return;

    try {
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await res.json();

      if (data[0]?.Status === "Success") {
        const locName = `${data[0].PostOffice[0].District}, ${data[0].PostOffice[0].State}`;
        setLocation(locName);
        localStorage.setItem("userLocation", locName);
        onLocationChange(locName);
        onClose();
      } else {
        alert("Invalid pincode.");
      }
    } catch (err) {
      console.error("Error fetching pincode:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <button
          onClick={getCurrentLocation}
          className="w-full p-2 bg-blue-600 text-white rounded-lg mb-4"
        >
          📍 Use Current Location
        </button>

        <div className="text-center my-2">OR</div>

        <input
          type="text"
          placeholder="Enter Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button
          onClick={applyPincode}
          className="w-full p-2 bg-green-600 text-white rounded-lg"
        >
          Apply
        </button>

        {location && (
          <div className="mt-4 text-green-700 font-semibold text-center">
            ✅ Delivering to: {location}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSelectorModal;
