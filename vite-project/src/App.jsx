import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

  return (
    <>
      <h1>
        Transactions Form
      </h1>
      <form>
        <div>
        <label htmlFor="amount">Transation Amount: </label>
        <input id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
        </div>
        <label htmlFor="description">Transation Description: </label>
        <input id="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      </form>
    </>
  )
}

export default App
