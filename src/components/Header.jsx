//Katinka
//OBS lave den forskellig i forhold til forskellige skærm størrelser
import { PiHandbagLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-5 py-4 sm:px-20 sm:py-10 text-(--color-secondary-cherry-dark) hover:bg-white">
        <Link href="/" className="flex items-center gap-6">
          <Image src="/img/logo.svg" alt="logo" width={70} height={70}></Image>
          <h3 className="hidden sm:block sm:text-3xl font-medium ">
            Studio Rouge
          </h3>
        </Link>
        <div className="flex text-lg sm:text-xl gap-5 sm:gap-14 ">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>
        <div className="flex gap-4 sm:gap-10">
          <IoIosSearch className="w-8 h-8 cursor-pointer" />
          <Link href="/payment">
            <PiHandbagLight className="w-8 h-8" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
