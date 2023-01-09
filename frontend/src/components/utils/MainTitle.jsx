import React from "react";
import utils from './utils.css'
import { GetID } from "../../hooks/GetID";
import { useParams } from 'react-router-dom';

export const MainTitle = (props) => {
    const { user } = props;

    return (
        <div className="main-title">
            <h1>Bonjour <span>{ user.userInfos.firstName }</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div> 
    )
}

export default MainTitle;