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
            descripcion: "Se focaliza en la inserción en el mercado laboral de los perfiles capacitados y en la generación de un ecosistema de innovación y tecnología en Salta.",
            imagen:"../assets/cursosCard1000.jpg",
        },
        {
            idCurso: 2,
            nombre: "Mil Programadores Nación",
            descripcion: "Es un proyecto realizado en el marco de un convenio colaborativo con el Ministerio de Trabajo, Empleo y Seguridad Social de la Nación. ",
            imagen:"../assets/cursosCard1000na.jpg",
        },
        {  
            idCurso: 3,
            nombre: "Programadoras",
            descripcion: "Se logró la participación e intercambio de ideas en las clases remotas construyendo redes en un ambiente óptimo y seguro. ",
            imagen:"../assets/cursosCardPra.jpg",
        },

    ]




    return (
        <>
        <div className="bannerCursos ban">
            <img src="../assets/curT.png" alt="" />
        </div>
        <div className="center">
            <div className="cursosGrid">
                {
                    cursos.map((curso) => {
                        return(<CardCurso nombre={curso.nombre} descripcion={curso.descripcion} idCurso={curso.idCurso} imgSrc={curso.imagen}/>)
                    })
                }
                
            </div>            
        </div>

        <Footer/>
        </>
    )
}

export default Cursos