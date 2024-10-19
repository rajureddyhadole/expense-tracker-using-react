import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import NewTransaction from "./components/NewTransaction";

import { GlobalProvider } from './components/GlobalState';

function App() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="max-w-sm p-5 mx-5 mt-12 mb-2 bg-gray-100 rounded-md shadow-lg">
        <GlobalProvider>
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <NewTransaction />
        </GlobalProvider>
      </div>
    </div>
  )
}

export default App;
