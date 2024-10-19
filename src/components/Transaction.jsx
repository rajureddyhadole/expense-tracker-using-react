import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className='border-[1px] bg-white rounded-md shadow-md h-12 mt-2 flex justify-between px-4 items-center font-medium'
      id={transaction.amount < 0 ? 'minus' : 'plus'}>
      <span>{transaction.text}</span>
      <span>{transaction.amount}</span>
      <button className='text-xl font-semibold' onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}

export default Transaction;
