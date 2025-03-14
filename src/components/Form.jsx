import React, { useRef, useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";


function Form() {
    const form = useRef();
    const [status, setStatus] = useState(null);

    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-in-out",
          once: false, 
        });
      }, []);
 

    const sendEmail = (e) => {
        e.preventDefault();
        

        const countryCode = form.current.country_code.value;
        const phoneNumber = form.current.phone.value;
        const fullPhoneNumber = `${countryCode} ${phoneNumber}`;


        form.current.phone.value = fullPhoneNumber;

        emailjs.sendForm('service_6bvkfpw', 'template_2qthp3w', form.current, '0y7HTZn5XDEDyom5i')
          .then(() => {
              setStatus({ success: true, message: 'Message sent successfully!' });
              form.current.reset();
              form.current.phone.value = phoneNumber;
          })
          .catch((error) => {
              setStatus({ success: false, message: 'Failed to send message. Please try again.' });
              form.current.phone.value = phoneNumber;
          });
    };

    return (
        <div className='bg-[#141414]'>
            <div data-aos="fade-up"  className='md:container xs:w-[90%] w-full border-4 border-[#262626] text-white bg-[#0F0F0F] xs:text-center lg:text-start rounded-2xl py-5 pb-0 xs:px-0 mx-auto mb-0'>
                <form ref={form} onSubmit={sendEmail} className='text-start'>
                    <div className='grid xs:grid-cols-1 items-center lg:grid-cols-2'>
                        <div className='w-[100%] py-2 flex flex-col px-10'>
                            <label className='px-2 py-2' htmlFor="first_name">First Name</label>
                            <input name="name" placeholder='Enter Your First Name' className='py-3 px-2 bg-[#141414] border-2 border-[#262626] rounded-xl' type="text" required />
                        </div>
                        <div className='w-[100%] py-2 flex flex-col px-10'>
                            <label className='px-2 py-2' htmlFor="last_name">Last Name</label>
                            <input name="last_name" placeholder='Enter Your Last Name' className='py-3 px-2 bg-[#141414] border-2 border-[#262626] rounded-xl' type="text" required />
                        </div>
                        <div className='w-[100%] py-2 flex flex-col px-10'>
                            <label className='px-2 py-2' htmlFor="email">Email</label>
                            <input name="email" placeholder='Enter Your Email' className='py-3 px-2 bg-[#141414] border-2 border-[#262626] rounded-xl' type="email" required />
                        </div>
                        <div className='w-[100%] py-2 flex flex-col px-10'>
                            <label className='px-2 py-2' htmlFor="phone">Phone Number</label>
                            <div className='w-[100%] py-2 flex'>
                                <select name="country_code" className='py-4 xs:w-[24%] md:w-[10%] lg:w-[12%] text-[12px] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mr-2 px-2 bg-[#141414] border-2 border-[#262626] rounded-xl'>
                                    <option value="+20">🇪🇬</option> 
                                    <option value="+1">🇺🇸</option>                               
                                    <option value="+966">🇸🇦</option>
                                    <option value="+971">🇦🇪</option>
                                    <option value="+33">🇫🇷</option>
                                    <option value="+91">🇮🇳</option>
                                    <option value="+81">🇯🇵</option>
                                    <option value="+7">🇷🇺</option>
                                </select>
                                <input name="phone" placeholder='Enter Phone Number' className='py-3 xs:w-[70%] md:w-[88%] lg:w-[84%] px-2 bg-[#141414] border-2 border-[#262626] rounded-xl' type="tel" required />
                            </div>
                        </div>
                    </div>
                    <div className='container text-start py-5 w-full mx-auto px-5 grid grid-cols-1 items-center'>
                        <div className='items-center flex flex-col m-2'>
                            <textarea name="message" className='py-3 px-4 w-[99%] max-h-[200px] min-h-[200px] bg-[#141414] border-2 border-[#262626] rounded-xl' placeholder="Enter your message" required></textarea>
                            <button className='mt-10 px-8 py-3 bg-[#E50000] rounded-xl' type="submit">Send Message</button>
                        </div>
                    </div>
                    {status && (
                        <div className={`text-center py-3 ${status.success ? 'text-green-500' : 'text-red-500'}`}>
                            {status.message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Form;
