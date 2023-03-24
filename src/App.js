import './App.css';
import AsideRight from './components/Aside-right/Aside-right';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
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
