import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Pointeur from "./Pointeur";
import Login from "./Login";
import Navbar from "./Navbar";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="Login" element={<Login />} />
          <Route index element={
            <RequireAuth>
              <Pointeur />
            </RequireAuth>} />
          <Route path="Pointeur" element={<Pointeur />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
