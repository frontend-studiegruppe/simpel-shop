import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {
  return (
    <div>
      <div>
        <VideoBackground />
        <div className="py-30">
          <h1 className="flex justify-center text-secondary-cherry-dark text-8xl font-bold ">Studio Rouge</h1>
          <div className="flex justify-center">
            <Link href="/products">
              <Button variant="primary">See products</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
