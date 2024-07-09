import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>product detail</h1>
      <p>{params.id}</p>
    </>
  );
};

export default ProductDetailPage;
