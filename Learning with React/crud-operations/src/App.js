import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Create from './Components/create/Create';
import Read from './Components/read/Read'
import Update from './Components/update/Update';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
      
       <> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
      </>
  );
}

export default App;
