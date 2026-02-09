// Import React so we can use JSX and build components
import React from "react";

// Import images (Java, C programming, Dart) from the TechStack folder via index.js
import { JavaLogo, Dart } from "../assets/TechStack/index.js";
import {  Html, Css, Javascript, Flutter, ReactLogo } from "../assets/TechStack/index.js";
import { Vscode, Intellij, AndroidStudio } from "../assets/TechStack/index.js";
import { Express, Nodejs, MongoDB, Git, Github, Render, Vercel, Vite } from "../assets/TechStack/index.js";

// Define and export the TechStackcard component
export default function TechStackcard() {
  return (
    <>
      {/* Section wrapper with background color and vertical padding */}
      <section className="bg-deep-teal-400 py-20">

        {/* Title container */}
        <div>
          {/* Heading for the section, styled with Tailwind classes for size, weight, alignment, spacing, and color */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center pt-10 text-white">
            Tech Stack
          </h2>
        </div>

        {/* Main content area, centered text with white color and custom font */}
        <div className="text-center text-white font-zalando-italic text-lg">

          {/* Subsection for Programming Language */}
          <div>
            {/* Subheading label */}
            <h3>Programming Language</h3>
              <div className="flex justify-center">
                 {/* Container to center the grid of logos */}
                 
                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {/* Container for the Java logo.
                  - grid + place-items-center centers content inside the box
                  - w-32 h-32 gives the box a fixed size
                  - mx-auto centers the box itself horizontally */}

                  <div className="flex items-center justify-center w-32 h-32 mx-auto">
                    {/* Display the Java logo image
                      - src={JavaLogo} uses the imported variable
                      - alt provides descriptive text
                      - w-20 h-20 sets the image size */}
                    <img src={JavaLogo} alt="Java" className="w-20 h-20" />
                  </div>

                  <div className="flex items-center justify-center w-32 h-32 mx-auto">
                    {/* Container for the Dart Logo, same styling as Java */}
                    <img src={Dart} alt="Dart" className="w-20 h-20" />
                  </div>
                </div>
              </div>
          </div>
        </div>

        <div className="text-center text-white font-zalando-italic text-lg">
          <div>
            <h3>Frontend</h3>

            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Html} alt="Html" className="w-20 h-20" />
                </div>

                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Css} alt="Css" className="w-20 h-20" />
                </div>

                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Javascript} alt="Javascript" className="w-24 h-24" />
                </div>

                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Flutter} alt="Flutter" className="w-20 h-20" />
                </div>

                <div className="flex items-center justify-center col-span-2 w-32 h-32 mx-auto">
                  <img src={ReactLogo} alt="React" className="w-20 h-20" />
                </div>
              </div>
            </div>
          </div>  
        </div>

        <div className="text-center text-white font-zalando-italic text-lg">
          <div>
            <h3>IDE</h3>

            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Vscode} alt="Visual Studio Code" className="w-20 h-20" />
                </div>

                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Intellij} alt="IntelliJ" className="w-20 h-20" />
                </div>

                <div className="flex items-center justify-center col-span-2 w-32 h-32 mx-auto">
                  <img src={AndroidStudio} alt="Android Studio" className="w-20 h-20" />
                </div>
              </div>
            </div>
          </div>
        </div>  
        
        <div className="text-center text-white font-zalando-italic text-lg">
          <h3>Tools</h3>
        
          <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Express} alt="Express" className="w-20 h-20" />
                </div>

                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Nodejs} alt="Nodejs" className="w-20 h-20" />
                </div>

                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={MongoDB} alt="MongoDB" className="w-24 h-24" />
                </div>

                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Git} alt="Git" className="w-20 h-20" />
                </div>

                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Github} alt="Github" className="w-20 h-20" />
                </div>
                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Render} alt="Render" className="w-24 h-24" />
                </div>

                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Vercel} alt="Vercel" className="w-20 h-20" />
                </div>

                <div className="flex items-center justify-center w-32 h-32 mx-auto">
                  <img src={Vite} alt="Vite" className="w-20 h-20" />
              </div>
            </div>
        </div>  
      </div>
    </section>
  </>
);
}
