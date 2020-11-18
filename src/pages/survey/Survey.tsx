import React, { useState } from 'react';
import { SurveyHeader } from './survey-header/SurveyHeader';
import { Editor } from '../../components/controlled/Editor';
import './survey.css';

export interface SurveyProps {
  code?: string;
  validators?: [any, any][];
  timer?: number;
  onFinish?: (timestamp: number) => void;
  description?: string;
}

export const Survey: React.FC<SurveyProps> = ({
                                                code: pCode = '',
                                                validators = [],
                                                timer = 0,
                                                onFinish = () => {
                                                },
                                                description= 'Code as fast as you can! To test your code, click TEST.'
                                              }) => {
  const [code, setCode] = useState(pCode);
  const [valid, setValid] = useState(false);
  const [history, setHistory] = useState([{value: description, status: 'success'}]);
  const [timestamp, setTimestamp] = useState(timer);

  React.useEffect(() => {
    setCode(pCode);
    setValid(false);
    setHistory([{value: description, status: 'success'}]);
    setTimestamp(timer);
  }, [pCode, validators]);

  const log = (msg: {value: string, status: string}) => { setHistory((h) => [...h, msg]); };
  const success = (value: string) => { log({value, status: 'success'}); };
  const info = (value: string) => { log({value, status: 'info'}); };
  const error = (value: string) => { log({value, status: 'error'}); }
  const warn = (value: string) => { log({value, status: 'warn'}) };

  const onChange = (c: string) => { setCode(c); };
  const onNext = () => {onFinish(timestamp)}
  const onTest = () => {
    let isValid = true;
    try {
      // TODO: improve transformation of string to function without using eval.
      let run = (x: number) => x;
      eval(`run = (x) => (${ code })(x)`);

      for (const [input, output] of validators) {
        info(`Testing with value: ${input}...`);
        const result = run(input);
        if (result === output) {
          success(`RIGHT: ${output} is the right answer`);
        } else {
          error(`WRONG: Got ${result} but expected ${output}, Try again!`);
          isValid = false;
          break;
        }
      }
      setValid(isValid);
      if (isValid) {
        warn(`SUCCESS! All tests passed.`);
      }
    } catch (e) {
      error('Compilation failed, check your code.');
      return;
    }
  };
  const onTick = (timestamp: number) => { setTimestamp(timestamp) };

  return (
      <div id="survey">
        <SurveyHeader timer={ timestamp } onTick={ onTick } />
        <Editor code={ code } onChange={ onChange }/>
        <div className="d-flex mx-2 mt-2">
          { valid
              ? <button type="button" onClick={ onNext }>NEXT</button>
              : <button type="button" onClick={ onTest }>TEST</button>
          }
          <div className="ml-2 history">
            { history.map(h => <div className={'log ' + h.status}>{h.value}</div>) }
          </div>
        </div>
      </div>
  );
};
