"use client";

import { PiHandbagLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false); // For loader

  // Refs for search input and results container
  const searchRef = useRef(null);
  const resultsRef = useRef(null);

  // Toggle search input visibility
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  // Handle the search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle the Enter key press to search and close the search field
  const handleKeyPress = async (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      setLoading(true); // Start loading
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data.products);
        setSearchTerm(""); // Clear the search input after Enter
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  // Close search field and results when clicking outside of them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target) && resultsRef.current && !resultsRef.current.contains(event.target) && showSearch) {
        setShowSearch(false); // Close the search input
        setSearchResults([]); // Clear the search results
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showSearch]);

  return (
    <header className={`w-full ${isHome ? "absolute top-0 left-0 bg-transparent" : "relative bg-white"}`}>
      <nav className="flex justify-between items-center px-5 py-4 sm:px-20 sm:py-10 text-(--color-secondary-cherry-dark) hover:bg-[rgba(255,255,255,0.5)] transition">
        <Link href="/" className="flex items-center gap-6">
          <Image src="/img/logo.svg" alt="logo" width={70} height={70} />
          <h3 className="hidden sm:block sm:text-3xl font-medium">Studio Rouge</h3>
        </Link>

        <div className="flex text-lg sm:text-xl gap-5 sm:gap-14">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>

        <div className="flex gap-4 sm:gap-10 items-center relative">
          <div className="relative" ref={searchRef}>
            <IoIosSearch className="w-8 h-8 cursor-pointer z-20 absolute top-[-15px] left-[-8px]" onClick={toggleSearch} />
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-[-14px] left-0 transform -translate-x-53 -translate-y-1 w-60 p-2 border border-gray-300 rounded-md shadow-md transition-all duration-300 z-10 bg-white focus:outline-none focus:border-secondary-cherry-light focus:ring-1 focus:ring-secondary-cherry-light"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress} // Trigger search on Enter key press
                autoFocus
              />
            )}
          </div>

          <Link href="/payment">
            <PiHandbagLight className="w-8 h-8 z-0" />
          </Link>
        </div>
      </nav>

      {/* Display search results */}
      {loading && (
        <div className="absolute top-full right-0 bg-white shadow-md w-[400px] p-4 z-50 text-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-current border-t-transparent text-secondary-cherry-light"></div>
          <p className="mt-2 text-sm text-gray-500">Loading...</p>
        </div>
      )}

      {searchResults.length > 0 && !loading && (
        <div ref={resultsRef} className="absolute top-full right-5 bg-white shadow-md w-[400px] p-4 z-50 max-h-[700px] overflow-y-auto">
          <h2 className="text-lg font-bold mb-2">Search Results:</h2>
          <ul>
            {searchResults.map((product) => (
              <li key={`${product.id}-${product.thumbnail}`} className="py-4 border-b flex gap-4">
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
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="text-lg text-secondary-cherry-dark mt-1">{product.price},- kr DKK</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
