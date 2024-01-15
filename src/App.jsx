import "./App.css";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { ExpenseProvider } from "./contexts/ExpenseContext";

function App() {
  return (
    <ExpenseProvider>
      <Header />
      <Login />
      <Register />
      <div className="container">
        <h1>Expense Tracker</h1>
        <Create />
        <Details />
      </div>
    </ExpenseProvider>
  );
}

export default App;
