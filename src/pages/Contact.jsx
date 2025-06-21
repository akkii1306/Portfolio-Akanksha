import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("your_service_id", "your_template_id", form.current, "your_user_id")
      .then(() => {
        alert("Message sent!");
        form.current.reset();
      }).catch(() => {
        alert("Error sending message.");
      });
  };

  return (
    <section className="min-h-screen px-6 py-16 bg-[#E5B8F4] dark:bg-[#1A103D] text-[#2D033B] dark:text-[#EDE9F9]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">
          <input name="name" required placeholder="Name" className="w-full p-3 rounded bg-white dark:bg-[#2D1B5A] text-[#2D033B] dark:text-[#EDE9F9]" />
          <input name="email" required placeholder="Email" className="w-full p-3 rounded bg-white dark:bg-[#2D1B5A] text-[#2D033B] dark:text-[#EDE9F9]" />
          <textarea name="message" required placeholder="Message" rows="5" className="w-full p-3 rounded bg-white dark:bg-[#2D1B5A] text-[#2D033B] dark:text-[#EDE9F9]" />
          <button type="submit" className="bg-[#810CA8] hover:bg-[#C147E9] text-white px-6 py-3 rounded font-semibold">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
