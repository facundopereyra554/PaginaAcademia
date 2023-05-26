import { Link} from "react-router-dom";
function CardCurso({nombre, descripcion,imgSrc,idCurso}) {


  return (
    <>
    <div>
        <img src="../src/componets/cursos/assets/cursosCard.jpg" alt="CursosImg" />
        <div className="cursosCard">
            <h3>{nombre}</h3>
            <p>{descripcion}</p>

            <Link to={`/Curso${idCurso}`} className="linkCurso">Ver Curso</Link>                   
        </div>
    </div>    
    </>

  )
}

export default CardCurso