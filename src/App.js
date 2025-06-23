import { useState } from "react";
import StarRating from "./components/StarRating";
import Button from "./components/Button";
import ShowAllRating from "./components/ShowAllRating";

const appContainerStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#dceffe",
  overflow: "hidden",
};

const App = () => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [openModal, setOpenModel] = useState(false);
  const [newRatingData, setNewRatingData] = useState(
    JSON.parse(localStorage.getItem("newRating")) || []
  );

  const handelOpenModel = () => {
    setOpenModel(true);
  };

  const handelCloseModel = () => {
    setOpenModel(false);
  };

  // HandelSubmit:-
  const HandelSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;
    if (rating === 0) return;

    console.log(rating);

    const newRating = {
      id: Date.now(),
      description,
      rate: rating,
      time: new Date().toLocaleTimeString(),
    };
    const newRatings = [...newRatingData, newRating];
    setNewRatingData(newRatings);
    localStorage.setItem("newRating", JSON.stringify(newRatings));
    setDescription("");
    setRating(0);
  };

  const handleDelete = (id) => {
    const newRatings = newRatingData.filter((item) => item.id !== id);
    localStorage.setItem("newRating", JSON.stringify(newRatings));
    setNewRatingData(newRatings);
  };

  return (
    <div style={appContainerStyle}>
      {openModal && (
        <ShowAllRating
          handelCloseModel={handelCloseModel}
          newRatingData={newRatingData}
          setNewRatingData={setNewRatingData}
          handleDelete={handleDelete}
        />
      )}
      {!openModal && (
        <StarRating
          rating={rating}
          setRating={setRating}
          description={description}
          setDescription={setDescription}
          onSubmit={HandelSubmit}
        />
      )}
      <div
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
        }}
      >
        <Button
          handleClick={handelOpenModel}
          text="Show all Rating"
          dBlock="block"
          width="200"
        />
      </div>
    </div>
  );
};

export default App;
