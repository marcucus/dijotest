import React from 'react';
import './App.css';
import { HomePage } from './routes/home';


function App() {
  return (
<div className="App">
      <header className="App-header">
      <HomePage></HomePage>
      {/*<Routes>
          <Route element={<HomePage/>} path="/"></Route>
          <Route element={<ActivityPage/>} path="/activities"></Route>
        </Routes>*/}
      </header>
    </div>
  );
}

export default App;
