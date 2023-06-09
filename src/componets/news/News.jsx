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
                <h3>Taller de ChatGPT</h3>
                <img src="../assets/TecFirma.png" alt="" />
                <p ><strong className='greentitle'>¿Que temas voy a aprender?</strong></p>
                <ul className='list'>
                    <li><i className='bx bx-chevron-right'></i>Introducción a los modelos de lenguaje grande LLM</li>
                    <li><i className='bx bx-chevron-right'></i>Evolucion de los modelos LLM</li>
                    <li><i className='bx bx-chevron-right'></i>Funcionamiento básico de un chat bot</li>
                    <li><i className='bx bx-chevron-right'></i>Introducción a ChatGPT</li>
                    <li><i className='bx bx-chevron-right'></i>Qué es el Prompting</li>
                    <li><i className='bx bx-chevron-right'></i>Guías para un buen prompting</li>
                    <li><i className='bx bx-chevron-right'></i>¡Y más!</li>
                </ul>
                <p><strong className='greentitle'>¿Cómo puedo acceder al taller?</strong></p>
                <p>A través de nuestro link de zoom:</p>
                <a href="https://us06web.zoom.us/j/87147108932?pwd=WkNkVGRsbEpKZitNaHJmdVlSV3UrQT09" className='newsLink' target='_blank'>Ingresar</a> <br /> <br />
                <p><i className='bx bx-chevron-right'></i>Codigo de Acceso: 978604</p>
                <p><i className='bx bx-chevron-right'></i>Id de la reunion: 871 4710 8932</p>
            </div>            
        </div>

        </>
    )
}

export default News