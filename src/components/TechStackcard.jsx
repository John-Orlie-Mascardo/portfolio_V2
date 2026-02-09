// Import React so we can use JSX and build components
import React from "react";

// Import images (Java, C programming, Dart) from the TechStack folder via index.js
import { JavaLogo, CprogrammingLogo, Dart } from "../assets/TechStack/index.js";

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

            <div>
                {/* Container for the Java logo.
                - grid + place-items-center centers content inside the box
                - w-32 h-32 gives the box a fixed size
                - mx-auto centers the box itself horizontally */}

              <div className="grid place-items-center w-32 h-32 mx-auto">
                {/* Display the Java logo image
                  - src={JavaLogo} uses the imported variable
                  - alt provides descriptive text
                  - w-20 h-20 sets the image size */}
                <img src={JavaLogo} alt="Java" className="w-20 h-20" />
              </div>

              <div className="grid place-items-center w-32 h-32 mx-auto">
                {/* Container for the C programming logo, same styling as Java */}
                <img src={CprogrammingLogo} alt="C programming" className="w-20 h-20" />
              </div>

              <div className="grid place-items-center w-32 h-32 mx-auto">
                {/* Container for the Dart Logo, same styling as Java */}
                <img src={Dart} alt="Dart" className="w-20 h-20" />
              </div>
            </div>
            
          </div>

          {/* Placeholder headings for other categories */}
          <h3>Frontend</h3>
          <h3>IDE</h3>
          <h3>Tools</h3>
          
        </div>

      </section>
    </>
  );
}
