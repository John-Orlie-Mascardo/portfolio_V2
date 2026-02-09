import React from "react";

export default function AboutComponents() {
  return (
    <>
      <section className="bg-deep-teal-300 py-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-center pt-10 text-white">About Me</h2>
        </div>
        <div>
          <p className="text-justify max-w-3xl mx-auto mt-6 text-white text-lg font-zalando-italic">
             I am a BSIT student at St. Dominic College of Asia, currently in my Third year. 
             I am interested in exploring new things, solving problems, and focusing on my mental and physical growth. 
             I spend most of my time honing my skills through reading, watching, practicing, and asking questions.
             While I am still discovering my specific aspirations within the field, 
             I am actively exploring different paths to find where my true interests lie.
          </p>
        </div>
      </section>
    </>
  );
}
