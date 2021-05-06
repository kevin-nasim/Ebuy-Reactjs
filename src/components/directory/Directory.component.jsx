import { useState, useEffect } from "react";
import DirectoryItem from "../directory item/DirectoryItem.component";
import "./directory.component.css";

const Directory = () => {
  const [directoryItems, setDirectoryItems] = useState([]);

  useEffect(() => {
    setDirectoryItems([
      {
        title: "Hats",
        description: "Hats made with the finest quality",
        imageUrl:
          "https://images.unsplash.com/photo-1564866774036-35255ee24c9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        id: 1,
        linkUrl: "hats",
      },
      {
        title: "T-shirts",
        description: "T-shirts made to fit you",
        imageUrl:
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        id: 2,
        linkUrl: "",
      },
      {
        title: "Pants",
        description: "Pants that are just right",
        imageUrl:
          "https://images.unsplash.com/photo-1548883354-7622d03aca27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        id: 3,
        linkUrl: "",
      },
      {
        title: "Hoodies",
        description: "Comfy hoodies for you",
        imageUrl:
          "https://images.unsplash.com/photo-1512977141980-8cc662e38a0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80",
        id: 4,
        linkUrl: "",
      },
    ]);
  }, []);

  return (
    <div className="directory">
      <div className="container">
        <div className="directory-shop-now">
          <p>best seller</p>
          <div className="line-break"></div>
          <p>Shop now</p>
        </div>

        {directoryItems.map(({ id, ...otherDirectoryprops }) => (
          <DirectoryItem key={id} {...otherDirectoryprops} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
