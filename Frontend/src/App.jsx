import React from 'react'; 

import {Route,Routes} from "react-router-dom"

import Home from './Home/Home.jsx'; 
import Courses from './Courses/Courses.jsx';
import Signup from './components/Signup.jsx';
import Contacts from './Contact/Contacts.jsx';

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<Contacts/>} />
      </Routes>
    </div>
    </>
  )
}
export default  App