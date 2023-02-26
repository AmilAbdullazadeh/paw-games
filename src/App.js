import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Admin from './pages/Admin'
import AdminProducts from './pages/Products';
import AddProduct from './pages/AddProduct'
import ViewProduct from './pages/ViewProduct'
import EditProduct from './pages/EditProduct'
import Addtag from './pages/AddTags';
import Addplatform from './pages/AddPlatforms';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import PP from './pages/PP';
import "aos/dist/aos.css";
import Error404 from './pages/Error404';
import Store from './pages/Store';


function App() {
  const toTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products/:id' element={<Detail />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/privacy' element={<PP />} />
        <Route path='/store' element={<Store />} />
        <Route path='/*' element={<Error404 />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/product/add" element={<AddProduct />} />
        <Route path="/admin/addplatform" element={<Addplatform />} />
        <Route path="/admin/addtag" element={<Addtag />} />
        <Route path="/admin/product/:id" element={<ViewProduct />} />
        <Route path="/admin/product/:id/edit" element={<EditProduct />} />
      </Routes>
      <div onClick={() => toTop()} className='up'>
        <i className="fa-solid fa-paw"></i>
      </div>
      <Footer />
    </div>
  )
}

export default App