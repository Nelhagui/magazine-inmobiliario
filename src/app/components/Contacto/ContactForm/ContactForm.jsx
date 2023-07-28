import React from 'react'
import { useState } from 'react';
import "./ContactForm.css"

function ContactForm() {
    const [formData, setFormData] = useState({
        author: '',
        email: '',
        comment: '',
        asunto: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos a tu servidor o hacer cualquier acción que desees con los datos del formulario.
        alert(`Nombre: ${formData.author}\nEmail: ${formData.email}\nEmail: ${formData.asunto}\nMensaje: ${formData.comment}`);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    return (
        <form onSubmit={handleSubmit} className='bg-white form-comentarios col-md-6 col-sm-12 rounded bordered padding-30 mt-3'>
            <p className="comment-form-author">
                <label htmlFor="author">Nombre 
                    <span className="required"> *</span>
                </label> 
                <input 
                    id="author" 
                    name="author" 
                    type="text" 
                    size="20" 
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
                    size="80" 
                    maxLength="100" 
                    aria-describedby="email-notes" 
                    autoComplete="email"
                    className='form-control'
                    value={formData.email}
                    onChange={handleChange} 
                    required=""
                />
            </p>
            <p className="comment-form-asunto">
                <label htmlFor="asunto">Asunto 
                    <span className="required"> *</span>
                </label> 
                <input 
                    id="asunto" 
                    name="asunto" 
                    type="asunto" 
                    size="30" 
                    maxLength="100" 
                    aria-describedby="asunto-notes" 
                    autoComplete="asunto"
                    className='form-control'
                    value={formData.asunto}
                    onChange={handleChange} 
                    required=""
                />
            </p>
            <p className="comment-form-comment">
                <label htmlFor="comment">Mensaje 
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
                    style={{minHeight:"150px"}}
                    ></textarea>
            </p>
            <button type="submit" className='btn-red'>Enviar</button>
        </form>
    )
}

export default ContactForm