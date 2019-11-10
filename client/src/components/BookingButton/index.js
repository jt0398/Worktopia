import React from "react";
import "./index.css";

function BookBtn(props) {
  return (
    <span className="btn-link" {...props} role="button" tabIndex="0">
      BOOK
    </span>
  );
}

export default BookBtn;
