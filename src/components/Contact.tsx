import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import {
  PaperPlaneTilt,
  GithubLogo,
  LinkedinLogo,
  Envelope,
  Phone,
  MapPin,
} from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      });

      gsap.from(formRef.current?.children || [], {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      });

      gsap.from(infoRef.current?.children || [], {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">

        {/* TITLE */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I’m currently open to Full Stack / Backend Internship opportunities.
            Feel free to reach out for collaboration, projects, or technical discussions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FORM */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-lg transition-all duration-300 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <PaperPlaneTilt size={18} />
              </button>

            </form>
          </div>

          {/* INFO */}
          <div ref={infoRef} className="space-y-8">

            <div>
              <h3 className="text-2xl font-light mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's backend architecture discussions, MERN stack projects,
                or internship opportunities — I’d love to connect and collaborate.
              </p>
            </div>

            <div className="space-y-4">

              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                <Envelope size={20} className="text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    varshneydev365@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                <Phone size={20} className="text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">
                    +91-6397003690
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                <MapPin size={20} className="text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">
                    Ghaziabad, Uttar Pradesh, India
                  </p>
                </div>
              </div>

            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/devvarshney45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-all"
                >
                  <GithubLogo size={20} className="text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/in/dev-varshney-837390325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-all"
                >
                  <LinkedinLogo size={20} className="text-white" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;