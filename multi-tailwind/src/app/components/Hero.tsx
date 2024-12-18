"use client"


import React from 'react';
import AOS from 'aos'; 
import { useEffect } from 'react';
import 'aos/dist/aos.css';


export default function Hero() {
useEffect(() => {
  AOS.init ({
    duration :1000,
    once: true,
  });
}, []);


  return (
    
        <section className='hero h-screen flex items-center bg-cover bg-center' style={{backgroundImage: "url('/carousel.jpg')"}}>

<div className='pl-0 md:pl-16 text-white text-center'>
     <h1 className='text-6xl font-bold    text-pink-950' data-aos="fade-up">Welcome to Glowup Cosmetics! </h1>
     <p className='text-4xl mt-3 text-pink-900'>Enhance Your Natural Beauty</p>
     <button className='mt-5 px-5 py-2 bg-rose-600 hover:bg-pink-900 rounded-full font-bold'>Shop Now!</button>
</div>


        </section> 
    
  )
}
