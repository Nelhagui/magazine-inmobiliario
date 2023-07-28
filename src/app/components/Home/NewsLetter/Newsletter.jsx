import React from 'react'
import "./newsletter.css"

function Newsletter() {
  return (
    <div className='newsletter py-5 bg-white'>
        <div className='container-xl text-center pb-4'>
            <h3>¡No te pierdas ninguna de nuestras novedades!</h3>
            <p>Suscríbete ahora y recibe todas las actualizaciones directamente en tu bandeja de entrada.</p>
            <form action="" className='form-newsletter row d-flex justify-content-center text-center gap-1'>
                <input type="email" className="col-md-4 col-8" name="email" placeholder="Email" required=""/>
                <button type="submit" className="btn-red col-md-1 col-3 py-2 px-1" value="Sign up">Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter