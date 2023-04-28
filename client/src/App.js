import { Route, Routes, useLocation} from 'react-router-dom';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import NavBar from './components/NavBar/NavBar';


function App() {

  const location = useLocation();


  return (
    <div>

      <div>{location.pathname !== '/' && location.pathname !== '/home' && <NavBar/>}</div>

    <Routes>
      <Route  path="/" element={<Landing/>} />
      <Route exact path='/home' element={<Home/>} />
      <Route exact path="/detail/:idRecipe" element={<Detail/>} />
      <Route exact path="/create" element={<Form/>} />
    </Routes>

      



    </div>
  );
}

export default App;
