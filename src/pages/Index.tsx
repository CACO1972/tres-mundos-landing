
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import RevealOnScroll from "@/components/RevealOnScroll";
import BackgroundPattern from "@/components/BackgroundPattern";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Pattern */}
      <BackgroundPattern />
      
      {/* Logo in top left */}
      <div className="fixed top-4 left-4 z-50 w-12 h-12">
        <img 
          src="/lovable-uploads/44b2d2ab-7c3c-465d-9705-af0fe494961a.png" 
          alt="Dr. Carlos Montoya Logo" 
          className="w-full h-full"
        />
      </div>
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <section id="about" className="section-container py-20">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-10 border-b border-gold/30 pb-2 inline-block">
              Sobre mí
            </h2>
            <p className="text-white/80 text-lg leading-relaxed font-light">
              Soy cirujano dentista, especialista en implantes. Me dedico a crear herramientas 
              que simplifiquen las decisiones clínicas y ayuden a los pacientes a entender mejor 
              sus tratamientos. También desarrollo tecnología aplicada a la salud y el rendimiento 
              humano. Trabajo con precisión y me gusta hacer las cosas bien.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-black/30 py-20">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-10 border-b border-gold/30 pb-2 inline-block">
              Mis proyectos
            </h2>
            <Projects />
          </div>
        </RevealOnScroll>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container py-20">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-10 border-b border-gold/30 pb-2 inline-block">
              Contacto
            </h2>
            <ContactForm />
          </div>
        </RevealOnScroll>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 Carlos Montoya. Todos los derechos reservados.
            </div>
            <div className="text-white/60 text-sm text-center md:text-right">
              Esta página forma parte del ecosistema The Human Upgrade.
            </div>
          </div>
        </div>
      </footer>

      {/* Quick contact icons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        <a
          href="https://instagram.com/thehumanupgrade"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/70 border border-gold/50 p-2 rounded-full text-white hover:bg-gold/20 transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/70 border border-gold/50 p-2 rounded-full text-white hover:bg-gold/20 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/70 border border-gold/50 p-2 rounded-full text-white hover:bg-gold/20 transition-colors"
          aria-label="WhatsApp"
        >
          <Mail size={20} />
        </a>
        <a
          href="mailto:contacto@carlosmontoya.com"
          className="bg-black/70 border border-gold/50 p-2 rounded-full text-white hover:bg-gold/20 transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
};

export default Index;
