import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import NewTransaction from "./components/NewTransaction";

import {GlobalProvider} from './components/GlobalState';

function App() {
  return (
    <div className="max-w-sm px-4 pt-4 pb-2 mx-auto mt-12 mb-2 bg-gray-100">
    <GlobalProvider>
    <Header />
    <Balance />
    <IncomeExpense />
    <TransactionList />
    <NewTransaction />
    </GlobalProvider>
    </div>
  )
}

export default App;
