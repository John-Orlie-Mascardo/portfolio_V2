import React from "react";
import profile from "../assets/profile.jpg";

export default function Hero() {
 return (
  <section id="hero" className="h-screen flex items-center justify-center bg-[#72767d] pt-20">
   <div className="max-w-3xl text-center p-8 bg-blue-950 text-white rounded-3xl shadow-lg">
    <img src={profile} alt="John Mascardo" className="w-36 h-36 rounded-full mx-auto mb-4" />
    <h1 className="text-3xl md:text-4xl font-semibold">Hi! I'm John Orlie T. Mascardo</h1>
    <p className="mt-2 text-lg">An aspiring web developer.</p>
   </div>
  </section>
 );
}
