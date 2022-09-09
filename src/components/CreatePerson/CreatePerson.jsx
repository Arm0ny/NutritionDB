import React, {useContext, useState} from "react";
import {Component} from "react";
import './createPerson.css'
import Axios from "axios";
import {UserContext} from "../../Context/UserContext";
import {useNavigate} from "react-router-dom";

const CreatePerson = () => {
    const [full_name, setName] = useState('');
    const [weight, setWeight] = useState(0);
    const [goal, setGoal] = useState(0)
    const [daily_calories, setCalories] = useState(0)
    const {UUID} = useContext(UserContext)
    const navigate = useNavigate()


    function handleClick(event){
        event.preventDefault()
        Axios.post('http://localhost:3009/create', {
            full_name,
            weight,
            goal,
            daily_calories,
            UUID
        }).then((response) => {
            navigate('/')
        });
    }

        return(
            <>
                <form className='person-form'>
                    <div>
                        <label htmlFor='full-name'>Full Name</label>
                        <input id='full-name' type='text' onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor='weight'>Weight</label>
                        <input id='weight' type='number' onChange={(e) => setWeight(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor='goal'>Goal</label>
                        <input id='goal' type='number' onChange={(e) => setGoal(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor='daily-calories'>Daily Calories</label>
                        <input id='daily-calories' type='number' onChange={(e) => setCalories(e.target.value)}/>
                    </div>

                    <button onClick={handleClick}>Create</button>
                </form>
            </>
        )

}
export default CreatePerson