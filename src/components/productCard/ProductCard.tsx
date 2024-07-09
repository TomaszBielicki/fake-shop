const ProductCard = (props: {
  product: {
    title: string;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    category: string;
    description: string;
    id: number;
  };
}) => {
  const { title, image, price, rating, category, description, id } =
    props.product;

  const addClickHandler = () => {
    console.log(id);
  };

  return (
    <>
      <div className="card">
        <h1 className="card__text">{category}</h1>
        <img className="card__img" src={image} />
        <p className="card__head-text">{title}</p>
        <p className="card__text">{price}$</p>
        <button onClick={addClickHandler}>Add to cart</button>
      </div>
    </>
  );
};

export default ProductCard;
