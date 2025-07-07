import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './From.scss';
import { motion } from 'motion/react';

function Form() {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                'service_95o42lw',    // replace this
                'template_85ybf47',   // replace this
                formRef.current,
                't912s0Yg-VdqbsCzQ'     // replace this
            )
            .then(
                (result) => {
                    alert('Message sent successfully!');
                    formRef.current?.reset();
                },
                (error) => {
                    alert('Failed to send message: ' + error.text);
                }
            );
    };

    return (
        <div className="contact-form-section">
            <div className='from'>
                <h2 className="form-title">Get in Touch</h2>
                <form className="contact-form" onSubmit={sendEmail} ref={formRef}>
                    <div className="form-group">
                        <label htmlFor="user_name">Name</label>
                        <input type="text" name="user_name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input type="email" name="user_email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" rows={5} required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
            <div className="text">
                <motion.h2
                    className="mainText"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Let’s Talk About Your Next Big Idea
                </motion.h2>

                <motion.p
                    className="SecondText"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Whether you have a question, want to start a project, or just say hello —<br />
                    I'm here to help. Fill out the form and let’s create something great together!
                </motion.p>
            </div>
        </div>
    );
}

export default Form;
