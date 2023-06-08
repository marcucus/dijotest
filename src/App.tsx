import  React from "react";
import './App.css';
import { HomePage } from './routes/home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { ActivityPage } from "./routes/activities";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/activite" element={<ActivityPage />} />
    </>
  ));
  
  return (
<div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
