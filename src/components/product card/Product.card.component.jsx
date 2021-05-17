import "./Product.card.component.css";

const ProductCard = (item) => {
  console.log(item);
  return (
    <div className="product-card">
      <img src={item.item.imageUrl} alt="" />
      <h2>{item.item.name}</h2>
      <p>{item.item.price}</p>
    </div>
  );
};

export default ProductCard;
