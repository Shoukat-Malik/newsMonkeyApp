import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <News pageSize={5}/>
    </div>
  );
}

export default App;
