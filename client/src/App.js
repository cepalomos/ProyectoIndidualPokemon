import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./components/landingPage.js";
import Navigator from "./components/navigator.js";
import Home from "./components/home.js";
import DetailPokemon from "./components/detailPokemon.js";
import Form from "./components/form.js";
import Error from "./components/error.js";

function App() {
  let {pathname} = useLocation();
  return (
    <div className="App">
      {pathname === "/" ? (
        <LandingPage />
      ) : (
        <Routes>
          <Route path="/" element={<Navigator></Navigator>}>
            <Route path="home" element={<Home></Home>} />
            <Route path="create" element={<Form />} />
          </Route>
            <Route path="/pokemon/:id" element={<DetailPokemon />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
