import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import About from './component/Pages/Aboutus/About/About';
import Service from './component/Pages/Services/Service/Service';
import Blog from './component/Pages/Blogs/Blog/Blog';
import Contact from './component/Pages/Contact/Contact';
import NotFound from './component/Pages/NotFound/NotFound';
import Login from './component/Pages/Login/Login';
import Signup from './component/Pages/Home/Signup/Signup';
import Footer from './component/Footer/Footer';
import ServicesDetailes from './component/Pages/Services/Service/ServicesDetailes';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/service/:serviceId' element={<ServicesDetailes></ServicesDetailes>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
