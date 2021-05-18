import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Anime from './components/Anime';

function App() {
  return (
    <div className="App">
      <Header text='Whatup Anime' />
      <Anime />
    </div>
  );
}

export default App;
