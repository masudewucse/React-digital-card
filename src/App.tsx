import React from 'react';
import './App.css';
import { ContentBlock } from './Components/ContentBlock';
import { ProfileImage } from './Components/ProfileImage';

function App() {
  return (
    <div className="App">
      <section>
        <div className="container">
          <div className="row">
            <ProfileImage/>
            <ContentBlock/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
