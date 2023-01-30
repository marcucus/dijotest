import * as React from "react";
import * as ReactDOM from "react-dom";
import './App.css';
import { HomePage } from './routes/home';
import { AffichagePage } from './routes/affichages';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { ActivityPage } from "./routes/activities";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/activite" element={<ActivityPage />} />
      <Route path="/activite/affichage" element={<AffichagePage />} />
      <Route path="/activite/menuiserie" element={<ActivityPage />} />
      <Route path="/activite/voiture" element={<ActivityPage />} />
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
