import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { ExpenseProvider } from "./contexts/ExpenseContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ExpenseProvider>
        <Header />
        <div className={`${styles["container-wrapper"]}`}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/create" element={<Create />} />
            <Route path="/catalog" element={<Details />} />  */}
          </Routes>
        </div>
        <Footer />
      </ExpenseProvider>
    </AuthProvider>
  );
}

export default App;
