import './styles/app.css'
import React from 'react';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ShowClients from './pages/showClients';
import ShowChart from './pages/showChart';
import ShowStatistics from './pages/showStatistics';
import ClientPage from './pages/clientPage';
import InvestPage from './pages/investPage';

function App() {

  return (
    <Router>
      <div className='container'>
        <div>
          <Routes>
            <Route
              path='/'
              element={<Home />} 
             />
             <Route
              path='/show_clients'
              element={<ShowClients />} 
             />
             <Route
              path='/show_chart'
              element={<ShowChart />} 
             />
             <Route
              path='/show_statistics'
              element={<ShowStatistics />} 
             />
             <Route
              path='/invest'
              element={<InvestPage />} 
             />
             <Route
              path='/:id'
              element={<ClientPage />} 
             />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
