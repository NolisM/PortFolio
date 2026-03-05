import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import emailkeys from '../emailkeys';
import swal from 'sweetalert';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    phone: '',
    mensaje: ''
  });

  const [sending, setSending] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setAlert(null);

    const templateParams = {
      from_name: `${formData.nombre} ${formData.apellido}`,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.mensaje,
      to_name: 'Nolis'
    };

    try {
      await emailjs.send(
        emailkeys.service_id,
        emailkeys.templateMp_id,
        templateParams,
        emailkeys.public_key
      );

      swal({
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarme. Te responderé a la brevedad.',
        icon: 'success',
        button: 'Aceptar'
      });

      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        phone: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error:', error);
      swal({
        title: 'Error',
        text: 'Hubo un problema al enviar el mensaje. Intentalo de nuevo.',
        icon: 'error',
        button: 'Aceptar'
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contactame</h2>
          <p>
            ¿Tenés un proyecto en mente? ¿Querés trabajar conmigo?
            ¡Hablemos! Estoy disponible para oportunidades laborales y freelance.
          </p>
        </div>

        <div className="contact-info">
          <a href="mailto:nolis.maldonado@email.com" className="contact-info-item">
            <div className="contact-info-icon">
              <i className="far fa-envelope"></i>
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">Email</span>
              <span className="contact-info-value">nolis@email.com</span>
            </div>
          </a>

          <a href="https://linkedin.com/in/nolis-maldonado" target="_blank" rel="noopener noreferrer" className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">LinkedIn</span>
              <span className="contact-info-value">/in/nolis-maldonado</span>
            </div>
          </a>

          <a href="https://github.com/NolisM" target="_blank" rel="noopener noreferrer" className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fab fa-github"></i>
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">GitHub</span>
              <span className="contact-info-value">/NolisM</span>
            </div>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre <span>*</span></label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="form-control"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="apellido">Apellido <span>*</span></label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="form-control"
                placeholder="Tu apellido"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email <span>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="+54 351 1234567"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje <span>*</span></label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="form-control"
              placeholder="Contame sobre tu proyecto o propuesta..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-submit"
            disabled={sending}
          >
            {sending ? (
              <>Enviando...</>
            ) : (
              <>Enviar Mensaje <i className="fas fa-paper-plane"></i></>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;