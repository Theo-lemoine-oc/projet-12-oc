import React from "react";
import PropTypes from 'prop-types';
import utils from './utils.css'

import caloriesIcon from '../../assets/img/calories-icon.svg';
import proteinIcon from '../../assets/img/protein-icon.svg';
import carbsIcon from '../../assets/img/carbs-icon.svg';
import fatIcon from '../../assets/img/fat-icon.svg';


export const FiguresCard = (props) => {
    const { user } = props;
    console.log(user)

    return (
        <div>
            <div className="card">
                <img src={ caloriesIcon } alt="" />
                <div>
                    <span className="card-information">
                        { user.keyData.calorieCount }kCal
                        <span>Calories</span>
                    </span>
                </div>
            </div>

            <div className="card">
                <img src={ proteinIcon } alt="" />
                <div>
                    <span className="card-information">
                        { user.keyData.proteinCount }g
                        <span>Proteines</span>
                    </span>
                </div>
            </div>

            <div className="card">
                <img src={ carbsIcon } alt="" />
                <div>
                    <span className="card-information">
                        { user.keyData.carbohydrateCount }g
                        <span>Glucides</span>
                    </span>
                </div>
            </div>

            <div className="card">
                <img src={ fatIcon } alt="" />
                <div>
                    <span className="card-information">
                        { user.keyData.lipidCount }g
                        <span>Lipides</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

FiguresCard.propTypes = {
    user: PropTypes.shape({
        keyData: PropTypes.object
    }).isRequired
  };

export default FiguresCard;