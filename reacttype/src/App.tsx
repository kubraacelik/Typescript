import React from 'react';
import './App.css';
import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';
import Request from './components/Request';
import EventActions from './components/EventActions';
import LoginCheck from './components/LoginCheck';
import ReducerExample from './components/ReducerExample';

function App() {
  const instructor = {
    firstName:"Can",
    lastName:"Boz"
  }

  const instructorList = [
    {
      firstName:"Can",
      lastName:"Boz"
    },
    {
      firstName:"Aylin",
      lastName:"Boz"
    },
    {
      firstName:"Burak",
      lastName:"Boz"
    }
  ]

  return (
    <div className="App">
       {/* <Home name="Can Boz" courseNumber={15} isBest={true}/>
       <Instructor instructorNameLastName={instructor}/>
       <InstructorList instructorNameLastNameList={instructorList} />
       <Request status="success" />
       <EventActions/> */}
       {/* <LoginCheck/> */}
       {/* <ReducerExample/> */}
    </div>
  );
}

export default App;
