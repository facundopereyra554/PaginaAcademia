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
          content: `El hecho de que necesitemos a más mujeres en el mundo de la programación, nos condujo a lanzar nuevamente el curso de Programadoras en este 2023.
          Actualmente, 500+ mujeres y diversidades se encuentran aprendiendo programación a través de nuestros cursos.
           ¡Durante el año 2022 hemos tenido 250+ egresadas que recibieron su certificado!
          ¿Qué esperas para ser una de ellas?
          `
        },
        {
          title: 'Que Aprenderas?',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: 'Requisitos',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
      ];

    return (
        <>
        <div className="bannerProgramadoras ban">
        <img src="../src/componets/cursos/assets/web_programadoras.png"/>

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
                <div><h3 className="subTitles">Metodologia De Aprendizaje</h3>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorum neque non libero quisquam hic aliquam provident impedit? Eaque, obcaecati aspernatur! Explicabo odio accusantium nobis.</p>
                <ul>
                    <li><i className='bx bxs-label' ></i> Clases online en vivo con profesionales expertos.</li>
                    <li> <i className='bx bxs-label' ></i> Grupos reducidos de 15 personas en promedio.</li>
                    <li> <i className='bx bxs-label' ></i>Todas las clases quedan grabadas.</li>
                </ul>
                </div>
                <div><img className="imgGrid" src="../src/componets/cursos/assets/aprendizaje.jpg" alt="" /></div>
            </div>
        </div>
        {/* <div className="preguntas container">
            <h3 className="subTitles">Preguntas Frecuentes</h3>
        </div>       */}
        <Footer/>
        
        </>
    )
}

export default Curso3