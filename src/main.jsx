import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Leetcode, { LeetcodeInfo } from './component/Leetcode';
import User from './component/User';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />  
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader={LeetcodeInfo}
      path='leetcode' 
      element={<Leetcode/>}
       />
    </Route>

  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
