import './App.css';
import { Routes, Route } from 'react-router-dom';

import Pokemon  from './components/Home/allPokemon';
import LandingPage from './components/LandingPage/LandingPage';
import Detail from './components/Details/Details';

const  App = () => {
  return (
        <div className="App">
            <Routes>
              <Route path='/' element={<LandingPage/>}> </Route>
              <Route path='/home' element={<Pokemon/>}> </Route>
              <Route path='/detail/:id' element={<Detail/>}/>
              {/* <Route path='/create' element={</>}/>
              <Route path='*' element={</>}/> */}
              {/* <h1>Henry Pokemon</h1> */}
            </Routes>
        </div>
  );
}

export default App;
