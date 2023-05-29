import { Link, Route, Routes } from "react-router-dom"
import "./Navbar.css"
import Home from "../home/Home"
import  { useEffect } from "react"
import Cursos from "../cursos/cursos";
import Curso1 from "../cursos/curso/Curso1";
import Curso3 from "../cursos/curso/Curso3";


function Navbar() {


    useEffect(() => {
        const scrollWatcher = () => {
          const navBar = document.querySelector(".navbar");
          if (window.scrollY >= 100) {
            navBar.classList.add("scroll");
          } else {
            navBar.classList.remove("scroll");
          }
        };
    
        window.addEventListener("scroll", scrollWatcher);

    }, []);





    return (
        <>   
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cursos" element={<Cursos /> } />
            <Route path="/Curso1" element={ <Curso1/> }  />
            <Route path="/Curso3" element={ <Curso3/> }  />
        </Routes>
        <section className='navbar'>
            <img src="../src/componets/nav/assets/logoClaro.png" alt="logo" className="logo" />
            <div className="pages">
                <ul>
                    <li><Link to="/" className="link">Inicio</Link></li>
                    <li><Link to="/Cursos" className="link">Cursos</Link></li>
                    <li><Link to="/" className="link">Carreras</Link></li>
                </ul>
            </div>


        </section>            
        </>
    )
}

export default Navbar