"use client";


import SearchBar from "./SearchBar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CartIcon from "./CartIconHeader";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`w-full ${isHome ? "absolute top-0 left-0 bg-transparent" : "relative bg-white"}`}>
      <nav className="flex justify-between items-center px-5 py-4 sm:px-20 sm:py-10 text-(--color-secondary-cherry-dark) hover:bg-[rgba(255,255,255,0.5)] transition">
        <Link href="/" className="flex items-center gap-4 sm:gap-6">
          <Image src="/img/logo.svg" alt="logo" width={50} height={50} className="sm:w-[70px] sm:h-[70px]" />
          <h3 className="hidden sm:block sm:text-3xl text-base font-medium">Studio Rouge</h3>
        </Link>

        <div className="flex text-sm sm:text-xl gap-3 sm:gap-14">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>

        <div className="flex gap-4 sm:gap-10 items-center relative">
          <SearchBar />
          <CartIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
