import React from "react";
import { useParams } from "react-router-dom";

function PropertyDetail() {
  const { type } = useParams();

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">
        {type.toUpperCase()} PROPERTY
        
      </h1>

      <p className="text-gray-600">
        Here you can see all details about {type} properties.
      </p>
    </div>
  );
}

export default PropertyDetail;