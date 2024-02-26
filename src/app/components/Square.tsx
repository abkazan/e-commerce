import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface SquareProps {
    color: string;
    size: number;
    price: number;
    image: string;
    title: string;
    productKey: string;
}

const Square: React.FC<SquareProps> = ({ color, size, price, image, title, productKey }) => {
    return (
      <Link href={`/view-product/${productKey}}`}>
    
  
      <div 
        className="transform transition-transform hover:scale-95 active:scale-100 rounded flex-center flex-col coolGradient" 
          style={{ width: `${size}px`, height: `${size + 50}px`, backgroundColor: color}}>
        <Image src={image} width={150} height={150} alt="image" className="rounded" />
        <div className="mt-5 self-start ml-12">
          <p className="font-bold text-sm">{title}</p>
          <p className="text-sm">${price}.00</p>
        </div>
        
      </div>
      
      </Link>
    );
  };
  
  export default Square;