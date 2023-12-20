'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nnvxcd8', 'template_npxolpi', form.current, '09c5sy9FGiw1qNBog')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-3'>
            <label>Name
                <input className='text-slate-900' type="text" name="user_name" />
            </label>
            <label>Email
                <input className='text-slate-900' type="email" name="user_email" />
            </label>
            <label>Message
                <textarea className='text-slate-900' name="message" />
            </label>
            <input type="submit" value="Send" />
        </form>
    );
};