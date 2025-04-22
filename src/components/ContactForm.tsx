
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Mail, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // Show success message (in a real app)
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl md:text-2xl font-light mb-4">
          ¿Quieres saber más?
        </h3>
        <p className="text-gray-400 mb-6">
          Completa el formulario y me pondré en contacto contigo a la brevedad.
        </p>
        
        <div className="space-y-4 mt-8">
          <h4 className="text-xl font-light mb-4">Conéctate conmigo</h4>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/thehumanupgrade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contacto@carlosmontoya.com"
              className="text-white hover:text-gold transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-black/40 border-gray-700 focus:border-gold"
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-black/40 border-gray-700 focus:border-gold"
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-black/40 border-gray-700 focus:border-gold h-32"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-black border border-gold hover:bg-gold/10 text-white"
        >
          Enviar <Send size={16} className="ml-2" />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
