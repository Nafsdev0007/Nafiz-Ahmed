import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  //

  const handleChange = ({target:{name, value}}) => {
        setForm({...form, [name]:value})
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try{
      await  emailjs.send("service_lo9pfc8","template_t5thp4u",{
            from_name:form.name,
            to_name:"Nafiz",
            to_email:"nafsdev007@gmail.com",
            from_email:form.email,
            message:form.message,
        },'pl2T4uVxicRuemX-K')
        setLoading(false);
        alert("Message sent successfully")
        setForm({
            name:"",
            email:"",
            message:""
        })
    }catch(error){
        console.log(error);
        setLoading(false);
        alert("Something went wrong")
    }
  };

  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex justify-center flex-col items-center">
        <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="absolute h-[118vh] sm:h-[130vh]"
        />
        <div className="contact-container py-16">
          <div className="w-full max-w-md">
            <h2 className="head-text text-center">Let's talk</h2>
            <p className="text-lg text-white-600 text-center mb-8">
              Whether you're looking to build a new website, improve your
              existing platform, or bring a unique project to life, I'm here to
              help.
            </p>

            <form
              action=""
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col space-y-7"
            >
              <label htmlFor="" className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  className="field-input w-full"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="" className="space-y-3">
                <span className="field-label">E-mail</span>
                <input
                  type="email"
                  name="email"
                  id=""
                  required
                  className="field-input w-full"
                  placeholder="name123@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="" className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  id=""
                  required
                  className="field-input w-full"
                  placeholder="Hi, I wanna give you a job..."
                  value={form.message}
                  rows={5}
                  onChange={handleChange}
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading? 'Sending...': 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
