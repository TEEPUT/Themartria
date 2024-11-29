import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter import
import MainPage from "./component/mainpage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
