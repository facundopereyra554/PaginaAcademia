/* eslint-disable react/jsx-key */

import './TecDes.css'
import CardCarrera from './cardCarrera/CardCarrera'
import Footer from '../Footer/Footer'

function TecDes() {

    let carreras = [
        {
            idCarrera: 1,
            nombre: "Tecnicatura en Desarrollo de Software",
            descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, officiis.",
            imagen:"../src/componets/carreras/assets/tuds.jpg",
        },
    ]
    return (
        <>
        <div className="bannerCursosCar ban">
            <h3 className='titleCar'>Carreras</h3>
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