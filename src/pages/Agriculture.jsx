import React, { useEffect, useState } from "react";

function Agriculture() {

  const [lands, setLands] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        village: "Naulakha",
        land: "10 Acres",
        location: "Punjab",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
      },
      {
        id: 2,
        village: "Balpur",
        land: "8 Acres",
        location: "Punjab",
        image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf"
      },
      {
        id: 3,
        village: "Jakhwali",
        land: "12 Acres",
        location: "Punjab",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
      },
      {
        id: 4,
        village: "Patiala",
        land: "15 Acres",
        location: "Punjab",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
      },
      {
        id: 5,
        village: "Sirhind",
        land: "9 Acres",
        location: "Punjab",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
      }
    ];

    setLands(data);
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Agriculture Land 🌾</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lands.map((item) => (
          <div key={item.id} className="border rounded shadow overflow-hidden">
            
         
            <img
              src={item.image}
              alt={item.village}
              className="w-full h-40 object-cover"
            />

    
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{item.village}</h2>
              <p>Land: {item.land}</p>
              <p>Location: {item.location}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Agriculture;