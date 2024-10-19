import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

const IncomeExpense = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts.filter(transaction => transaction > 0).reduce((acc, curr) => (acc += curr), 0).toFixed(2);

  const expense = (amounts.filter(transaction => transaction < 0).reduce((acc, curr) => (acc += curr), 0) * -1).toFixed(2);

  return (
    <div className='flex w-[100%] mt-4 border-[1px] py-2 justify-around shadow-md bg-white'>
      <div className='font-medium'>
        <p>INCOME</p>
        <p className='text-lg text-green-500'>${income}</p>
      </div>
      <div className='font-medium'>
        <p>EXPENSE</p>
        <p className='text-lg text-red-500'>${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpense
