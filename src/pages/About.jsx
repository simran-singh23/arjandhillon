import React from "react";

function About() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')",
      }}
    >
      <div className="bg-black bg-opacity-60 text-white p-10 rounded-xl max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Our Real Estate
        </h1>

        <p className="text-lg leading-relaxed text-center">
          Welcome to our real estate platform, where we help you find the perfect
          property that matches your dreams and lifestyle. Our mission is to make
          property buying, selling, and renting simple, transparent, and
          
          accessible for everyone. Whether you are looking for a peaceful
          residential home, a modern apartment, or a commercial space to grow
          your business, we provide a wide range of verified listings across
          prime locations like Mohali, Chandigarh, Zirakpur, and Panchkula.
          
          <br /><br />

          We believe that finding the right property is not just about buildings,
          but about creating a better future. Our platform is designed with a
          user-friendly interface, high-quality images, and detailed information
          so that you can make confident decisions. With our commitment to trust,
          quality, and customer satisfaction, we aim to deliver the best real
          estate experience for you. Explore properties, compare options, and
          take your next step towards your dream property with us.
        </p>
      </div>
    </div>
  );
}

export default About;