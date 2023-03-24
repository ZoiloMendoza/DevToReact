import './App.css';
//import AsideRight from './components/Aside-right/Aside-right';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
//import Asideleft from './components/Asideleft/Asideleft'
import { NavbarPost } from './components/CreatePost/NavbarPost/NavbarPost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        
      </header>
     
      <main>
        <aside className='page__rightColumn'>
          <AsideRight/>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default App;
