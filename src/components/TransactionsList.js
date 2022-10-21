import React from "react";
import Transaction from "./Transaction";

function TransactionsList({searchedT, handleDelete, sortByCat, sortByDesc}) {

  function sortLowToHigh(property) {
    return function (a, b) {
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;

        return 0;
    }
}

  if (sortByCat) {
    searchedT.sort(sortLowToHigh("category"))
  }

  if (sortByDesc) {
    searchedT.sort(sortLowToHigh("description"))
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">X</h3>
          </th>
        </tr>
        {searchedT.map((tran)=>(
          <Transaction
          tran={tran}
          key={tran.id}
          handleDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
