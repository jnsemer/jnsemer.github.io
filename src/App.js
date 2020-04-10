import React from 'react';
import './mystyles.scss';
import Header from './components/Header';
import Contact from './components/Contact';
import ToggleRole from './components/resumecomps/ToggleRole';
import Education from './components/resumecomps/Education';
import BookSlider from './components/BookSlider';
import { experience } from './customdata/experience';
import { roles } from './customdata/roles';
import { headermsg } from './customdata/headermsg';
import { education } from './customdata/education';
import { contactpoints } from './customdata/contact';
import { books } from './customdata/books';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <Header msgs={headermsg}/>
      <ToggleRole experience={experience} roles={roles}/>
      <Education education={education}/>
      <Skills />
      <BookSlider books={books} />
      <Contact contact={contactpoints} />
    </div>
  );
}

export default App;
