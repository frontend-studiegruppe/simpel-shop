import Image from "next/image";
import Card from "@/components/Card";
import { ReviewBar } from "@/components/singleview/Reviews";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      <h1 className="text-secondary-cherry-dark text-3xl">Simpel Shop</h1>
      <p>Eksempel på brødtekst</p>
      <Card></Card>
      <ReviewBar></ReviewBar>
      <div className="flex justify-center">
        <Button variant="primary">See products</Button>
      </div>
      <Footer />
    </div>
  );
}
