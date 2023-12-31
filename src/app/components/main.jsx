'use client'
import React, { useEffect, useState } from 'react'
import { fetchingFacts } from '../lib/api'
import { ContactUs } from './contact'
import Loader from './loader'


export default function Main() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getApi()
    }, [])
    const Again = async () => {
        setLoading(true)
        getApi()
        setLoading(false)
    }
    const getApi = async () => {
        const fact = await fetchingFacts()
        setData(fact[0])
        setLoading(false)
    }
    return (
        <div className='container-site'>
            <header className='flex justify-center items-center py-3 min-h-2.5'>
                <div className="logo">
                    <h1 className='text-3xl text-neutral-300'>Only Facts</h1>
                </div>
            </header>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div className='main-content'>
                        <main className='flex justify-center items-center flex-col gap-10 md:text-nowrap'>
                            <div>
                                <h1 className='text-balance text-center'>
                                    {
                                        data.fact
                                    }
                                </h1>
                            </div>
                            <button onClick={Again}>
                                <svg className='animate-bounce' xmlns="http://www.w3.org/2000/svg" height="25" width="25" fill='white' viewBox="0 0 512 512"><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" /></svg>
                            </button>
                        </main>
                        <footer>
                            <ContactUs />
                                <a className='flex justify-center items-center text-blue-700 underline' href="https://t.me/Khamzayev_Shokhruz">Telegram</a>
                        </footer>
                    </div>
                )
            }
        </div>
    )
}
