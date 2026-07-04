import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  PaperPlaneTilt,
  GithubLogo,
  LinkedinLogo,
  Envelope,
  Phone,
  MapPin,
} from "phosphor-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_5ovlrwr",
        "template_dgz9zip",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "bV3KyYLIR0NJiN7NL"
      );

      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message ❌");
    }

    setLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 relative overflow-hidden bg-black"
    >
      <div className="container mx-auto max-w-6xl relative z-10">

        {/* TITLE */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Get In <span className="text-primary font-medium italic">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I’m currently open to Full Stack / Backend Internship opportunities.
            Let’s build something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="reveal reveal-left">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block mb-2 font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:border-primary transition-colors text-white resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 disabled:opacity-60 font-bold shadow-lg shadow-primary/20"
              >
                {loading ? "Sending..." : "Send Message"}
                <PaperPlaneTilt size={18} />
              </button>

            </form>
          </div>

          {/* INFO */}
          <div className="space-y-8 reveal reveal-right">

            <div>
              <h3 className="text-2xl font-light mb-6 text-white italic">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether it's backend architecture discussions, Spring Boot workflows,
                or internship opportunities — I’m ready to contribute to high-impact projects.
              </p>
            </div>

            <div className="space-y-4">

              <div className="flex items-center gap-4 p-4 bg-gray-900/40 border border-gray-800 rounded-xl hover:border-primary/30 transition-colors">
                <Envelope size={20} className="text-primary" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-400">devvarshney45@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/40 border border-gray-800 rounded-xl hover:border-primary/30 transition-colors">
                <Phone size={20} className="text-primary" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-gray-400">+91-6397003690</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/40 border border-gray-800 rounded-xl hover:border-primary/30 transition-colors">
                <MapPin size={20} className="text-primary" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-gray-400">Ghaziabad, Uttar Pradesh, India</p>
                </div>
              </div>

            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-white">Professional Profiles</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/devvarshney45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-primary transition-all group"
                >
                  <GithubLogo size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href="https://www.linkedin.com/in/dev-varshney-837390325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-primary transition-all group"
                >
                  <LinkedinLogo size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Contact;