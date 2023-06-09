import Footer from "../../footer/Footer"
import "../curso/Curso.css"
import Accordion from "./Accordion";
import  { useEffect } from "react";


function Curso() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const accordionData = [
        {
          title: 'Descripción',
          content: `Mil Programadores se centra en la capacitación de salteños y salteñas en programación empleando los lenguajes PYTHON y JAVA como respuesta a la demanda puntual del sector de las Tecnologías de la Información y la Comunicación (TICs). Este proyecto se focaliza en la inserción en el mercado laboral de los perfiles capacitados y en la generación de un ecosistema de innovación y tecnología en Salta como visión de espacio generador de igualdad de oportunidades y desarrollo. Actualmente este proyecto se encuentra en su tercera edición.`
        },
        {
          title: 'Que Aprenderas?',
          content: `Podrás aprender programación desde cero y adquirir las herramientas básicas para poder desempeñarte en el ámbito laboral. `
        },
        {
          title: 'Requisitos',
          content: `Ser mayor de 18 años.
          Computadora o notebook de requerimientos básicos
          Conexión a Internet
          Aplicativo de videoconferencia (Zoom)
          `
        }
      ];

    return (
        <>
        <div className="bannerCursos ban">
            <img src="../assets/web_1000pro.png"/>
        </div>
        <div className="requi">
            <div>
                <h1>Sobre el Curso</h1>
                <div className="accordion1">
                    {accordionData.map(({ title, content }) => (
                    // eslint-disable-next-line react/jsx-key
                    <Accordion title={title} content={content} />
                  ))}
                </div>                
            </div>
            <div className="infoTec">
                <h1>Información de Cursada</h1>
                <div className="info">
                    <img src="../assets/calendario.png" alt="" />
                    <p>Duracion: 5 Meses</p>
                </div>
                <div className="info">
                    <img src="../assets/reloj.png" alt="" />
                    <p> Carga Horaria: 190 Horas</p>
                </div>
                <div className="info">
                    <img src="../assets/descargar.png" alt="" />
                    <p>Descargar Programa</p>
                </div>
            </div>
        </div>  
        <div className="inscripcion">
            <div className="gridIscr">
                <div><h3 className="subTitles">Metodologia De Aprendizaje</h3>
                <p className="mb-5">Ofrecemos formación bajo la modalidad virtual e implementando la metodología ``learning by doing”, a través de actividades de aprendizaje innovadoras con especial foco en la práctica, diseñada por un equipo de expertos desarrolladores, pedagogos que constantemente es validada por estudiantes. Así, quienes participan de nuestros cursos pueden potenciar sus habilidades y adquirir los conocimientos de manera más sólida.</p>
                {/* <ul>
                    <li><i className='bx bxs-label' ></i> Clases online en vivo con profesionales expertos.</li>
                    <li> <i className='bx bxs-label' ></i> Grupos reducidos de 15 personas en promedio.</li>
                    <li> <i className='bx bxs-label' ></i>Todas las clases quedan grabadas.</li>
                </ul> */}
                </div>
                <div><img className="imgGrid" src="../assets/aprendizaje.jpg" alt="" /></div>
            </div>
        </div>
        {/* <div className="preguntas container">
            <h3 className="subTitles">Preguntas Frecuentes</h3>
        </div>       */}
        <Footer/>
        
        </>
    )
}

export default Curso