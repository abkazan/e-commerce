"use client";

import { useEffect, useState } from "react";
import myProductData from "../../static/products.json";
import Image from "next/image";
import Link from "next/link";

interface Product {
  image: string;
  price: number;
  name: string;
}

interface ProductData {
  [key: string]: Product;
}

const productData: ProductData = myProductData;

export default function ProductDetails() {
  const initialProduct: Product = {
    image: "",
    price: 0,
    name: "",
  };
  const [product, setProduct] = useState<Product>(initialProduct);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = window.location.href.split("/")[4].slice(0, -3);
    console.log(productData[id]);
    setProduct(productData[id]);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <h1 className="flex-center text-3xl mt-20">Loading...</h1>
      ) : (
        <div className="flex-center flex-col pt-20 gap-5 sm:flex-row md:gap-20 lg:gap-40 xl:gap-40 2xl:gap-40">
          <Link href="/">
            <i className="fas fa-arrow-left backIcon text-4xl transform transition-transform hover:scale-95 active:scale-100"></i>
          </Link>
          
          <Image
            src={product["image"]}
            alt="image"
            className="rounded"
            width={250}
            height={250}
          />
          
          <div className="sm:self-start flex flex-col gap-10">
            <h1 className="font text-blue-400 flex-row text-2xl sm:text-4xl">
              {product["name"]}
            </h1>
            <h1 className="text-2xl font text-blue-400">
              ${product["price"]}.00
            </h1>

            <Link
              href={`https://www.google.com/search?tbm=isch&q=${product["name"]}`}
              target="_blank"
              className="text-xl text-blue-400 italic hover:underline"
            >

              More Images
            </Link>
            
          </div>
        </div>
      )}
    </>
  );
}
