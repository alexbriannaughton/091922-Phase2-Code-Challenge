import React from "react";

function Transaction({tran}) {
  return (
    <tr>
      <td>{tran.date}</td>
      <td>{tran.description}</td>
      <td>{tran.category}</td>
      <td>{tran.amount}</td>
    </tr>
  );
}

export default Transaction;
