import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {
  return (
    <div>
      <VideoBackground />
      <div className="h-screen flex flex-col justify-around items-center gap-10">
        <div className="py-30 ">
          <h1 className="text-center text-secondary-cherry-dark text-8xl font-bold ">Studio Rouge</h1>
          <div className="flex justify-center mt-10">
            <Link href="/products">
              <Button variant="primary">See products</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
