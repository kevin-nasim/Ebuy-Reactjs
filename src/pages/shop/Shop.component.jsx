import { useState, useEffect } from "react";

import SHOP_DATA from "./shopdata";
import Navbar from "../../components/navbar/Navbar.component";
import PreviewShop from "../../components/preview shop/Preview.shop.component";
import SearchBar from "../../components/search-bar/SearchBar.component";

const Shop = () => {
  const [shopData, setShopData] = useState([]);

  console.log(shopData);
  useEffect(() => {
    setShopData(SHOP_DATA);
  }, []);

  return (
    <div>
      <Navbar invert={1} />
      <SearchBar />

      {shopData.map(({ id, ...otherShopdata }) => (
        <PreviewShop key={id} {...otherShopdata} />
      ))}
    </div>
  );
};

export default Shop;
