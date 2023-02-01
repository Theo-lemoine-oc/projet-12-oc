import React from "react";
import PropTypes from 'prop-types';
import utils from './utils.css'

export const MainTitle = (props) => {
    const { user } = props;

    return (
        <div className="main-title">
            <h1>Bonjour <span>{ user.firstName }</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div> 
    )
}

  MainTitle.propTypes = {
    user: PropTypes.shape({
        firstname: PropTypes.string
    }).isRequired
  };

export default MainTitle;