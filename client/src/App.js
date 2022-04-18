import {Route,Routes} from 'react-router-dom';
import LandingPage from './components/landingPage.js';
import Navigator from './components/navigator.js';
import Home from './components/home.js';
import DetailPokemon from './components/detailPokemon.js';
import Form from './components/form.js';
import Error from './components/error.js';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}></Route>
      <Route path='/home' element={<Navigator></Navigator>}>
        <Route index element={<Home></Home>}/>
      </Route>
      <Route path='/pokemon/:id' element={<DetailPokemon/>}/>
      <Route path='/create' element={<Form/>}/>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
