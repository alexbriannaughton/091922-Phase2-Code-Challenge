import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [trans, setTrans] = useState([])
  const [search, setSearch] = useState("")

  const searchedT =
  trans.filter(t=>t.description.toLowerCase().includes(search.toLowerCase()))


  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then((r)=>r.json())
    .then((t)=>setTrans(t))
  },[])

  function handleAddT(newT){
    setTrans([...trans, newT])
  }

  function handleSearch(s){
    setSearch(s)
  }

  function handleDelete(deletedT){
    fetch(`http://localhost:8001/transactions/${deletedT.id}`, {
      method: "DELETE",
    })
    .then((r)=>r.json())
    .then(setTrans(
      trans.filter((t)=>t.id!==deletedT.id)
    )
    )
  }

  return (
    <div>
      <Search
      search={search}
      onSearchChange={handleSearch}
      />
      <AddTransactionForm
      onAddTran={handleAddT}/>
      <TransactionsList
      trans={trans}
      searchedT={searchedT}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default AccountContainer;
