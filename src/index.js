import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { store } from './store'
import { Provider } from 'react-redux'

import LoginPage from './components/Login/LoginPage';
import UserView from './components/UserView/UserView';
import DoctorView from './components/DoctorView';
import AdminView from './components/AdminView'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/patient",
    element: <UserView/>
  },
  {
    path: "/doctor",
    element: <UserView/>
  },
  {
    path: "/admin",
    element: <UserView/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router}/>
  </Provider>
);