import React from "react";
import {Component} from "react";
import './UserDashboard.css'
import UserCard from "../UserCard/UserCard";

export class UserDashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className='dashboard'>
                <div className='dashboard__upper-data'>
                    <div className='dashboard__upper-data__calories'>
                        <p className='dashboard__upper-data__calories__current'>500</p>
                        <p className='dashboard__upper-data__calories__daily'>/2000</p>
                    </div>
                    <div className='dashboard__upper-data__macros'>
                        <div className='dashboard__upper-data__macros__carbs'>
                            <p className='dashboard__upper-data__macros__carbs__label'>Carbs</p>
                            <progress className='dashboard__upper-data__macros__carbs__progress' max='100' value='50'></progress>
                        </div>
                        <div className='dashboard__upper-data__macros__protein'>
                            <p className='dashboard__upper-data__macros__protein__label'>Proteins</p>
                            <progress className='dashboard__upper-data__macros__protein__progress' max='100' value='50'></progress>
                        </div>
                        <div className='dashboard__upper-data__macros__fat'>
                            <p className='dashboard__upper-data__macros__fat__label'>Fat</p>
                            <progress className='dashboard__upper-data__macros__fat__progress' max='100' value='50'></progress>
                        </div>
                    </div>
                </div>

                <div className='dashboard__bottom-data'>
                    <div className='dashboard__bottom-data__breakfast'>
                        <p className='dashboard__bottom-data__breakfast__label'>Breakfast</p>
                        <progress className='dashboard__bottom-data__breakfast__progress' max='100' value='50'></progress>
                    </div>
                    <div className='dashboard__bottom-data__lunch'>
                        <p className='dashboard__bottom-data__lunch__label'>Lunch</p>
                        <progress className='dashboard__bottom-data__lunch__progress' max='100' value='50'></progress>
                    </div>
                    <div className='dashboard__bottom-data__dinner'>
                        <p className='dashboard__bottom-data__dinner__label'>Dinner</p>
                        <progress className='dashboard__bottom-data__dinner__progress' max='100' value='50'></progress>
                    </div>
                </div>

            </div>
        )
    }
}
export default UserDashboard;