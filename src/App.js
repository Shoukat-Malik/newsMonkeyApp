import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { useState } from 'react';

function App() {
  const[menu,setmenu] = useState({
  
    categroy:'business',
    country:'at'


  });
  const handleCategoryChange  = (Newcategory)=>{
    // alert(category);
    setmenu({
      categroy:Newcategory,
      country:'at'
  
    });
  }

 
  return (
    <div className="App">
     <NavBar handleCategoryChange={handleCategoryChange}/>
     <News pageSize={5}  category={menu.categroy} country={menu.country}/>
    </div>
  );
}

export default App;
