import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button';

const LauncherScreen = () => {
    const navigate = useNavigate();
    
    return (
        <div className='App-container'>
          <img src={'https://cdn-icons-png.flaticon.com/512/2237/2237792.png'}/>
          <Button  onButtonPress={() => navigate("/Questionnaire")} />
        </div>
    );
}

export default LauncherScreen;