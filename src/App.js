import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mainReducer } from './Redux/reducers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import B from './Components/B';
import A from './Components/A';

const store = createStore(mainReducer);

function App() {
  return (
   <div >
        <Provider store={store}>
        <BrowserRouter>
        
          <Routes>
            <Route path='/A' element={<A />} />
            <Route path='/B' element={<B />} />
           
           
          </Routes>
        </BrowserRouter>



        </Provider>
   
   </div>
  );
}

export default App;
