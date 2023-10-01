import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import ProductSearch from "./ProductSearch"; // Adjust the path accordingly
import product1Image from "../assets/headphones.png";
import product2Image from "../assets/Iphone.png";
import product3Image from "../assets/gpu.png";
import product4Image from "../assets/mouse.png";
import product5Image from "../assets/car.png";
import product6Image from "../assets/horse.png";

const ProductsList = () => {
  const [products] = useState([
    {
      id: 1,
      image: product1Image,
      title: 'Urbanista Noise Cancelling Headphones',
      price: 200,
      date: new Date("2023-10-15"),
    },
    {
      id: 2,
      image: product2Image,
      title: 'Iphone 15',
      price: 799,
      date: new Date("2023-10-10"),
    },
    {
      id: 3,
      image: product3Image,
      title: 'GeForce RTX 2080 Ti',
      price: 499,
      date: new Date("2023-10-20"),
    },
    {
      id: 4,
      image: product4Image,
      title: 'SteelSeries Prime Wireless Mouse ',
      price: 100,
      date: new Date("2023-10-05"),
    },
    {
      id: 5,
      image: product5Image,
      title: '1961 Jaguar E-Type Coupe',
      price: 50000,
      date: new Date("2023-10-3"),
    },
    {
      id: 6,
      image: product6Image,
      title: 'Race Horse',
      price: 10000,
      date: new Date("2023-10-08"),
    },
  ]);

  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortCriteria, setSortCriteria] = useState(""); 

  const handleSearch = (query) => {
    // If the query is empty, show all items
    if (!query.trim()) {
      setFilteredProducts(products);
    } else {
      // Filter products based on the search query
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };
   const handleSortChange = (criteria) => {
    // Update the sorting criteria and sort the products
    setSortCriteria(criteria);
    sortProducts(criteria);
  };

  const sortProducts = (criteria) => {
    let sortedProducts = [...filteredProducts];
    if (criteria === "price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (criteria === "date") {
      sortedProducts.sort((a, b) => a.date - b.date);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-black font-semibold text-black mb-2">Upcoming Auctions</h1>
        {/* Horizontal rule */}
        <hr className="border-t border-black" />
      </div>

      {/* ProductSearch component with onSearch prop */}
      <ProductSearch onSearch={handleSearch} />
      
      <div className="flex items-center justify-end mb-4">
        <div className="mr-2 text-black">Sort by:</div>
        <select
          onChange={(e) => handleSortChange(e.target.value)}
          className="border rounded py-1 px-2 bg-white text-black"
        >
          <option value="">None</option>
          <option value="price">Price</option>
          <option value="date">Date</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-2 bg-white shadow-lg text-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-cover rounded mx-auto"
            />
            <h2 className="text-md font-semibold mt-2 text-black">{product.title}</h2>
            <p className="text-gray-400 mt-1">Price: ${product.price}</p>
            <p className="text-gray-400 mt-1">Date: {product.date.toDateString()}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 mt-2">
              Bid Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ProductsList, "ProductsList");
