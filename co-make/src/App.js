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
      {/* uncomment to see the cards as they are currently rendering */}
      {/* <LocalIssues/>
      <UserIssues/> */}
    </div>
  );
}

export default App;
