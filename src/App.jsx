import './App.css';
import Home from './componets/home/Home';
import Navbar from './componets/nav/Navbar';
import Cursos from './componets/cursos/Cursos';
import Curso1 from './componets/cursos/curso/Curso1';
import Curso3 from './componets/cursos/curso/Curso3';
import TecDes from './componets/carreras/TecDes';
import Carrera1 from './componets/carreras/carrera/Carrera1';
import * as reactRouterDom from 'react-router-dom';
import Curso2 from './componets/cursos/curso/Curso2';



function App() {
  return (
    <reactRouterDom.BrowserRouter>
      <Navbar />
      <reactRouterDom.Routes>
        <reactRouterDom.Route path="/" element={<Home/>} />
        <reactRouterDom.Route path="/Cursos" element={<Cursos />} />
        <reactRouterDom.Route path="/Curso1" element={<Curso1 />} />
        <reactRouterDom.Route path="/Curso2" element={<Curso2/>} />
        <reactRouterDom.Route path="/Curso3" element={<Curso3 />} />
        <reactRouterDom.Route path="/TecDes" element={<TecDes />} />
        <reactRouterDom.Route path="/Carrera1" element={<Carrera1 />} />

      </reactRouterDom.Routes>
      
    </reactRouterDom.BrowserRouter>
  );
}

export default App;
