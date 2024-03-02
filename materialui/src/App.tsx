import React from 'react';
import logo from './logo.svg';
import './App.css';
import LessonTypography from './components/LessonTypography';
import LessonButton from './components/LessonButton';
import LessonButtonGroup from './components/LessonButtonGroup';
import LessonTextField from './components/LessonTextField';
import LessonRadioGroup from './components/LessonRadioGroup';
import { LessonRadioExample } from './components/LessonRadioExample';
import { LessonSelect } from './components/LessonSelect';
import { LessonCheckBox } from './components/LessonCheckBox';
import { LessonAutoComplete } from './components/LessonAutoComplete';
import { LessonBox } from './components/LessonBox';
import { LessonStack } from './components/LessonStack';
import { LessonGrid } from './components/LessonGrid';
import { LessonCard } from './components/LessonCard';
import { LessonAccordion } from './components/LessonAccordion';

function App() {
  return (
    <div className="App">
      {/* <LessonTypography/> */}
      {/* <LessonButton/> */}
      {/* <LessonButtonGroup/> */}
      {/* <LessonTextField/> */}
      {/* <LessonRadioGroup/> */}
      {/* <LessonRadioExample /> */}
      {/* <LessonSelect /> */}
      {/* <LessonCheckBox /> */}
      {/* <LessonAutoComplete /> */}
      {/* <LessonBox /> */}
      {/* <LessonStack /> */}
      {/* <LessonGrid /> */}
      {/* <LessonCard /> */}
      <LessonAccordion />
    </div>
  );
}

export default App;
