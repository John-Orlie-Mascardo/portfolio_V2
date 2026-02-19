import React from "react";

export default function Certificatecard() {
  // Sample certificates - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2023",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "React Advanced Concepts",
      issuer: "Coursera",
      date: "2023",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "JavaScript Masterclass",
      issuer: "Udemy",
      date: "2022",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Node.js and Express",
      issuer: "FreeCodeCamp",
      date: "2022",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Database Design",
      issuer: "LinkedIn Learning",
      date: "2021",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Git and GitHub",
      issuer: "Coursera",
      date: "2021",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="certificates" className="py-24 px-4 bg-linear-to-br from-deep-teal-900 via-deep-teal-800 to-deep-teal-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-mint-leaf-500/20 rounded-full text-mint-leaf-200 text-sm font-medium mb-4 border border-mint-leaf-500/30">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-zalando-expanded-black text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-mint-leaf-400 to-bright-teal-blue-400">Certificates</span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-mint-leaf-500 to-bright-teal-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-alabaster-grey-300 max-w-2xl mx-auto text-lg font-zalando-italic">
            Certifications that showcase my skills and commitment to professional development
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id} 
              className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-mint-leaf-500/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-deep-teal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-4">
                    <a 
                      href="#" 
                      className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-deep-teal-900 hover:bg-white transition-all duration-300 text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-zalando-expanded-bold text-white mb-3 group-hover:text-mint-leaf-400 transition-colors duration-300">
                  {certificate.title}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-alabaster-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-alabaster-grey-400 text-sm">{certificate.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-alabaster-grey-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-alabaster-grey-400 text-sm">{certificate.date}</span>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-mint-leaf-400 hover:text-bright-teal-blue-400 transition-colors duration-300 text-sm font-medium"
                >
                  Verify Certificate
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <div className="text-center mt-16">
          <a 
            href="#certificates" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-mint-leaf-500 to-bright-teal-blue-500 text-white rounded-full font-zalando-expanded-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('certificates');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            View All Certificates
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
