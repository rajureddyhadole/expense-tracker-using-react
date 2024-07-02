import React, {useContext} from 'react';
import { GlobalContext } from './GlobalState';

const Balance = () => {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce( (acc, curr) => (acc += curr), 0).toFixed(2);

  return (
    <>
    <h2 className='mt-6 text-sm font-medium'>YOUR BALANCE</h2>
    <p className='text-2xl font-semibold'>${total}</p>
    </>
  )
}

export default Balance;

