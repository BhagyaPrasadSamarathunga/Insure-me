import React, {useState,useEffect} from 'react';

const FreeTextQuesion = ({question, onSelectAnswer}) => {

    const [answer, setAnswer] = useState("");

    useEffect(()=>{
        setAnswer(question.answer);
    },[question]);

    const handleAnswer = (answer) => {
        onSelectAnswer(answer);
        setAnswer(answer);
    }

return (
    <div style={{ display:'flex', flexDirection:'column', width:'100%'}}>
       <textarea value={answer}  onChange={e => handleAnswer(e.target.value)} className='App-input'/>
    </div>
)
}

export default FreeTextQuesion;