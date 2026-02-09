import React from "react";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-deep-teal-200 pt-20">
      <div className="max-w-3xl text-center p-8 bg-deep-teal-600 text-white rounded-3xl shadow-lg">
        <img src={profile} alt="John Mascardo" className="w-36 h-36 rounded-full mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-zalando-expanded-bold">
          Hi! I'm John Orlie T. Mascardo
        </h1>
        <p className="mt-2 text-lg font-zalando-expanded-italic">
          An aspiring web developer.
        </p>
      </div>
    </section>
  );
}
