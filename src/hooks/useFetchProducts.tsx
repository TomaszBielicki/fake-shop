import { useEffect, useState } from "react";

const URL = "https://fakestoreapi.com/products";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const useFetchProducts = () => {
  const [productsList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(URL);
        const json: Product[] = await result.json();

        setProductList(json);
      } catch (err) {
        console.log("error");
      } finally {
      }
    };
    fetchData();
  }, [URL]);

  return { productsList };
};

export default useFetchProducts;
