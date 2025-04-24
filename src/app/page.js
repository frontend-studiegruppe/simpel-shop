import Image from "next/image";
import Card from "@/components/Card";
import ReviewCard, { ReviewBar } from "@/components/singleview/Reviews";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";
import SizeDropdown from "@/components/singleview/SizeDropdown";
import Quantity from "@/components/QuantityDropdown";
import Wishlistbutton from "@/components/WishlistButton";

export default function Home() {
  return (
    <div>
      <h1 className="flex justify-center text-secondary-cherry-dark text-8xl font-bold ">Studio Rouge</h1>
      <div className="flex justify-center">
        <Link href="/products">
          <Button variant="primary">See products</Button>
        </Link>
      </div>
      <SizeDropdown size="s" />
      <SizeDropdown size="m" />
      <Quantity size="s" />
      <Quantity size="m" />
      <Wishlistbutton />

      <p>Eksempel på brødtekst</p>
      <Card></Card>
      {/* Nedenstående review div kan slettes fra page. Er her kun for at vise :) */}
      <div className="flex overflow-scroll">
        <div className="flex gap-5 shrink-0">
          <ReviewCard>
            <ReviewBar></ReviewBar>
          </ReviewCard>
          <ReviewCard>
            <ReviewBar></ReviewBar>
          </ReviewCard>
          <ReviewCard>
            <ReviewBar></ReviewBar>
          </ReviewCard>
          <ReviewCard>
            <ReviewBar></ReviewBar>
          </ReviewCard>
          <ReviewCard>
            <ReviewBar></ReviewBar>
          </ReviewCard>
        </div>
      </div>
      <Footer />
    </div>
  );
}
