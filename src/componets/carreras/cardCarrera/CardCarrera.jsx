/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

function CardCarrera({nombre, descripcion,imgSrc,idCarrera}) {
  return (
    <>
    <div>
    <img src={imgSrc} alt="CursosImg" />
    <div className="cursosCard">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>

        <Link to={`/Carrera${idCarrera}`} className="linkCurso">Ver Mas</Link>                   
    </div>
    </div>    
    </>

  )
}

export default CardCarrera