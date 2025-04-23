//Katinka
//OBS lave den forskellig i forhold til forskellige skærm størrelser
import { PiHandbagLight } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-20 py-10 text-(--color-secondary-cherry-dark) hover:bg-white">
        <Link href="/" className="flex items-center gap-6">
          <Image src="/img/logo.svg" alt="logo" width={70} height={70}></Image>
          <h3 className="text-3xl font-medium">Studio Rouge</h3>
        </Link>
        <div className="flex gap-14 text-xl">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </div>
        <div className="flex gap-10">
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
