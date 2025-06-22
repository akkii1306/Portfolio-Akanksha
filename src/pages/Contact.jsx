import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("your_service_id", "your_template_id", form.current, "your_user_id")
      .then(() => {
        toast.success("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <section className="min-h-screen px-6 py-16 flex items-center bg-[#E5B8F4] dark:bg-[#1A103D] text-[#2D033B] dark:text-[#EDE9F9]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg">
            Whether you have a question, a project, or just want to say hi — my inbox is always open.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#810CA8]" />
              <span>akanksha200413@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#810CA8]" />
              <span>+91 9693665031</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#810CA8]" />
              <span>Jharkhand, India</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white dark:bg-[#2D1B5A] p-6 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded bg-white dark:bg-[#1A103D] text-[#2D033B] dark:text-[#EDE9F9] border border-[#810CA8] focus:outline-none"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded bg-white dark:bg-[#1A103D] text-[#2D033B] dark:text-[#EDE9F9] border border-[#810CA8] focus:outline-none"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-white dark:bg-[#1A103D] text-[#2D033B] dark:text-[#EDE9F9] border border-[#810CA8] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#810CA8] hover:bg-[#C147E9] text-white px-6 py-3 rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Toast notification container */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
