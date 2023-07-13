
import Footer from "../footer/Footer"
// import News from "../news/News";
import "./Home.css"
import { useEffect } from "react";
import Carrusel from "./Carrusel";

        

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
  return (
    <>
    
    <section className="home">
        {/* <News/> */}
        <div className="banner">
            <div>
                <img src="../assets/logoClaro1.png" alt="" />
            </div>
        </div>
        <div className="infoTeam">
            <div className="grid-container">
                <div  className="gridNos box">
                    <img className="infoTemaLogo" src="../assets/team.png" alt="AboutUsLogo" />
                    <div className="infoTemaTexto">
                        <h3 className="colorL mb-5"> <strong>¿Quiénes somos?</strong> </h3>
                        <p className="colorL ">La Academia CIMNE-IBER es un segmento del Centro Iberoamericano de Investigación que se ocupa de la gestión y administración de actividades académicas y de formación. Está constituida por un equipo de profesionales de distintas disciplinas que comparten la pasión por compartir y generar oportunidades mediante capacitaciones que permitan que salteños y salteñas se formen en programación.</p>
                    </div>
                </div>
                <div className="gridNos box1">
                    <img className="infoTemaLogo" src="../assets/objetivos.png" alt="AboutUsLogo" />
                    <div className="infoTemaTexto">
                        <h3 className="colorM mb-5"> <strong>Objetivos</strong> </h3>
                        <p className="colorM aling"><i className='bx bx-chevron-right'></i> Formar y fomentar recursos humanos calificados en programación. <br />
                            <i className='bx bx-chevron-right'></i> Formar a jóvenes profesionales en habilidades blandas para el futuro desempeño laboral, orientado a la programación. <br /> 
                            <i className='bx bx-chevron-right'></i> Fomentar el sector de la economía del conocimiento y la participación de empresas del sector para la incorporación de los perfiles formados por el programa. <br /> 
                            <i className='bx bx-chevron-right'></i> Crear una red provincial de programadores para el fomento de un ecosistema tecnológico local con impacto nacional y global. <br />
                        </p>
                    </div>
                </div>
                <div className="gridNos box2">
                    <img className="infoTemaLogo" src="../assets/val.png" alt="AboutUsLogo" />
                    <div className="infoTemaTexto">
                        <h3 className="colorL mb-5"> <strong>Sobre Nosotros</strong> </h3>
                        <p className="colorL aling">Mision: Generar un espacio para un aprendizaje integral que permita la construcción de conocimientos a través de un trabajo colaborativo.</p> 
                        <p className="colorL aling"> Vision: Expandirnos a nivel internacional y brindar capacitación a empresas.</p> 
                        <p className="colorL aling">Valores: Mil programadores ha asumido un solido compromiso con la igualdad de oportunidades entre personas, y con la lucha contra la violencia de genero, la orientacion sexual, la raza, etnia o nacionalidad.</p> 
                    </div>
                </div>
            </div>
        </div>
        <div className="perspec">
            <div className="infoPer">
                    <h3><strong>Perspectiva de Género y Diversidad</strong> </h3> <br /> <br />
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
            <div className="plataforma">
                <h3>Plataforma Educativa</h3>
                <br /> <br />
                <p>
                    A través de nuestra propia plataforma de aprendizaje facilitamos el acceso al material de estudio, foros de consulta/debate que fomentan el intercambio de conocimiento entre estudiantes y docentes.
                    Habilitamos espacios de autoevaluación a través de cuestionarios que permiten que los participantes reciban un feedback sobre su evolución durante el cursado y detecten sobre qué temas profundizar y mejorar. <br />
                    <br /><br />
                    <a href="https://plataforma.academiacimneiber.com/index.php" target="_blank" className="navlink">Plataforma</a>
                </p>
            </div> 
        </div>
        <div className="opinions">
            <h3>¿Son recomendados los cursos de Academia CIMNE-IBER?  ¡Te dejamos algunos comentarios de nuestros/as egresados/as!</h3>
            
            <div className='per'>
                <Carrusel/>
            </div>

        </div>
        {/*<div className="timeline-Container">
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
        </div>*/}            
        <h3 className="subTitle" data-aos="fade-up">Nuestro Recorrido</h3>
        <div className="test">

            <div className="wrapperSli">
                <div className="center-line">
                    <a href="#"><i className="fas fa-caret-up"></i></a>
                </div>
                <div className="row row-1"> 
                    <section data-aos="fade-right">
                    <i className="iconon fas fa-home scroll-icon"></i>
                        <div className="details" >
                            <span className="title">Introducción a la Programación con Python - 1° cohorte</span>
                            <span className="fe">Octubre a Diciembre 2021</span>
                        </div>
                        <p>El proyecto se centró en la capacitación de jóvenes salteños en herramientas de 
                            programación empleando el lenguaje PYTHON como respuesta a la demanda puntual del sector de 
                            las Tecnologías de la Información y la Comunicación (TICs).
                        </p>
                    </section>
                </div>
                <div className="row row-2">
                    <section data-aos="fade-left">
                        <i className="iconon fas fa-star"></i>
                        <div className="details">
                            <span className="title">Introducción a la <br /> Programación con Java</span>
                            <span className="fe">Marzo a Junio 2022</span>
                        </div>
                        <p>Tras el éxito Mil Programadores, en marzo de 2022 lanzamos una nueva edición enfocada en el lenguaje Java con el objetivo de continuar formando a jóvenes y adultos en programación. En esta segunda edición implementamos nuevas estrategias de enseñanza junto a un challenge que permitió que los participantes vivan la experiencia del trabajo en equipo.</p>

                    </section>
                </div>

                <div className="row row-1">
                    <section data-aos="fade-right">
                        <i className="iconon fas fa-rocket"></i>
                        <div className="details">
                            <span className="title">Programadoras</span>
                            <span className="fe">Octubre a Diciembre 2022</span>
                        </div>
                        <p>Sabemos lo difícil que resulta como mujer insertarse en el mundo de la programación porque una vez estuvimos donde estás vos. Programadoras, busca formar mujeres y diversidades en programación y brindarles herramientas que les permitan dejar atrás los trabajos tradicionales y estereotipados. ¿Tenés dudas? Te invitamos a conocer un poco más de qué se trata.</p>

                    </section>
                </div>

                <div className="row row-2">
                    <section data-aos="fade-left">
                        <i className="iconon fas fa-globe"></i>
                        <div className="details">
                            <span className="title">PHIIP</span>
                            <span className="fe">Octubre a Diciembre 2022</span>
                        </div>
                        <p>De acuerdo a estos puntos, fue clave diseñar un programa de perfeccionamiento en el 
                            uso de herramientas digitales e introducción a la programación que sirva como base para 
                            luego poder aprovechar más eficientemente el curso de Programadoras
                        </p>

                    </section>
                </div>
                <div className="row row-1">
                    <section data-aos="fade-right">
                        <i className="iconon fas fa-paper-plane"></i>
                        <div className="details">
                            <span className="title">Introducción a la Programación con Python - 2° cohorte</span>
                            <span className="fe">Agosto a diciembre 2022</span>
                        </div>
                        <p>La tercera edición de Mil Programadores comenzó en agosto de 2022 empleando nuevamente Python, uno de los lenguajes más solicitados por los estudiantes. Durante este curso implementamos desafíos y un proyecto integrador para que los participantes pongan en práctica los conocimientos que adquirieron en el cursado. También trabajos junto al equipo de tutores para brindar una atención personalizada en cada una las comisiones.</p>

                    </section>
                </div>
                <div className="row row-2">
                    <section data-aos="fade-left"> 
                        <i className="iconon fas fa-map-marker-alt"></i>
                        <div className="details">
                            <span className="title">Tecnicatura universitaria en desarrollo de software</span>
                            <span className="fe">Octubre de 2022 - Actualidad</span>
                        </div>
                        <p>La Tecnicatura Universitaria en Desarrollo de Software tiene por objetivo la formación 
                            de tecnológica de hombres y mujeres de conformidad a nuevas demandas y necesidades 
                            formativas de habilitades y/o competencias solicitadas por los sectores productivos de la Provincia.
                        </p>

                    </section>
                </div>
            </div>
        </div>

    <Footer/>        
    </section>

    </>

  )
}

export default Home