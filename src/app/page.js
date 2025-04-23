import Image from "next/image";
import Card from "@/components/Card";
import ReviewCard, { ReviewBar } from "@/components/singleview/Reviews";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      <h1 className="text-secondary-cherry-dark text-3xl">Simpel Shop</h1>
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

      <div className="flex justify-center">
        <Button variant="primary">See products</Button>
      </div>
      <Footer />
    </div>
  );
}
