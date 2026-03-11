import React, { useState } from "react";
import { webDevCerts, otherCerts } from "../data/certificates";

export default function Certificatecard() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="py-24 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary-content text-sm font-medium mb-4 border border-primary/30">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-zalando-expanded-black text-base-content mb-6">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Certificates</span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="mt-6 text-base-content/60 max-w-2xl mx-auto text-lg font-zalando-italic">
            Certifications that showcase my skills and commitment to professional development
          </p>
        </div>

        {/* Web Development Certificates Section */}
        <div className="mb-16 bg-base-200/30 rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-zalando-expanded-bold text-base-content mb-8 flex items-center gap-3">
            <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Web Development Certificates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevCerts.map((certificate) => (
              <div 
                key={certificate.id} 
                className="group bg-base-200/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-base-300 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title} 
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-base-300/80 to-transparent opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4">
                      <button 
                        className="flex items-center gap-2 px-4 py-2 bg-base-100/90 backdrop-blur-sm rounded-lg text-base-content hover:bg-base-100 transition-all duration-300 text-sm"
                        onClick={() => openModal(certificate)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-zalando-expanded-bold text-base-content mb-3 group-hover:text-primary transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-base-content/60 text-sm">{certificate.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-base-content/60 text-sm">{certificate.date}</span>
                    </div>
                  </div>
                  <button 
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium"
                    onClick={() => openModal(certificate)}
                  >
                    Verify Certificate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Certificates Section */}
        <div className="bg-base-200/50 rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-zalando-expanded-bold text-base-content mb-8 flex items-center gap-3">
            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Other Certificates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCerts.map((certificate) => (
              <div 
                key={certificate.id} 
                className="group bg-base-200/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-base-300 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title} 
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-base-300/80 to-transparent opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4">
                      <button 
                        className="flex items-center gap-2 px-4 py-2 bg-base-100/90 backdrop-blur-sm rounded-lg text-base-content hover:bg-base-100 transition-all duration-300 text-sm"
                        onClick={() => openModal(certificate)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-zalando-expanded-bold text-base-content mb-3 group-hover:text-secondary transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-base-content/60 text-sm">{certificate.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-base-content/60 text-sm">{certificate.date}</span>
                    </div>
                  </div>
                  <button 
                    className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 text-sm font-medium"
                    onClick={() => openModal(certificate)}
                  >
                    Verify Certificate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 text-base-content/60 hover:text-base-content transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-base-100 rounded-lg overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <h3 className="text-2xl font-zalando-expanded-bold text-base-content mb-4">
                    {selectedCertificate.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-base-content/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-base-content/70 text-sm">{selectedCertificate.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-base-content/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-base-content/70 text-sm">{selectedCertificate.date}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <img 
                      src={selectedCertificate.image} 
                      alt={selectedCertificate.title} 
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View All Certificates Button */}
        <div className="text-center mt-16">
          <a 
            href="#certificates" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-secondary text-primary-content rounded-full font-zalando-expanded-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
