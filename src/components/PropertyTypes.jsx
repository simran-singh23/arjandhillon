import React from "react";
import { useNavigate } from "react-router-dom";

function PropertyTypes() {
  const navigate = useNavigate();

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Property Types
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

       
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">





          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
            alt="agriculture"
            className="w-full h-48 object-cover"

          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Agriculture Land</h3>
            <p className="text-gray-500 mt-2">
              Farming & green land for crops
            </p>

            <button
  onClick={() => navigate("/agriculture")}
  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
  Check Here
</button>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow-lg overflow-hidden t">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"

            alt="commercial"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Commercial Land</h3>
            <p className="text-gray-500 mt-2">
              Shops, offices & business spaces
            </p>

            <button
  onClick={() => navigate("/commercial")}
  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
  Check Here
</button>
          </div>
        </div>

        
        <div className="bg-white rounded-xl overflow-hidden hover:scale-105">
            
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="residential"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">Residential Homes</h3>


            <p className="text-gray-500 mt-2">
              Houses & apartments for living
            </p>

            <button
  onClick={() => navigate("/residential")}
  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
  Check Here
</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PropertyTypes;