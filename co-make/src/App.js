import React from 'react';
import Nav from './components/Navbar';
import Default from './components/Default';
import LocalIssues from './components/Issues/LocalIssues';
import UserIssues from './components/Issues/UserIssues';

function App() {
  return (
    <div>
      <Nav />
      <Default />
      <LocalIssues/>
      <UserIssues/>
    </div>
  );
}

export default App;
