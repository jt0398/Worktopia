import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function Label(props) {
  return (

    <div>{props.children}</div>

  );
}

export function DropBox({ children }) {
  return (
    <>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select Value
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {children}
        </div>
      </div>
    </>
  )
}

export function DropBoxItem(props) {
  return (
    <a class="dropdown-item" href="#">Ontario </a>
  );

};

