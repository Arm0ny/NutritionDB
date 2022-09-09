import React from "react";
import { useState, useEffect, useContext } from "react";
import Axios from "axios";
import "./NutritionistDashboard.css";
import {UserDashboard, UserCard} from "../index";
import {UserContext} from "../../Context/UserContext";
import {Link} from "react-router-dom";

const NutritionistDashboard = () => {
  const {UUID} = useContext(UserContext)
  const [people, setPeople] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:3009/people", {UUID}).then((response) => {
        const peopleArray = [];
        for (let key in response.data) {
          peopleArray.push({ ...response.data[key] });
        }
        setPeople(peopleArray);
      });
  }, []);

  const Cards = people.map((e, k) => {
    return <UserCard person={e} key={k} />;
  });
  return (
    <div className="nutritionist-dashboard">
      <div className="nutritionist-dashboard__cards">
        {Cards}
        <Link to='/create'>Add New</Link>
      </div>
      <UserDashboard />
    </div>
  );
}
export default NutritionistDashboard;
