import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Admin from './routes/Admin';
import Page from './routes/Page';
import PhotoTest from './routes/PhotoTest';
import Login from './routes/Login';
import Register from './routes/Register';
import Logout from './routes/Logout';
import MainPage from './routes/MainPage';
import PfpTest from './routes/PfpTest';
import AddFriend from './routes/AddFriend';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>   

        <Route index element={<MainPage />} />
        <Route path="admin" element={<Admin />} />
        <Route path="page" element={<Page />} />
        <Route path = "phototest" element={<PhotoTest />} />
        <Route path = "login" element={<Login />} />
        <Route path = "register" element={<Register />} />
        <Route path = "logout" element={<Logout />} />
        <Route path = "pfptest" element={<PfpTest />} />
        <Route path = "addfriend" element={<AddFriend />} />
        </Route>
        
    )
  )

  export default router;