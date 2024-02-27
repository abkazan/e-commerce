
export interface Product {
    image: string;
    price: number;
    name: string;
}


export interface ProductData {
    [key: string]: Product;
}