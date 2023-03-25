import './styles.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Post from './components/Post/Post';
//import AsideRight from './components/Aside-right/Aside-right';
//import Footer from './components/Footer/Footer';
//import Navbar from './components/Navbar/Navbar';
//import Asideleft from './components/Asideleft/Asideleft'
//import { NavbarPost } from './components/CreatePost/NavbarPost/NavbarPost';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/post/:postid' element={ <Post />} />
    </Routes>
    
    </>
  )
}

export default App;