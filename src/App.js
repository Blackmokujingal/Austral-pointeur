import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Pointeur from "./CheckIn";
import Login from "./Login";
import Navbar from "./Navbar";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import CheckIn from "./CheckIn";

function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser)

  return (
    <div className="bg-gray-800 ">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="Login" element={<Login />} />
          <Route index element={
            <RequireAuth>
              <CheckIn/>
            </RequireAuth>} />
          <Route path="Pointeur" element={<CheckIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
