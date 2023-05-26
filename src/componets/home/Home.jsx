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