import React, { useState } from 'react';
import './App.css';
import { Home } from './pages/home/Home';
import { Survey } from './pages/survey/Survey';
import { data } from './data';

const App: React.FC<{}> = () => {
  const [isHome, setIsHome] = useState(true);
  const [globalTimer, setGlobalTimer] = useState(0);
  const [index, setIndex] = useState(0);
  const onFinish = (timestamp: number) => {
    setGlobalTimer(timestamp);
    setIndex(i => i + 1);
  };
  const onStart = () => {
    setIsHome(false);
  };

  return (
      <div className="App">
        { isHome
            ? <Home onStart={ onStart }/>
            : data[index]
                ? <Survey
                    code={ data[index].code }
                    validators={ data[index].validators }
                    timer={ globalTimer }
                    onFinish={ onFinish }
                />
                : <div>
                  <p> You finished in {globalTimer} seconds!</p>
                </div>
        }
      </div>
  );
};

export default App;
