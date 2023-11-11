import React from "react";
import { RxCross2 } from "react-icons/rx";
export default function List({ lists, Close, handleOnStatus }) {
  return (
    <div className="bg-light container mt-3 rounded">
      <div>
        <h4>Todo List</h4>
      </div>
      <div className="">
        <table className="table table-striped">
          <thead className="">
            <tr>
              <th scope="col">List</th>
              <th scope="col">Status</th>
              <th scope="col">Close</th>
            </tr>
          </thead>
          {lists.map((list, index) => (
            <tbody>
              <tr scope="row" key={index}>
                <td>{list.text}</td>
                <td>
                  <button
                    onClick={() => handleOnStatus(index)}
                    className={
                      !list.status ? "btn btn-warning" : "btn btn-success"
                    }
                  >
                    {!list.status ? "Pending ..." : "Completed"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => Close(index)}
                    className="btn btn-danger"
                  >
                    <RxCross2 />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
