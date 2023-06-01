import Footer from "../../footer/Footer"
import "../curso/Curso.css"
import "../curso/styles/Programadoras.css"
import Accordion from "./Accordion";
import  { useEffect } from "react";


function Curso3() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const accordionData = [
        {
          title: 'Descripcion',
          content: `Programadoras busca formar a mujeres y diversidades en programación y brindarles herramientas que les permitan salir de trabajos tradicionales y estereotipados. Además, se busca contener a mujeres y diversidades a través de talleres con perspectiva de género que promuevan el empoderamiento de estas.`
        },
        {
          title: 'Que Aprenderas?',
          content: `Fue clave diseñar un programa de perfeccionamiento en el uso de herramientas digitales e introducción a la programación e introducción al desarrollo con Python. Para este curso, se buscó hacer hincapié en contenidos tales como: Hardware y Software; Sistemas Operativos; Manejo de Archivos; Microsoft Office: Word, Excel y Power Point; Google Drive, Docs, Sheets y Collab; Introducción al pensamiento algorítmico; Introducción a la programación.`
        },
        {
          title: 'Requisitos',
          content: `Ser mayor de 18 años.
          Teléfono celular con requerimientos básicos.
          Conexión a Internet.
          Aplicativo de videoconferencia (Zoom).
          `
        }
      ];

      const accordionData2 = [
        {
          title: 'Descripcion',
          content: `Programadoras busca formar a mujeres y diversidades en programación y brindarles herramientas que les permitan salir de trabajos tradicionales y estereotipados. Además, se busca contener a mujeres y diversidades a través de talleres con perspectiva de género que promuevan el empoderamiento de estas.`
        },
        {
          title: 'Que Aprenderas?',
          content: `Fue clave diseñar un programa de perfeccionamiento en el uso de herramientas digitales e introducción a la programación e introducción al desarrollo con Python. Para este curso, se buscó hacer hincapié en contenidos tales como: Hardware y Software; Sistemas Operativos; Manejo de Archivos; Microsoft Office: Word, Excel y Power Point; Google Drive, Docs, Sheets y Collab; Introducción al pensamiento algorítmico; Introducción a la programación.`
        },
        {
          title: 'Requisitos',
          content: `Ser mayor de 18 años.
          Teléfono celular con requerimientos básicos.
          Conexión a Internet.
          Aplicativo de videoconferencia (Zoom).
          `
        }
      ];

    return (
        <>
        <div className="bannerProgramadoras ban">
        <img src="../src/componets/cursos/assets/web_programadoras.png"/>

        </div>
        <h3 className="titleCourse">PHIIP</h3>
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
                <h1>Informacion de Cursada</h1>
                <div className="info">
                    <img src="../src/componets/cursos/assets/calendario.png" alt="" />
                    <p>Duracion: 4 Meses</p>
                </div>
                <div className="info">
                    <img src="../src/componets/cursos/assets/reloj.png" alt="" />
                    <p> Carga Horaria: 120 Horas</p>
                </div>
                <div className="info">
                    <img src="../src/componets/cursos/assets/descargar.png" alt="" />
                    <p>Descargar Programa</p>
                </div>
            </div>
        </div>  
        <div className="inscripcion">
            <div className="gridIscr">
                <div><h3 className="subTitles">Metodologia De Aprendizaje</h3>
                <p className="mb-5">Ofrecemos formación bajo la modalidad virtual e implementando la metodología ``learning by doing”, a través de actividades de aprendizaje innovadoras con especial foco en la práctica, diseñada por un equipo de expertos desarrolladores, pedagogos que constantemente es validada por estudiantes. Así, quienes participan de nuestros cursos pueden potenciar sus habilidades y adquirir los conocimientos de manera más sólida.</p>
                <ul>
                    <li><i className='bx bxs-label' ></i> +500 inscriptas</li>
                    <li> <i className='bx bxs-label' ></i> 436 Personas que cursaron regularmente </li>
                    <li> <i className='bx bxs-label' ></i> 150 Aprobaron la 1° Edición</li>
                </ul>
                </div>
                <div><img className="imgGrid" src="../src/componets/cursos/assets/aprendizaje.jpg" alt="" /></div>
            </div>
        </div>


        <h3 className="titleCourse">Introducion al desarollo con Python</h3>
        <div className="requi">
            
            <div>
                <h1>Sobre el Curso</h1>
                <div className="accordion1">
                    {accordionData2.map(({ title, content }) => (
                    // eslint-disable-next-line react/jsx-key
                    <Accordion title={title} content={content} />
                    ))}
                </div>                
            </div>
            <div className="infoTec">
                <h1>Informacion de Cursada</h1>
                <div className="info">
                    <img src="../src/componets/cursos/assets/calendario.png" alt="" />
                    <p>Duracion: 4 Meses</p>
                </div>
                <div className="info">
                    <img src="../src/componets/cursos/assets/reloj.png" alt="" />
                    <p> Carga Horaria: 2 clases semanales de 2 horas</p>
                </div>
                <div className="info">
                    <img src="../src/componets/cursos/assets/descargar.png" alt="" />
                    <p>Descargar Programa</p>
                </div>
            </div>
        </div>  
        <div className="inscripcion">
            <div className="gridIscr">
                <div><h3 className="subTitles">Plataforma Programadoras</h3>
                <p className="mb-5">Desde el equipo de Academia CIMNE-IBER, hemos creado una plataforma con el fin de subir las clases grabadas y que únicamente las personas inscritas al curso puedan acceder a las mismas.
                Si estás cursando en cualquiera de los tres cursos de Programadoras, te facilitamos tu ingreso a la misma a través del siguiente link: <br /> <br />
                https://programadoras.academiacimneiber.com/
                </p>
                {/* <ul>
                    <li><i className='bx bxs-label' ></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, minima!.</li>
                    <li> <i className='bx bxs-label' ></i> Lorem ipsum dolor sit amet..</li>
                    <li> <i className='bx bxs-label' ></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                </ul> */}
                </div>
                <div><img className="imgGrid" src="../src/componets/cursos/assets/plataforma.png" alt="" /></div>
            </div>
        </div>



        <Footer/>
        
        </>
    )
}

export default Curso3