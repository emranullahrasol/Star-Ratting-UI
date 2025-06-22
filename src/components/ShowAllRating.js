import { MdClose } from "react-icons/md";
import Star from "./Star";

const showAllStyle = {
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,0.1)",
  backdropFilter: "blur(10px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "1000",
};

const styleListHeader = {
  marginBottom: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "spaceBetween",
  borderBottom: "solid #ccc 2px",
  paddingBottom: "1.5rem",
};

const iconStyle = {
  position: "absolute",
  top: "1rem",
  right: "1rem",
  fontSize: "2.8rem",
  cursor: "pointer",
};

const listStyle = {
  background: "#fff",
  maxWidth: "600px",
  width: "100%",
  padding: "1.5rem 2rem",
  borderRadius: ".7rem",
  boxShadow: "0 0 4px 5px rgba(0,0,0,.1)",
  position: "relative",
};

const listItem = {
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  borderBottom: "solid #ccc 1px",
};

const flexStar = {
  display: "flex",
  gap: ".5rem",
};

const ShowAllRating = ({
  handelCloseModel,
  newRatingData,
  setNewRatingData,
  handleDelete,
}) => {
  return (
    <div style={showAllStyle}>
      <ul style={listStyle}>
        <div style={styleListHeader}>
          <h1 className="list-heading">All Rating Lists</h1>
          <MdClose style={iconStyle} onClick={handelCloseModel} />
        </div>
        {newRatingData.map((data) => (
          <li style={listItem} key={data.id}>
            <p>{data.description}</p>
            <p>{data.time}</p>
            <span style={flexStar}>
              {Array.from({ length: data.rate }, (_, i) => (
                <Star size={16} key={i} full={data.rate} />
              ))}
            </span>
            <p
              onClick={() => handleDelete(data.id)}
              style={{ cursor: "pointer", color: "red" }}
            >
              Delete
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAllRating;
