import "./directoryItem.component.css";

const DirectoryItem = ({ title, description, imageurl, id }) => {
  return (
    <div className="container">
      <div
        className="directory-item"
        style={{
          backgroundImage: ` linear-gradient(
            0deg,
            #000000 -10.65%,
            rgba(157, 157, 157, 0) 50%
          ) ,url(${imageurl})`,
        }}
      >
        <div className="directory-item-card">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DirectoryItem;
