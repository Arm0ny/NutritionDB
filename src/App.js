/* eslint-disable no-unused-vars */
import "./App.css";
import {
  NutritionistDashboard,
  CreatePerson,
  Register,
  Login,
} from "./components";
import Axios from "axios";
import { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { UserProvider, UserContext } from "./Context/UserContext";

function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePerson />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route
            path="/"
            element={
              isAuth ? <NutritionistDashboard /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
{
  /*<CreatePerson setActive={this.setActive} />*/
}
