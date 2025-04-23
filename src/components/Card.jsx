import Image from "next/image";
import exampleImg from "@/img/example.png"

const Card = () => {
    return ( <div className="group max-w-[250px]">
        <div className="relative">
        <Image src={exampleImg} alt="eksempel" className=" group-hover:brightness-50 transition duration-300 ease-in-out"/>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <button>eksempel</button>
        </div>
        </div>
        <div className="flex justify-between font-light py-2">
            <h3>Product Name</h3>
            <h3>10kr</h3>
        </div>
    </div> );
}
 
export default Card;