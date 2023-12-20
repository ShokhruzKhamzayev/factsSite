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
            <label className='flex flex-col'>Name
                <input className='min-w-full bg-transparent border rounded-md' type="text" name="user_name" />
            </label>
            <label className='flex flex-col'>Email
                <input className='min-w-full bg-transparent border rounded-md' type="email" name="user_email" />
            </label>
            <label className='flex flex-col'>Message
                <textarea className='border rounded-md bg-transparent min-w-full' name="message" />
            </label>
            <input type="submit" value="Send" className='border max-w-fit mx-auto py-2 px-5 rounded-xl mt-3'/>
        </form>
    );
};