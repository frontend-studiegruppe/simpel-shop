"use client";

import { PiHandbagLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleBlur = () => {
    setShowSearch(false);
  };

  return (
    <header className={`w-full ${isHome ? "absolute top-0 left-0 bg-transparent" : "relative bg-white"}`}>
      <nav className="flex justify-between items-center px-5 py-4 sm:px-20 sm:py-10 text-(--color-secondary-cherry-dark) hover:bg-white relative">
        <Link href="/" className="flex items-center gap-6">
          <Image src="/img/logo.svg" alt="logo" width={70} height={70} />
          <h3 className="hidden sm:block sm:text-3xl font-medium">Studio Rouge</h3>
        </Link>

        <div className="flex text-lg sm:text-xl gap-5 sm:gap-14">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>

        <div className="flex gap-4 sm:gap-10 items-center relative">
          <div className="relative">
            <IoIosSearch className="w-8 h-8 cursor-pointer z-20 absolute top-[-15px] left-[-8px]" onClick={toggleSearch} />

            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-[-14px] left-0 transform -translate-x-53 -translate-y-1 w-60 p-2 border border-gray-300 rounded-md shadow-md transition-all duration-300 z-10 bg-white focus:outline-none
        focus:border-secondary-cherry-light focus:ring-1 focus:ring-secondary-cherry-light"
                autoFocus
                onBlur={handleBlur}
              />
            )}
          </div>

          <Link href="/payment">
            <PiHandbagLight className="w-8 h-8 z-0" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// //Katinka
// //OBS lave den forskellig i forhold til forskellige skærm størrelser
// import { PiHandbagLight } from "react-icons/pi";
// import { IoIosSearch } from "react-icons/io";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// const Header = () => {
//   const pathname = usePathname();
//   const isHome = pathname === "/";
//   return (
//     <header
//     className={`w-full ${
//       isHome
//         ? "absolute top-0 left-0 bg-transparent"
//         : "relative bg-white"
//     }`}>
//       <nav className="flex justify-between items-center px-5 py-4 sm:px-20 sm:py-10 text-(--color-secondary-cherry-dark) hover:bg-white">
//         <Link href="/" className="flex items-center gap-6">
//           <Image src="/img/logo.svg" alt="logo" width={70} height={70}></Image>
//           <h3 className="hidden sm:block sm:text-3xl font-medium ">
//             Studio Rouge
//           </h3>
//         </Link>
//         <div className="flex text-lg sm:text-xl gap-5 sm:gap-14 ">
//           <Link href="/">Home</Link>
//           <Link href="/products">Products</Link>
//         </div>
//         <div className="flex gap-4 sm:gap-10">
//           <IoIosSearch className="w-8 h-8 cursor-pointer" />
//           <Link href="/payment">
//             <PiHandbagLight className="w-8 h-8" />
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
