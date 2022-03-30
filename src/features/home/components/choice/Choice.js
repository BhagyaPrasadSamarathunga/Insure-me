import React, { useState,useEffect } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const Choice = ({id, choice, selectedChoice, onChoiceClick}) => {

     const [isSelected,setSelectedStatus]= useState(false);
    
    useEffect(() => {
        const showHideClicable = ()=> {
            if (selectedChoice === id){
                setSelectedStatus(true);
            }
            else {
                setSelectedStatus(false);
            }
        }
        showHideClicable();
      },[selectedChoice]);

    return(
    <div> 
        <button className='App-button choice-buttons ' onClick={() => {onChoiceClick(id)}}>
            <label className='choice-button-label'>A</label>
            {choice.label}
            {
            isSelected? 
                    <div className='choice-button-select'>
                    <AiOutlineCheck />
                    </div>
                :null
            }
        </button>
    </div>
    ) ;

 }

 export default Choice;