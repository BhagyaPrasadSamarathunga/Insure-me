import React,{useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import {QuestionList,ButtonType} from '../../config/Constants';
import Question from './components/Question';
import '../../App.css';
import '../../resources/CSSTransition.css'

const Questionnaire = () => {
    const[questionID, setQuestionID] = useState(0);
    const questions = QuestionList.questionnaire.questions;
    const [showMessage, setShowMessage] = useState(false);
    const [questionnaire, setQuestionnaire] = useState(questions);
    const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();
    
    useEffect(()=>{
        const updatedQuestions = questions.map(item => ({ ...item, answer: '' }));
        setQuestionnaire(updatedQuestions);

    },[]);

    const handdleArrowButton = (type) => {
        if(isSubmit) {
            navigate("/end");
            return;
        }
        let qId = questionID;
        if(type === ButtonType.PREV_BUTTON && questionID >0){
            qId = qId - 1;
        }
        if(type === ButtonType.NEXT_BUTTON && (questionID < (questions.length-1))){
            qId = qId + 1;
        }

        setQuestionID(qId);
        if(qId === (questions.length-1)) {
            setIsSubmit(true);
            
        } else {
            setIsSubmit(false);
        }

    }

    const handleAnswer = (qAnswer)=>{
        let updatedArray = [...questionnaire];
        updatedArray[questionID].answer = qAnswer;
        
        setQuestionnaire(updatedArray);
    }

    return (
        <div className='App-container'>                                                     
            <div className='App-question-container'>
                <Question question = {questionnaire[questionID]} onSelectAnswer={(answer)=>handleAnswer(answer)}/>
                <div style={{marginBottom:'60px', width:'100%', justifyContent:'flex-end'}}>
                    <button className='App-button' style={{marginRight:'5px'}} onClick={()=>handdleArrowButton(ButtonType.PREV_BUTTON)}>{'<'}</button>
                    <button className='App-button' onClick={()=>handdleArrowButton(ButtonType.NEXT_BUTTON)}>{isSubmit ? 'Submit':'>'}</button>
                 </div>
            </div>
        </div>
    );
}

export default Questionnaire;