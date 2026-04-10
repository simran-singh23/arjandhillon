import React from "react";

function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Contact</h1>

      <form className="flex flex-col gap-4 mt-4 max-w-md">
        <input type="text" placeholder="Name" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <textarea placeholder="Message" className="p-2 border rounded" />
        <button className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default Contact;