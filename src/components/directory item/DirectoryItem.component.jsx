import { withRouter } from "react-router-dom";
import "./directoryItem.component.css";

const DirectoryItem = ({
  title,
  description,
  imageUrl,
  history,
  linkUrl,
  match,
}) => {
  return (
    <div className="container">
      <div
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        className="directory-item"
        style={{
          backgroundImage: ` linear-gradient(
            0deg,
            #000000 -10.65%,
            rgba(157, 157, 157, 0) 50%
          ) ,url(${imageUrl})`,
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

export default withRouter(DirectoryItem);
