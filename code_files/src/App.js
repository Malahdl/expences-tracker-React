import './App.css';
import { IncomeExpences } from './components/IncomeExpences';
import { AddTransaction } from './components/AddTransaction';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className='main-div'>
        <AddTransaction />
        <TransactionList />
        <IncomeExpences/>
      </div>
    </GlobalProvider>
  );
}

export default App;
