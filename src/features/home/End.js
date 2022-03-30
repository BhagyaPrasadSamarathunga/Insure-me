import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const End = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/");
    }
    
    return(
        <div className='App-container'> 
            Thanks for completing this questionnaire.
            <div style={{marginTop:'30px'}}>
                <button className='App-button' onClick={() => {handleButtonClick()}}>Go Home</button>
            </div>
        </div>
    );
 }

 export default End;