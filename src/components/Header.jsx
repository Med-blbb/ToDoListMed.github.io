import React from "react";

export default function Header({ handleOnChange, Add,list }) {
  return (
    <div className="bg-light container w-75 rounded p-4">
      <input
        className="form-control text-center border-bottom  pb-2 "
        type="text"
        placeholder="What would you like to do ?"
        onChange={handleOnChange}
        value={list}
      />
      <button className="btn btn-danger mt-3 px-5" onClick={Add}>
        Add
      </button>
    </div>
  );
}
