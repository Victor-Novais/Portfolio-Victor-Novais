import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import contact from '../../assets/cifrao-com-luz.png';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0ssdu99', 'template_ujjvhrv', form.current, 'L8uXOpbeHZBCt9ixH')
            .then((result) => {
                alert('Mensagem enviada com sucesso!');
                form.current.reset();
            }, (error) => {
                alert('Erro ao enviar mensagem, tente novamente.');
            });
    };

    return (
        <div className="hero-contact">
            <h4 className="hero-h4-contact">
                <img src={contact} alt="" /><i>portfolio</i>
            </h4>
            <div>
                <header className="header-skills">Entre em <span className="span-text-about">Contato!</span></header>
                <h3 className='contact-h3'>victornovais1337@gmail.com</h3>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group">
                            <label htmlFor="full-name">Nome completo <sup>*</sup></label>
                            <input type="text" name="fullName" id="full-name" placeholder="Your Full Name" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <label htmlFor="email">Email <sup>*</sup></label>
                            <input type="email" name="email" id="email" placeholder="Your email address" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <label htmlFor="phone-number">Telefone <span>(optional)</span></label>
                            <input type="text" name="phoneNumber" id="phone-number" placeholder="Your phone number" />
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-12">
                        <div className="input-group">
                            <label htmlFor="budget">Seu orçamento <span>(optional)</span></label>
                            <input type="number" name="budget" id="budget" placeholder="A range budget for your project" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="input-group">
                            <label htmlFor="message">Menssagem</label>
                            <textarea name="message" id="message" placeholder="Write your message here ..."></textarea>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="input-group submit-btn-wrap">
                            <button className="theme-btn" name="submit" type="submit" id="submit-form">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
