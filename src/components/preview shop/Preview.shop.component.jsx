import ProductCard from "../product card/Product.card.component";
import "./preview.shop.component.css";

const PreviewShop = ({ title, items }) => {
  return (
    <div className="container">
      <div className="preview-shop">
        <h1 className="preview-shop-title">{title}</h1>
        <div className="preview">
          {items.map((item) => (
            <div className="preview-items-scroll">
              <ProductCard key={item.name} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewShop;
