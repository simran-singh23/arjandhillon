import React, { useEffect, useState } from "react";

function Residential() {
  const [properties, setProperties] = useState([]);


  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "2BHK Flat in Mohali",
        location: "Mohali",
        price: "₹35 Lakh",
        image:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      },
      {
        id: 2,
        title: "Luxury Villa in Chandigarh",
        location: "Chandigarh",
        price: "₹1.2 Crore",
        image:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      },
      {
        id: 3,
        title: "Apartment in Zirakpur",
        location: "Zirakpur",
        price: "₹28 Lakh",
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      },
      {
        id: 4,
        title: "Independent House in Panchkula",
        location: "Panchkula",
        price: "₹75 Lakh",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      },
    ];

    setProperties(data);
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Residential Homes 🏠
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500">{item.location}</p>
              <p className="text-blue-600 font-bold mt-2">{item.price}</p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Residential;