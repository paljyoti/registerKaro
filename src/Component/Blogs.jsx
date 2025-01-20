import React from "react";
import blog1 from "../../src/assets/blog3.jpeg";
import blog2 from "../../src/assets/blog2.jpeg";
import blog3 from "../../src/assets/blog3.jpeg";
import blog4 from "../../src/assets/blog4.jpeg";
import blog5 from "../../src/assets/blog5.jpeg";
import blog6 from "../../src/assets/blog6.jpeg";

const Blogs = () => {
  const cards = [
    { id: 1, image: blog1, title: "Prabhash Mishra • 1 Jan 2023 • Today" },
    { id: 2, image: blog2, title: "Card 2" },
    { id: 3, image: blog3, title: "Card 3" },
    { id: 4, image: blog4, title: "Card 4" },
    { id: 5, image: blog5, title: "Card 5" },
    { id: 6, image: blog6, title: "Card 6" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <p></p>
      <h1 className="text-3xl font-bold text-center mb-6">Image Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h2>
              <div className="mt-4 flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  Button 1
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  Button 2
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs ;
