import React from "react";

function Transaction({ tran, handleDelete }) {
  return (
    <tr>
      <td>{tran.date}</td>
      <td>{tran.description}</td>
      <td>{tran.category}</td>
      <td>{tran.amount}</td>
      <td>
        <button
          className="delete"
          onClick={e => handleDelete(tran)}>
          delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
