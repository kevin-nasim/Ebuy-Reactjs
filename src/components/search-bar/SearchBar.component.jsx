import "./searchbar.component.css";

const SearchBar = () => {
  return (
    <div className="container">
      <div className="search-bar">
        <h1>Shop</h1>
        <input
          className="search-bar-shop"
          type="text"
          placeholder="Search for a product"
        />
      </div>
    </div>
  );
};

export default SearchBar;
