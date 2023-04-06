import './styles.css';
import Home from './components/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Post from './components/Post/Post';
import CardPost from './components/CreatePost/CardPost/cardPost';
import EditPost from './components/EditPost/CardEditPost/CardEditPost';
import Login from './components/Login/Login';
import UserLogin from './components/Login/userLogin';
import { useEffect } from "react";

function App() {

  const { pathname } = useLocation();
  
  const scrollTop = () => {
    window.scrollTo(0, 0);
    //posRef.current.scrollTop = 0;
  }

  useEffect(() => {
      scrollTop();
  }, [pathname])
  return (
    <>
    <Routes>
      <Route path='/:userid?' element={ <Home />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/userLogin' element={ <UserLogin />} />
      <Route path='/:userid?/post/:postid' element={ <Post />} />
      <Route path='/:userid?/crearPost' element={ <CardPost/>}/>
      <Route path='/:userid?/editPost/:postid' element={ <EditPost/>}/>
    </Routes>    
    </>
  )
}

export default App;