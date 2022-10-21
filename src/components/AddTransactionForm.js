import React, { useState } from "react";

function AddTransactionForm({onAddTran}) {
  const [date, setDate] = useState()
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      date: date,
      description: desc,
      category: category,
      amount: amount,
    }
    fetch('http://localhost:8001/transactions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((newt)=>onAddTran(newt))
  }


  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
