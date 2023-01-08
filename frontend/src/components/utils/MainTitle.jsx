import React from "react";
import utils from './utils.css'
import { GetID } from "../../hooks/GetID";
import { useParams } from 'react-router-dom';

export const MainTitle = () => {
    const { id } = useParams();
    const { data, isLoading, hasError } = GetID(id);

    if(isLoading) {
        return (
            <div></div>
        )
    }

    if(hasError) {
        return (
        <div></div>
        )
    }

    if(data) {
        return (
            <div className="main-title">
                <h1>Bonjour <span>{ data.userInfos.firstName }</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div> 
        )
    }
}

export default MainTitle;