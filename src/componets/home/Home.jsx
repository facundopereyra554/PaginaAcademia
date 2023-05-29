import Footer from "../footer/Footer"
import News from "../news/News";
import "./Home.css"
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
  return (
    <>
    
    <section className="home">
        <News/>
        <div className="banner">
            <div>
                <img src="../src/componets/home/assets/logoClaro.png" alt="" />
            </div>
        </div>
        <div className="infoTeam">
            <div className="grid-container">
                <div className="gridNos box">
                    <img className="infoTemaLogo" src="../src/componets/home/assets/team.png" alt="AboutUsLogo" />
                    <div className="infoTemaTexto">
                        <h3 className="colorL mb-5">¿Quiénes somos?</h3>
                        <p className="colorL ">La Academia CIMNE-IBER es un segmento del Centro Iberoamericano de Investigación que se ocupa de la gestión y administración de actividades académicas y de formación. Está constituida por un equipo de profesionales de distintas disciplinas que comparten la pasión por compartir y generar oportunidades mediante capacitaciones que permitan que salteños y salteñas se formen en programación.</p>
                    </div>
                </div>
                <div className="gridNos box1">
                    <img className="infoTemaLogo" src="../src/componets/home/assets/objetivos.png" alt="AboutUsLogo" />
                    <div className="infoTemaTexto">
                        <h3 className="colorM mb-5">Objetivos</h3>
                        <p className="colorM aling"><i className='bx bxs-label' ></i> Formar y fomentar recursos humanos calificados en programación. <br /> <br />
                            <i className='bx bxs-label' ></i> Formar a jóvenes profesionales en habilidades blandas para el futuro desempeño laboral, orientado a la programación. <br /> <br />
                            <i className='bx bxs-label' ></i> Fomentar el sector de la economía del conocimiento y la participación de empresas del sector para la incorporación de los perfiles formados por el programa. <br /> <br />
                            <i className='bx bxs-label' ></i> Crear una red provincial de programadores para el fomento de un ecosistema tecnológico local con impacto nacional y global. <br />
                        </p>
                    </div>
                </div>
                <div className="gridNos box2">
                    <img className="infoTemaLogo" src="../src/componets/home/assets/val.png" alt="AboutUsLogo" />
                    <div className="infoTemaTexto">
                        <h3 className="colorL mb-5">Sobre Nosotros</h3>
                        <p className="colorL aling">Mision: Generar un espacio para un aprendizaje integral que permita la construcción de conocimientos a través de un trabajo colaborativo.</p> <br />
                        <p className="colorL aling"> Vision: Expandirnos a nivel internacional y brindar capacitación a empresas.</p> <br />
                        <p className="colorL aling">Valores: Mil programadores ha asumido un solido compromiso con la igualdad de oportunidades entre personas, y con la lucha contra la violencia de genero, la orientacion sexual, la raza, etnia o nacionalidad.</p> 
                    </div>
                </div>
            </div>
        </div>
        <div className="perspec">
            <div className="imfoPer">
                    <h3>Perspectiva de Género y Diversidad</h3> <br /> <br />
                    <div className="box-per">
                        <p>
                            Mil Programadores ha asumido un sólido compromiso con la igualdad de oportunidades
                            entre personas, y con la lucha contra la violencia y discriminación basada en el género,
                            identidad y expresión de género, la orientación sexual, la raza, etnia o nacionalidad. <br />
                            En el contexto del programa, se realizaron capacitaciones para coordinadores, docentes y estudiantes sobre Perspectiva de Género y 
                            Diversidad que abarcan fundamentos legales y recomendaciones sobre buenas prácticas con el objeto de generar un entorno seguro de aprendizaje: <br />
                            Igualdad ante la Ley y principio de no discriminación (Art. 16, 75. inc. 22, entre otros) <br />
                            Ley de Protección Integral de la Mujer 26.485 <br />
                            Ley de Identidad de Género 26.743 <br />
                            Ley Micaela 27.499 Ley Anti-discriminación 23.592 <br />
                            Adicionalmente, se busca implementar dispositivos que tiendan a generar espacios solidarios, inclusivos basados en el respeto y la paz. <br />
                        </p>
                    </div>                 
                </div>
                <div>
                    <img src="../src/componets/home/assets/woman2.png" alt="woman" />
                </div>

               
        </div>
        <div className="opinions">
            <h3>¿Son recomendados los cursos de Academia CIMNE-IBER?  ¡Te dejamos algunos comentarios de nuestros/as egresados/as!
            </h3>
            <div className="opinionsGrid">
                <p>
                    “Hubo varias cosas que me gustaron, los métodos de enseñanza del profe, la tutora siempre atenta a nuestras dudas, el contenido era muy claro, los ejercicios eran muy útiles para practicar para los desafíos y desarrollar un poco más la lógica. Me gustaría que la metodología sea igual para el siguiente cuatrimestre.” 
                </p>
                <p>
                    “Me gusto que haya partido desde cero prácticamente y también se hayan realizado clases de refuerzos para algunos temas que requerían verlo con más detenimiento”
                </p>
                <p>
                    “Desde ya muy agradecida por la oportunidad que se nos dio. A todos los que hicieron posible este curso, para mí significa mucho osea nuevas oportunidades … Muchísimas Gracias a todos profes tutores y demás..”
                </p>
                <p>
                    “Estoy muy feliz por haber podido finalizar el curso y quiero agradecer por ésta gran oportunidad de formación,me pareció excelente ya que he aprendido demasiado durante el cursado. También quiero agradecer por la buena predisposición que tuvo siempre todo el equipo de 1000 programadores”. 
                </p>
                <p>
                    “Quiero felicitar a los Coordinadores y Profesores de la introducción a la Programación con Java por el gran empeño que le pusieron al curso se nota el esfuerzo además de las ganas de enseñar estoy muy satisfecho con lo que aprendí”
                </p>
                <p>
                    “Quiero agradecer a todos de 1000 programadores, ya que gracias a su organización y el aprendizaje tengo la oportunidad de seguir capacitandome en la empresa Silentium apps”. 
                </p>
            </div>

        </div>
        <div className="timeline-Container">
            <h3>Nuestro Recorrido</h3>
            <div className="timeline container p-0">
                <div className="boxTime1">
                    <h3>1 Oct 2021</h3>
                </div>
                <div>
                    <h3>21 Mar 2021</h3>
                </div>
                <div>
                    <h3>16 Ago 2021</h3>
                </div>
                <div>
                    <h3>4 Jul 2021</h3>
                </div>
                <div>
                    <h3>5 Jul 2021</h3>
                </div>
                <div className="boxTime2">
                    <h3>6 Jul 2021</h3>
                </div>
            </div>
        </div>

    <Footer/>        
    </section>

    </>

  )
}

export default Home