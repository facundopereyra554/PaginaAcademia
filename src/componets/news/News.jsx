import {useState} from 'react'
import './News.css'

function News() {
    const [OpenBox, setOpenBox] = useState(true);


    let classBox = OpenBox ? '' : 'dactive';

    const hanbledisplayBox = () => {
        setOpenBox(!OpenBox);
    } 

    return (
        <>
        <div className='circleIcon' onClick={hanbledisplayBox}>
            <img src="../assets/newsIcon.png" alt="" />
        </div>
        <div className={`blurNews ${classBox}`} >
            <div className={`newBox ${classBox}` } >
                <h6 className='close' onClick={hanbledisplayBox}><i class='bx bx-x-circle'></i></h6>
                <h2>Noticias</h2>
                <img src="../assets/TecFirma.jpg" alt="" />
                {/* <p ><strong className='greentitle'>¿Que temas voy a aprender?</strong></p> */}
                    <p>Este jueves 29 de junio ¡un nuevo webinar te espera!</p>
                    <p>Junto con Nilsa Sarmiento, hablaremos nuevamente sobre el "Anápsis de Datos en Python"</p>
                    <p>¡Vení a descubrir todo sobre el mundo de la Ciencia de Datos!</p>
                    <p>¿Te lo vas a perder?</p>


                <p> Inscríbete desde YA en <a href="https://rb.gy/u2ivl ">https://rb.gy/u2ivl </a>y no te quedes fuera.</p>
            </div>            
        </div>

        </>
    )
}

export default News