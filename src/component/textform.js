import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");

  return (
    <div>
      <div className="mb-3">
        <textarea
          className={`form-control bg-${
            props.mode === "dark" ? "dark" : ""
          } text-${props.mode === "light" ? "dark" : "light"}`}
          id="mybox"
          rows="5"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          setText(text.toUpperCase());
          props.showAlert("success", "Text changed to uppercase", "block");
        }}
      >
        Convert to uppercase
      </button>
      <button
        className="btn btn-secondary ms-3"
        onClick={(e) => {
          setText(text.toLowerCase());
          props.showAlert("success", "Text changed to lowercase", "block");
        }}
      >
        Convert to lowercase
      </button>
      <button
        className="btn btn-primary ms-3"
        onClick={(e) => {
          setText(
            text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase()
          );
          props.showAlert(
            "success",
            "First letter of text changed to uppercase",
            "block"
          );
        }}
      >
        Convert first letter to Uppercase
      </button>
      <button
        className="btn btn-secondary ms-3"
        onClick={(e) =>
          text.toLowerCase().includes("http://") ||
          text.toLowerCase().includes("https://")
            ? (setText(text.trim().split("").join(" ").toString()),
              props.showAlert("success", "Text changed to uppercase", "block"))
            : props.showAlert("danger", "Not a url", "block")
        }
      >
        Make safe url
      </button>
      <button
        className="btn btn-primary ms-3"
        onClick={(e) => {
          setText("");
          props.showAlert("success", "Text cleared", "block");
        }}
      >
        {" "}
        Clear text
      </button>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(" ").length} words and{" "}
          {text.trim().length} characters
        </p>
        <p>
          {(
            0.008 * (text.trim() === "" ? 0 : text.trim().split(" ").length)
          ).toFixed(2)}{" "}
          Minutes read.
        </p>
        <h2>Preview:</h2>
        <p>{text.trim() === "" ? "Enter the text above to preview" : text}</p>
      </div>
    </div>
  );
};
export default Form;
