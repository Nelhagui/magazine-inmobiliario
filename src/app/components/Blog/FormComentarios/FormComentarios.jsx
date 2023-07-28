import React, { useState } from 'react'

function FormComentarios() {
    const [formData, setFormData] = useState({
        author: '',
        email: '',
        comment: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos a tu servidor o hacer cualquier acción que desees con los datos del formulario.
        alert(`Nombre: ${formData.author}\nEmail: ${formData.email}\nMensaje: ${formData.comment}`);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  return (
    <form onSubmit={handleSubmit} className='form-comentarios rounded bordered padding-30 mt-3'>
        <p className='fst-italic'>Su dirección de correo electrónico no será publicada. Los campos obligatorios están marcados *</p>
        <p className="comment-form-comment">
            <label htmlFor="comment">Comentario 
                <span className="required"> *</span>
            </label>
            <textarea 
                id="comment"
                name="comment"
                cols="45" 
                rows="8" 
                maxLength="65525" 
                required
                value={formData.comment}
                onChange={handleChange}
                className='form-control'
                style={{minHeight:"100px"}}
                ></textarea>
        </p>
        <p className="comment-form-author">
            <label htmlFor="author">Nombre 
                <span className="required"> *</span>
            </label> 
            <input 
                id="author" 
                name="author" 
                type="text" 
                size="30" 
                maxLength="245" 
                autoComplete="name" 
                className='form-control'
                value={formData.author}
                onChange={handleChange}
                required
            />
        </p>
        <p className="comment-form-email">
            <label htmlFor="email">Email 
                <span className="required"> *</span>
            </label> 
            <input 
                id="email" 
                name="email" 
                type="email" 
                size="30" 
                maxLength="100" 
                aria-describedby="email-notes" 
                autoComplete="email"
                className='form-control'
                value={formData.email}
                onChange={handleChange} 
                required=""
            />
        </p>
        <button type="submit" className='btn-form-comentarios'>Enviar</button>
    </form>
  )
}

export default FormComentarios