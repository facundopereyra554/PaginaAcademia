import { Link} from "react-router-dom"
import "./Navbar.css"

import  { useEffect } from "react"



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

        <section className='navbar'>
            <img src="../assets/logoClaro.png" alt="logo" className="logo" />
            <div className="pages">
                <ul>
                    <li><Link to="/" className="link">Inicio</Link></li>
                    <li><Link to="/Cursos" className="link">Cursos</Link></li>
                    <li><Link to="/TecDes" className="link">Carreras</Link></li>
                </ul>
            </div>


        </section>            
        </>
    )
}

export default Navbar