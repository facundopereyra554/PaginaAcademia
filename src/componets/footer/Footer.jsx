import "../footer/Footer.css"

function Footer() {
  return (
    <>
    <div>
        <img src="../assets/wave.svg" alt="waveImg" />
        <div className='footerGrid'>
            <div className="ps-5"><img src="../assets/telefono.png" alt="waveImg" /></div>
            <div className='contact'>
                <h2>Información de Contacto</h2>
                <p><span>Correo: </span>academia@cimne-iber.com.ar</p>
                <p><span>Tel: </span> +54 9 3875 87-3263</p>
                <p><span>Horario de Atencion: </span> 09:30 a 17:30h</p>
            </div>
            <div className='redes'>
                <h2>Redes</h2>
                    <div className="red-social">
                        <a href="https://www.instagram.com/academiacimneiber/" target="_blank"><i className='bx bxl-instagram fs-1'></i></a>
                        <a href="https://twitter.com/academiacimneiber" target="_blank"><i className='bx bxl-twitter fs-1'></i></a>
                        <a href="https://www.facebook.com/academiacimneiber" target="_blank"><i className='bx bxl-facebook-square fs-1'></i></a>
                        <a href="https://www.youtube.com/channel/UCiAHFbMRA0JXI1oR5Dn4Tkg" target="_blank"><i className='bx bxl-youtube fs-1'></i></a>
                        <a href="https://www.linkedin.com/company/academiacimneiber/" target="_blank"><i className='bx bxl-linkedin-square fs-1'></i></a>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer