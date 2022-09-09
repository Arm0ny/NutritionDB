import React from "react";
import {Component} from "react";
import './UserCard.css'

class UserCard extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        let person = this.props.person
        return(
            <div className='user-card'>
                <img className='user_card__img' alt='User Image'/>
                <div className='user_card__data'>
                    <p className='user_card__data__weight'>{person.current_w}Kg</p>
                    <p className='user_card__data__description'>Now</p>
                </div>
                <div className='user_card__progress'>
                    <div className='user_card__progress__data'>
                        <p  className='user_card__progress__data__label'>Progress</p>
                        <progress id='progress_slider' className='user_card__progress__data__bar' max={person.goal} value={person.current_w}/>
                        <div className='user_card__progress__data__sub-labels'>
                            <p className='user_card__progress__data__sub-labels__start'>{person.initial_w}</p>
                            <p className='user_card__progress__data__sub-labels__goal'>{person.goal}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserCard;