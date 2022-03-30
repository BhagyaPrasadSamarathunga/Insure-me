import './App.css';
import './features/home/components/choice/Choice.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LauncherScreen from './features/launcher/LauncherScreen';
import Questionnaire from './features/home/Questionnaire';
import End from './features/home/End';

function App() {

  const Footer = () => {
    return <div style={{height:'50px',display:'flex', backgroundColor:'#19639F',position:'absolute',
    bottom:0, width:'100%', color:'white', justifySelf:'center', alignSelf:'center'}}>
      <p style={{flex:1,alignSelf:'center' }}>© All Rights Reserved.<br/>
      Powered by CLARK
      </p>
    </div>
  }
  return (
    <div className="App" style={{backgroundColor:'#73B3E6'}}>
      <Router>
        <Routes>
          <Route path="/" element={<LauncherScreen />} />
          <Route path="/Questionnaire" element={<Questionnaire />} />
          <Route path="/end" element={<End />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
