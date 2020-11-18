import React from 'react';
import './surver-header.css';
import { Timer } from '../../../components/timer/Timer';

interface SurveyHeaderProps {
  timer?: number;
  onTick?: (timestamp: number) => void;
}

export const SurveyHeader: React.FC<SurveyHeaderProps> = ({timer= 0, onTick = () => {}}) => {
  return (
      <div className="d-flex w-100 justify-content-between">
        <img src="/youcant.png" alt="" />
        <div className="d-flex flex-column">
          <div className="ml-auto">
            <Timer start={timer} onTick={ onTick } />
          </div>
          <div className="d-flex">
            <button>Tweet your progress</button>
            <button>Share on Facebook</button>
          </div>
        </div>
      </div>
  );
};
