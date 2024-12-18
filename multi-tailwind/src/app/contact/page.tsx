import React from 'react';

export default function Contact() {
  return (
    <div>
      <section className='contact-form border max-w-lg mx-auto my-20 p-5 bg-white shadow-lg shadow-pink-800 rounded-md' style={{backgroundImage: "url('/contact.jpg')"}}>
        <h2 className='text-2xl font-bold  mb-6 text-left text-pink-950' data-aos="fade-up">CONTACT US</h2>
        <form>
        <input type="text"  placeholder="First name" className=' w-full mb-4 p-2 px-4 py-2 border border-pink-900 rounded-md' required/>
          <input type="text"  placeholder="Last name" className=' w-full mb-4 p-2 px-4 py-2 border border-pink-900 rounded-md' required/>
          <input type="email" placeholder="Enter Your Email" className=' w-full p-2 mb-4 px-4 py-2 border border-pink-900 rounded-md' required/>
          <input type="text" placeholder=" Your PhoneNumber" className=' w-full p-2 mb-4 px-4 py-2 border border-pink-900 rounded-md' required/>
          <textarea
          placeholder="Address" rows={2}  className=' w-full mb-4 px-4 p-2 py-2 border border-pink-900 rounded-md' required>
          </textarea>
       
       <textarea
        placeholder="Enter Your Messaage" rows={4} className=' w-full mb-4 px-4 p-2 py-2 border border-pink-900 rounded-md' required>
       </textarea>
       <button type='submit' className='w-full bg-pink-600 text-white py-2 rounded-md '>SEND</button>
       
        </form>
      </section>
    </div>
  )
}
