"use client";

import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRef = useRef(null);
  const resultsRef = useRef(null);

  const toggleSearch = () => setShowSearch((prev) => !prev);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleKeyPress = async (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const data = await res.json();
        setSearchResults(data.products);
        setSearchTerm("");
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target) && resultsRef.current && !resultsRef.current.contains(e.target) && showSearch) {
        setShowSearch(false);
        setSearchResults([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showSearch]);

  return (
    <div className="relative" ref={searchRef}>
      <IoIosSearch className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer z-20 absolute top-[-11px] left-[-14px]" onClick={toggleSearch} />
      {showSearch && (
        <input
          type="text"
          placeholder="Search..."
          className="absolute top-[-10px] left-0 transform -translate-x-44 sm:-translate-x-55 -translate-y-1 w-47 sm:w-60 p-1 sm:p-2 border border-gray-300 rounded-md shadow-md transition-all duration-300 z-10 bg-white text-sm focus:outline-none focus:border-secondary-cherry-light focus:ring-1 focus:ring-secondary-cherry-light"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      )}

      {loading && (
        <div className="absolute top-full right-0 bg-white shadow-md w-[280px] sm:w-[400px] p-4 z-50 text-center">
          <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full border-current border-t-transparent text-secondary-cherry-light"></div>
          <p className="mt-2 text-xs sm:text-sm text-gray-500">Loading...</p>
        </div>
      )}

      {searchResults.length > 0 && !loading && (
        <div ref={resultsRef} className="absolute top-full right-5 bg-white shadow-md w-[280px] sm:w-[400px] p-4 z-50 max-h-[700px] overflow-y-auto">
          <h2 className="text-sm sm:text-lg font-bold mb-2">Search Results:</h2>
          <ul>
            {searchResults.map((product) => (
              <li key={`${product.id}-${product.thumbnail}`} className="py-4 border-b flex gap-4 text-sm sm:text-base">
                <Link href={`/products/${product.id}`} className="flex gap-4 w-full">
                  {product.thumbnail && product.thumbnail !== "" ? (
                    <Image src={product.thumbnail} alt={product.title} width={60} height={60} className="object-cover rounded-md" />
                  ) : (
                    <div className="w-16 h-16 bg-gray-300 rounded-md flex items-center justify-center">
                      <span className="text-white">No Image</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-md font-semibold">{product.title}</h3>
                    <p className="text-lg text-secondary-cherry-dark mt-1">{product.price},- kr DKK</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
