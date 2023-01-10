import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { HomePage } from './routes/home';
import { ActivityPage } from './routes/activities';

function App() {
  const routesR = createBrowserRouter([
    {
      element:<HomePage/>,
      path:'/'
    }
  ])
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
