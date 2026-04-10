import React, { useEffect, useState } from "react";

function Commercial() {
  const [properties, setProperties] = useState([]);


  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "Office Space in Mohali",
        location: "Mohali",
        price: "₹45 Lakh",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c",
      },
      {
        id: 2,
        title: "Commercial Shop in Chandigarh",
        location: "Chandigarh",
        price: "₹60 Lakh",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      },
      {
        id: 3,
        title: "Office in Zirakpur",
        location: "Zirakpur",
        price: "₹35 Lakh",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      },
      {
        id: 4,
        title: "Showroom in Panchkula",
        location: "Panchkula",
        price: "₹80 Lakh",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      },
    ];

    setProperties(data);
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Commercial Properties 🏢
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden "
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

              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Commercial;