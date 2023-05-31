/* eslint-disable react/jsx-key */

import CardCurso from "./card/CardCurso"
import "../cursos/Cursos.css"
import Footer from "../footer/Footer"
import { useEffect } from "react";

function Cursos() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    let cursos = [
        {
            idCurso: 1,
            nombre: "1000 Programadores",
            descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, officiis.",
            imagen:"../src/componets/cursos/assets/cursosCard1000.jpg",
        },
        {  
            idCurso: 3,
            nombre: "Programadoras",
            descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, officiis.",
            imagen:"../src/componets/cursos/assets/cursosCardPra.jpg",
        },

    ]




    return (
        <>
        <div className="bannerCursos ban">
            <img src="../src/componets/cursos/assets/curT.png" alt="" />
        </div>
        <div className="cursosGrid">
            {
                cursos.map((curso) => {
                    return(<CardCurso nombre={curso.nombre} descripcion={curso.descripcion} idCurso={curso.idCurso} imgSrc={curso.imagen}/>)
                })
            }
            
        </div>
        <Footer/>
        </>
    )
}

export default Cursos