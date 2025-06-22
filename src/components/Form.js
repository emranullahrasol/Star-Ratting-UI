import React from "react";
import Button from "./Button";
const formStyle = {
  width: "100%",
  margin: "1.5rem 0",
};

const styleInputGroup = {
  display: "flex",
  flexDirection: "column",
  gap: ".8rem",
};

const styleLabel = {
  fontSize: "1.6rem",
  textAlign: "left",
  fontWeight: "400",
};

const styleTextArea = {
  padding: "1.5rem",
  borderRadius: ".5rem",
  border: "solid #ccc 1px",
  outline: "none",
  fontSize: "1.6rem",
  minHeight: "150px",
  resize: "none",
  color: "#929292",
};
const Form = ({ description, setDescription, maxChar = 100, onSubmit }) => {
  // Empty textarea:-
  const handelEmptyTextarea = (e) => {
    e.preventDefault();
    setDescription("");
  };
  return (
    <form style={formStyle} onSubmit={onSubmit}>
      <div style={styleInputGroup}>
        <label htmlFor="message" style={styleLabel}>
          Say something about us
        </label>
        <textarea
          disabled={description.length === maxChar}
          style={styleTextArea}
          id="message"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="write your reason here..."
        ></textarea>
        {description.length >= maxChar ? (
          <span style={{ textAlign: "left", color: "red" }}>
            You can't write any more character.
          </span>
        ) : (
          <span style={{ textAlign: "left", color: "#929292" }}>
            Max Length: {maxChar}
          </span>
        )}
      </div>
      <Button text="Empty textarea" handleClick={handelEmptyTextarea} />
      <Button text="Submit Reason" />
    </form>
  );
};

export default Form;
