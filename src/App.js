import React from 'react';
import './App.css';
import Timeline from './components/Timeline';

const App = () => {  

  return (
    <section>
      <header className="">
        <h1>The Dear Hunter Timeline</h1>
        <p>An estimation of when key events in the Acts occurred.</p>
        <p>Credit for timeline information goes to Reddit user <a href="https://www.reddit.com/user/Lesime">/u/Lesime</a> via <a href="https://www.reddit.com/r/TheDearHunter/comments/5uuus9/the_dear_hunter_timeline/">this post</a></p>
        <p>Visit <a href="http://thedearhunter.com/">The Dear Hunter</a></p>
      </header>
      <Timeline />
    </section>
  );
};

export default App;
