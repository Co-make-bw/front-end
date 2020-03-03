import React from 'react';
import Nav from './components/Navbar';
import Default from './components/Default';
import LocalIssues from './components/Issues/LocalIssues';

function App() {
  return (
    <div>
      <Nav />
      <Default />
      <LocalIssues/>
    </div>
  );
}

export default App;
