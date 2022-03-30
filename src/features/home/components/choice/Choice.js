import React, { useState,useEffect } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

import {indexToAlpha} from '../../../../helper/utils'

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
        <button className='choice-buttons ' onClick={() => {onChoiceClick(id)}}>
            <label className='choice-button-label'>{indexToAlpha(id)}</label>
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