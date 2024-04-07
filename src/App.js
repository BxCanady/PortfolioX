import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import BlogList from './components/BlogList';
import Comments from './components/Comments';
import Spacer from './components/Spacer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Skills />
        <Spacer height="10" />
      <Works />
      <BlogList />
      <Spacer height="10" />
      <Comments />
    </div>
  );
}

export default App;
