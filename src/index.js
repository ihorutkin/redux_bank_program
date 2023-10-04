import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/home';
import ShowClients from './pages/showClients';
import ShowChart from './pages/showChart';
import ShowStatistics from './pages/showStatistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "show_clients",
    element: <ShowClients />
  },
  {
    path: "show_chart",
    element: <ShowChart />
  },
  {
    path: "show_statistics",
    element: <ShowStatistics />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
