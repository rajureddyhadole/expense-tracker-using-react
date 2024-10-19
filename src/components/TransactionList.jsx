import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  return (
    <>
      <h2 className='mt-4 mb-2 text-lg font-medium'>History</h2>
      <ul>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

export default TransactionList
