import './App.css';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import { ExpenseProvider } from './contexts/ExpenseContext';

function App() {
  return (
    <ExpenseProvider>
      <div className="container">
        <h1>Expense Tracker</h1>
        <Create />
        <Details />
      </div>
    </ExpenseProvider>
  );
}

export default App;
