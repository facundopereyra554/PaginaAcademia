import {useState} from 'react'
import './News.css'

function News() {
    const [OpenBox, setOpenBox] = useState(true);


    let classBox = OpenBox ? 'newBox' : 'newBox dactive';

    const hanbledisplayBox = () => {
        setOpenBox(!OpenBox);
    } 

    return (
        <>
        <div className='circleIcon' onClick={hanbledisplayBox}>
            <img src="../src/componets/news/assets/newsIcon.png" alt="" />
        </div>
        <div className={classBox}>
            <h6 className='close' onClick={hanbledisplayBox}>x</h6>
            <h2>Noticias</h2>
            <h3>Tecnicatura en Desarrollo de Software</h3>
            <img src="../src/componets/news/assets/TecFirma.jpg" alt="" />
            <p>La última semana de marzo, se dió por finalizado el primer cuatrimestre de la Tecnicatura Universitaria en Desarrollo de Software que dió comienzo el 17 de octubre de 2022.</p>
            <p><strong>¡Concluyeron 250+ alumnos!</strong></p>
            <p>Por eso, te contamos que junto con la Universidad Provincial de Administración, Tecnología y Oficios (UPATecO), trabajamos para que puedas seguir estudiando.</p>
            <p><strong>Este 5 de junio de 2023, daremos comienzo al segundo cuatrimestre de la tecnicatura. ¿Estás listo para afrontar nuevos desafíos?
            </strong></p>
        </div>
        </>
    )
}

export default News