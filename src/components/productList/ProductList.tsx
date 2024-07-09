import useFetchProducts from "../../hooks/useFetchProducts";
import ProductCard from "../productCard/ProductCard";

const ProductList: React.FC = () => {
  const { productsList } = useFetchProducts();
  console.log(productsList);
  return (
    <div className="product-list">
      {productsList.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductList;
