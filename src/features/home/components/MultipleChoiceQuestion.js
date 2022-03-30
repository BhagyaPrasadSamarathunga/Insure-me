import React, { useState, useEffect }from 'react';
import Choice from './choice/Choice';

const MultipleChoiceQuestion = ({question, onSelectAnswer}) => {

    const[choice,setChoices] = useState();
    const [selectedChoice, setSelectedChoice] = useState(-1);

    useEffect(()=>{
        setChoices(question.choices);
        if(question.answer !== "" ){
            setSelectedChoice(parseInt(question.answer))
        } else {
            setSelectedChoice(-1);
        }
    },[question.choices]);

    const handdleSelectedChoice = (id)=>{
        setSelectedChoice(id);
        onSelectAnswer(String(id));
    }

return (
    <div>
        <div style={{margin:'5px'}}>{question.headline}</div>
        <div>
        {choice && choice.map((item,index) => {
                    return  <Choice id={index} choice={item} selectedChoice={selectedChoice} onChoiceClick={(id)=>handdleSelectedChoice(id)}/>;
                })}
        </div>
    </div>
)
}

export default MultipleChoiceQuestion;