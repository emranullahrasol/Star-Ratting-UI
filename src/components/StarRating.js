import { useState } from "react";
import Star from "./Star";
import Form from "./Form";

const starRaringContainer = {
  width: "400px",
  borderRadius: "1rem",
  padding: "5rem 1.5rem 2.5rem",
  backgroundColor: "#fff",
  boxShadow: "0 0 3px 5px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const starRatingHeading = {
  fontSize: "2.2rem",
  marginBottom: "1rem",
  fontWeight: "700",
};

const starRatingDescription = {
  fontSize: "1.6rem",
  fontWeight: "400",
  lineHeight: "1.4",
  textTransform: "capitalize",
  color: "#929292",
  marginBottom: "1.5rem",
};

const starStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  marginBottom: "2rem",
};

const StarRating = ({
  rating,
  setRating,
  description,
  setDescription,
  onSubmit,
}) => {
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
  };
  return (
    <div style={starRaringContainer}>
      <h2 style={starRatingHeading}>How was your Experience?</h2>
      <p style={starRatingDescription}>
        your feedback helps us to improve, tap a Star to rate your experience
      </p>
      <div style={starStyle}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={48}
            onRating={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
      <Form
        description={description}
        setDescription={setDescription}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default StarRating;
