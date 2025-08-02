"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
   MdDone,
   MdEmail,
   MdOutlineEmail,
   MdOutlineMailOutline,
} from "react-icons/md";
import {
   IoCall,
   IoCheckmarkCircleSharp,
   IoLocationSharp,
} from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { TbBrandGithubFilled, TbBrandGmail } from "react-icons/tb";

export default function Contact() {
   const form = useRef();
   const [success, setSuccess] = useState(false);
   const [loading, setLoading] = useState(false);

   const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
         .sendForm(
            "service_ptu981p",
            "template_fiahccg",
            form.current,
            "jW-zE7I-4UhYJnvcH"
         )
         .then(
            () => {
               setSuccess(true);
               setLoading(false);
               form.current.reset();
            },
            (error) => {
               console.error(error.text);
               setSuccess(false);
               setLoading(false);
            }
         );
   };

   useEffect(() => {
      if (success) {
         const timer = setTimeout(() => {
            setSuccess(false);
         }, 2000);

         // تنظيف الـ timeout لو اتغير success قبل انتهاء الـ timer
         return () => clearTimeout(timer);
      }
   }, [success]);

   return (
      <div className="pt-40 " id="contact">
         <div className="sec-title  text-center pb-10">
            <h2>Contact Me</h2>
         </div>
         <div className="border border-[#00a8cd] rounded-[12px]">
            {/* <div className="location h-[300px] p-7">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33663487977!2d31.299663919782425!3d30.059556316678552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1753983225047!5m2!1sar!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl shadow-md w-full h-full"
               ></iframe>
            </div> */}
            <div className="grid grid-cols-1  lg:grid-cols-2 w-full gap-7 px-8 py-10 mx-auto  rounded-lg shadow-2xl   shadow-black/50">
               <div>
                  <h3 className="text-2xl text-white font-bold relative pb-[5px]  text-line">
                     Send Message Us
                  </h3>
                  <form ref={form} onSubmit={sendEmail} className="mt-7">
                     <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4 lg:col-span-2">
                           {/* <label className="block mb-2 text-sm  text-gray-200">
                           Full Name
                        </label> */}
                           <input
                              required
                              type="text"
                              name="user_name"
                              placeholder="Full Name"
                              className="block w-full px-5 py-3   border rounded-md placeholder-gray-500  text-gray-300 border-[#00e1ff77] focus:border-[#00e1ffe8] focus:ring-[#00e1ffe8] focus:outline-none focus:ring focus:ring-opacity-40"
                           />
                        </div>

                        <div className="col-span-4 lg:mt-0 lg:col-span-2">
                           {/* <label className="block mb-2 text-sm text-gray-200">
                           Phone Number
                        </label> */}
                           <input
                              required
                              type="tel"
                              name="user_mobile"
                              placeholder="Phone Number"
                              className="hamada block w-full px-5 py-3   border rounded-md placeholder-gray-500  text-gray-300 border-[#00e1ff77] focus:border-[#00e1ffe8] focus:ring-[#00e1ffe8] focus:outline-none focus:ring focus:ring-opacity-40"
                           />
                        </div>

                        <div className="col-span-4">
                           {/* <label className="block mb-2 text-sm text-gray-200">
                           Email address
                        </label> */}
                           <input
                              required
                              type="email"
                              name="user_email"
                              placeholder="Email Address"
                              className="block w-full px-5 py-3   border rounded-md placeholder-gray-500  text-gray-300 border-[#00e1ff77] focus:border-[#00e1ffe8] focus:ring-[#00e1ffe8] focus:outline-none focus:ring focus:ring-opacity-40"
                           />
                        </div>

                        <div className="col-span-4">
                           {/* <label className="block mb-2 text-sm text-gray-200">
                           Message
                        </label> */}
                           <textarea
                              required
                              className="block w-full px-5 py-3  h-[200px] border rounded-md placeholder-gray-500  text-gray-300 border-[#00e1ff77] focus:border-[#00e1ffe8] focus:ring-[#00e1ffe8] focus:outline-none focus:ring focus:ring-opacity-40 resize-none"
                              name="message"
                              placeholder="Message"
                           ></textarea>
                        </div>
                     </div>

                     <button
                        className={`${
                           success
                              ? "bg-white"
                              : "bg-[#00a8cd] hover:bg-[#009dcde8]"
                        } w-full px-6 py-3 relative mt-6 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform cursor-pointer rounded-md  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 h-13`}
                        disabled={loading}
                     >
                        {loading ? (
                           <div className="flex justify-center items-center">
                              <span className="loader">Loading ...</span>
                           </div>
                        ) : success ? (
                           <div className="flex justify-center items-center gap-3 font-[900]">
                              <span className="text-green-500">Done</span>
                              <IoCheckmarkCircleSharp
                                 size={25}
                                 className="text-green-500"
                              />
                           </div>
                        ) : (
                           <>Send</>
                        )}
                     </button>
                  </form>
               </div>
               <div className="mt-5 lg:mt-0">
                  <h3 className="text-2xl text-white font-bold relative pb-[5px]  text-line">
                     Get In Touch
                  </h3>
                  <div className="h-full mb-6 mt-[18px]">
                     <div className="get-in-touch" id="get-contact">
                        <div className="data-contact">
                           <div>
                              <p className="text-lg text-[#e2e2e2] leading-[1.9]">
                                 If you're interested in what I do, need help
                                 understanding your data, or have a project
                                 you'd like to discuss — I'd love to hear from
                                 you. I enjoy turning raw data into meaningful
                                 insights.
                                 <br />
                                 Feel free to reach out via WhatsApp, email, or
                                 social media — I'll get back to you as soon as
                                 I can.
                              </p>
                           </div>
                           <div className="mt-5 flex-col flex gap-5">
                              <div className="location-contact flex items-center gap-3 hover:text-[#00a8cd] transition-all duration-[0.3s]">
                                 <span className="border rounded-full p-2">
                                    <IoLocationSharp size={20} />
                                 </span>
                                 <span>Cairo, Egypt</span>
                              </div>

                              <div className="call-contact flex items-center gap-3 hover:text-[#00a8cd] transition-all duration-[0.3s]">
                                 <span className="border rounded-full p-2">
                                    <IoCall size={20} />
                                 </span>
                                 <span>+201212384862</span>
                              </div>
                              <div className="email-contact flex items-center gap-3 hover:text-[#00a8cd] transition-all duration-[0.3s]">
                                 <span className="border rounded-full p-2">
                                    <MdEmail size={20} />
                                 </span>
                                 <span>hamdi2002em@gmail.com</span>
                              </div>
                           </div>
                        </div>
                        <div className="icons flex flex-wrap justify-start items-center gap-5 mt-6">
                           <div className="cursor-pointer bg-[#0a66c2] rounded-full hover:bg-white hover:text-[#0a66c2] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                              <a
                                 href="https://www.linkedin.com/in/hamdi-emad1/"
                                 target="_blank"
                                 className="p-3 block"
                                 rel="noopener noreferrer"
                              >
                                 <FaLinkedinIn size={22} />
                              </a>
                           </div>
                           <div className="cursor-pointer bg-[#333333] rounded-full hover:bg-white hover:text-[#333333] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                              <a
                                 href="https://github.com/Hamdi-Emad"
                                 target="_blank"
                                 className="p-3 block"
                                 rel="noopener noreferrer"
                              >
                                 <TbBrandGithubFilled size={22} />
                              </a>
                           </div>
                           <div className="cursor-pointer bg-[#1877f2]  rounded-full hover:bg-white hover:text-[#1877f2] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                              <a
                                 href="https://www.facebook.com/hamdi.emad.509/"
                                 target="_blank"
                                 className="p-3 block"
                                 rel="noopener noreferrer"
                              >
                                 <FaFacebookF size={22} />
                              </a>
                           </div>
                           <div className="cursor-pointer bg-[#1877f2]  rounded-full hover:bg-white hover:text-[#1877f2] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                              <a
                                 href="tel:201212384862"
                                 className="p-3 block"
                                 rel="noopener noreferrer"
                              >
                                 <IoCall size={22} />
                              </a>
                           </div>
                           <div className="cursor-pointer  bg-[#ea4335]  rounded-full hover:bg-white hover:text-[#ea4335] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                              <a
                                 href="https://mail.google.com/mail/?view=cm&fs=1&to=hamdi2002em@mail.com"
                                 target="_blank"
                                 className="p-3 block"
                                 rel="noopener noreferrer"
                              >
                                 <TbBrandGmail size={22} />
                              </a>
                           </div>
                           <div className="cursor-pointer bg-[#25d366]  rounded-full hover:bg-white hover:text-[#25d366] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                              <a
                                 href="https://wa.me/201212384862"
                                 target="_blank"
                                 className="p-3 block"
                                 rel="noopener noreferrer"
                              >
                                 <BsWhatsapp size={22} />
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
