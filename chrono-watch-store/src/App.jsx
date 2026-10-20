import React from 'react';
import {Routes, Route} from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App(){
  return <Routes><Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="products" element={<Products/>}/>
    <Route path="about-us" element={<About/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Route></Routes>;
}
