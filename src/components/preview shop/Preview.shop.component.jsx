import "./preview.shop.component.css";

const PreviewShop = ({ title, items }) => {
  console.log(items);

  return (
    <div className="preview-shop">
      <h1>{title}</h1>
      <div className="preview">
        {items.map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

export default PreviewShop;
