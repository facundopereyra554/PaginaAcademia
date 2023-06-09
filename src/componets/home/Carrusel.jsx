
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel, CCarouselItem } from '@coreui/react'

function Carrusel() {
  return (
    <>
        <CCarousel controls>
        <CCarouselItem>
            <div className='conte d-block w-100'>
                <p>“Hubo varias cosas que me gustaron, los métodos de enseñanza del profe, la tutora siempre atenta a nuestras dudas, el contenido era muy claro, los ejercicios eran muy útiles para practicar para los desafíos y desarrollar un poco más la lógica. Me gustaría que la metodología sea igual para el siguiente cuatrimestre.”</p>
            </div>
            {/* <CImage className="d-block w-100" src={""} alt="slide 1" /> */}
        </CCarouselItem>
        <CCarouselItem>
        <div className='conte d-block w-100'>
        <p>“Me gustó mucho que los profesores estaban muy predispuestos, con mucha paciencia explicando muchas veces lo mismo"</p>
        </div>
            {/* <CImage className="d-block w-100" src={""} alt="slide 2" /> */}
        </CCarouselItem>

        <CCarouselItem>
        <div className='conte d-block w-100'>
        <p>“Desde ya muy agradecida por la oportunidad que se nos dio. A todos los que hicieron posible este curso, para mí significa mucho osea nuevas oportunidades … Muchísimas Gracias a todos profes tutores y demás..”</p>
        </div>
            {/* <CImage className="d-block w-100" src={""} alt="slide 3" /> */}
        </CCarouselItem>

        <CCarouselItem>
        <div className='conte d-block w-100'>
        <p>“Me gustó el ambiente, sabernos a todas mujeres y diversidades. Que estamos en este cambio juntas….”</p>
        </div>
            {/* <CImage className="d-block w-100" src={""} alt="slide 3" /> */}
        </CCarouselItem>

        <CCarouselItem>
        <div className='conte d-block w-100'>
        <p>“Estoy muy feliz por haber podido finalizar el curso y quiero agradecer por ésta gran oportunidad de formación,me pareció excelente ya que he aprendido demasiado durante el cursado. También quiero agradecer por la buena predisposición que tuvo siempre todo el equipo de 1000 programadores”. </p>
        </div>
            {/* <CImage className="d-block w-100" src={""} alt="slide 3" /> */}
        </CCarouselItem>

        <CCarouselItem>
        <div className='conte d-block w-100'>
        <p>“Es un excelente curso, a pesar de que es gratuito y libre, finalizó este curso con muchos conocimientos, modos de trabajo y sobre todo compañeros de trabajo para un futuro proyecto. Me encantaron todos los desafíos delimitando con el tiempo, es muy productivo”.</p>
        </div>
            {/* <CImage className="d-block w-100" src={""} alt="slide 3" /> */}
        </CCarouselItem>

        <CCarouselItem>
        <div className='conte d-block w-100'>
        <p>“Quiero felicitar a los Coordinadores y Profesores de la introducción a la Programación con Java por el gran empeño que le pusieron al curso se nota el esfuerzo además de las ganas de enseñar estoy muy satisfecho con lo que aprendí”</p>
        </div>
            {/* <CImage className="d-block w-100" src={""} alt="slide 3" /> */}
        </CCarouselItem>

        <CCarouselItem>
        <div className='conte d-block w-100'>
        <p>“Quiero agradecer a todos de 1000 programadores, ya que gracias a su organización y el aprendizaje tengo la oportunidad de seguir capacitandome en la empresa Silentium apps”</p>
        </div>
            {/* <CImage className="d-block w-100" src={""} alt="slide 3" /> */}
        </CCarouselItem>

        <CCarouselItem>
        <div className='conte d-block w-100'>
        <p>“En primer lugar felicitarlos por el curso que organizaron ya que la accesibilidad incluyó personas de cualquier profesión que puedan realizarlo,el cursado me hizo repensar en cosas referidas a mi profesión soy enfermero universitario las cosas que podrían simplificar en términos administrativos. Aprendí un montón con ustedes. Sería muy bueno que sigan realizándolo es muy útil y necesario para el momento tecnológico que atravesamos actualmente. Saludos!”
        </p>
        </div>
            {/* <CImage className="d-block w-100" src={""} alt="slide 3" /> */}
        </CCarouselItem>
    </CCarousel>

    </>
  )
}

export default Carrusel