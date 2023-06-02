/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react'
import Footer from '../footer/Footer'
import './TecDes.css'
import CardCarrera from './cardCarrera/CardCarrera'


function TecDes() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    let carreras = [
        {
            idCarrera: 1,
            nombre: "Tecnicatura en Desarrollo de Software",
            descripcion: "Tiene como objetivo principal la formación tecnológica de hombres y mujeres de conformidad a nuevas demandas",
            imagen:"../assets/tuds.jpg",
        },
    ]
    return (
        <>
        <div className="bannerCursosCar ban">
            <img src="../assets/web_carreras.png" alt="" />
        </div>
        <div className='gridCarreras'>
            {
                carreras.map((carrera) => {
                    return(<CardCarrera nombre={carrera.nombre} descripcion={carrera.descripcion} idCarrera={carrera.idCarrera} imgSrc={carrera.imagen}/>)
                })
            }
        </div> 
        <Footer/>   
        </>
    )
}

export default TecDes