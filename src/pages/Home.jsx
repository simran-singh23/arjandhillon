import React from "react";
import PropertyTypes from "../components/PropertyTypes";
function Home() {
  return (
    <div className="simran">

      <div className="relative h-[80vh]">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          alt="house"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full
         bg-black/50 flex flex-col justify-center items-center text-white">



          <h1 className="text-5xl font-bold mb-4 text-center">
           best deal for your dream Home
          </h1>
          <p className="mb-6 text-lg">
            Buy, Rent or Sell properties easily
          </p>
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
            Explore Now
          </button>
        </div>
      </div>

      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Properties
        </h2>
<PropertyTypes />
        <div className="grid md:grid-cols-3 gap-6">
          

          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
              alt="property"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Modern Villa</h3>
              <p className="text-gray-500">Chandigarh</p>
              <p className="text-blue-600 font-bold mt-2">₹1.2 Cr</p>
            </div>
          </div>

         
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
              alt="property"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Luxury Apartment</h3>
              <p className="text-gray-500">zirkpur</p>

              <p className="text-blue-600 font-bold mt-2">₹85 Lakh</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"

              alt="property"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">


              <h3 className="text-xl font-semibold">Family big House</h3>

              <p className="text-gray-500">Mohali</p>
              <p className="text-blue-600 font-bold mt-2">₹65 Lakh</p>
            </div>
          </div>

        </div>
      </div>

    </div>

  );
  
}

export default Home;