import Navbar from './components/navbar';
import Card from './components/Cards';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/card' element={ <Card /> } /> 
        <Route path='profile' element={ <Profile/>} />
      </Routes>
    </>
  );
}

export default App;
