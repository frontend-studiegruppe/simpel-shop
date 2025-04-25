"use client";

import Image from "next/image";
import { useState } from "react";

const Gallery = ({images}) => {
    const [activeImg, setActiveImg] = useState(images[0]);
    return ( <div>
        <div>
            <Image src={activeImg} alt="Aktivt billede" width={400} height={400}/>
        </div>
        <div className="flex gap-4 my-4">
        {images.slice(0, 3).map((img, index) => (
          <figure
            key={index}
            onClick={() => setActiveImg(img)}
            className="cursor-pointer hover:bg-gray-100"
          >
            <Image src={img} alt={`Thumbnail ${index + 1}`} width={100} height={100} />
          </figure>
        ))}
        </div>
    </div> );
}
 
export default Gallery;