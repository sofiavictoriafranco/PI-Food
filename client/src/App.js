import { Route, Routes, useLocation} from 'react-router-dom';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import NavBar from './components/NavBar/NavBar';
import PageNotFound from './views/PageNotFound/PageNotFound';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';


function App() {

  const location = useLocation();


  return (
    <div>

{(location.pathname === '/create' || location.pathname.startsWith('/detail/')) && <NavBar/>}

    <Routes>
      <Route  exact path="/" element={<Landing/>} />
      <Route exact path='/home' element={<Home/>} />
      <Route exact path="/detail/:idRecipe" element={<Detail/>} />
      <Route exact path="/create" element={<Form/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>

      



    </div>
  );
}

export default App;
