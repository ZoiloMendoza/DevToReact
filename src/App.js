import './styles.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Post from './components/Post/Post';
import CardPost from './components/CreatePost/CardPost/cardPost';
import EditPost from './components/EditPost/CardEditPost/CardEditPost';
import Login from './components/Login/Login';
import userLogin from './components/Login/userLogin';
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
      <Route path='/login' element={ <Login />} />
      <Route path='/userLogin' element={ <userLogin />} />
      <Route path='/post/:postid' element={ <Post />} />
      <Route path='/crearPost' element={ <CardPost/>}/>
      <Route path='/editPost' element={ <EditPost/>}/>
    </Routes>
    
    </>
  )
}

export default App;