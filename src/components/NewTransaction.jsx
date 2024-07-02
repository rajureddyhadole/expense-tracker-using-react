import React, { useContext, useState} from 'react';
import { GlobalContext } from './GlobalState';

const NewTransaction = () => {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random()*100000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className='mt-6 mb-2 font-medium'>Add new transaction</h2>
      <hr  className='border-[1px] border-gray-400 mb-2'/>
      <h3 className='mb-2 font-medium'>Text</h3>
      <input className='bg-white border-[1px] w-full h-8 border-gray-300 p-2 font-medium shadow-md mb-2' value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Enter text...'/>
      <h3 className='mb-1 font-medium'>Amount</h3>
      <p className='mb-2 font-medium'>&#40; income-positive, expense-negative &#41;</p>
      <input className='border-[1px] font-medium w-full h-8 p-2 mb-2 border-gray-300 shadow-md' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' type="text" />
      <button className='w-full h-8 mt-2 mb-2 font-medium font-semibold text-white bg-purple-500 hover:bg-purple-600'>Add Transaction</button>
    </form>
  )
}

export default NewTransaction;
