import Square from "./components/Square";
import myProductData from './static/products.json'


interface Product {
  image: string;
  price: number;
  name: string;
}

interface ProductData {
  [key: string]: Product;
}

const productData: ProductData = myProductData;

export default function Home() {
  
  
  return (
    <div className="flex-center flex-col h-auto pb-10">
      <div className="flex-center flex-row ">
        <h1 className="text-4xl title sm:text-6xl">SneakerCop</h1>
        <i className="fas fa-shopping-cart cartIcon sm:text-4xl text-2xl pt-10 transform transition-transform hover:scale-95 active:scale-100"></i>
      </div>
      

      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
        
        {Object.keys(productData).map((key) => (
          <Square size={250} color={"#00a2ff"} price={productData[key].price} image={productData[key].image} title={productData[key].name} productKey={key} key={key}/>
        ))}

      </div>
      
    </div>
    
  );
}
