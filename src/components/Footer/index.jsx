import { useState, useEffect, useRef } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Time from "../Time";

// emailjs
import emailjs from "@emailjs/browser";
import Alert from "../Alert";

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);
  const form = useRef();
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PRIVATE_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setTimeout(() => {
            setLoading(false);
          }, 500);
          setTimeout(() => {
            setAlert(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          alert(`Can not send you message at this time. Please send your message via email directly to
          "khosroshariatzadeh@gmail.com"`)
        }
      );
    e.target.reset();
  };

  return (
    <footer ref={ref} className="footer" id="contact">
      <BackgroundLines />

      <div className="footer--grid">
        <div className="footer--grid--heading">
          <h2>
            <ParaWriting stagger={0.08} text={"Get in "} sec={"touch"} />
          </h2>
        </div>

        <motion.div
        initial="hidden"
        animate={controls}
        variants={opacityVariant}
        transition={{ duration: 1, delay: 1.5 }}
        onAnimationComplete={() => handleComplete()}
        >
          <form onSubmit={sendEmail} ref={form} className="input--div">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
            />
            <label>Message</label>
            <textarea
              className=""
              rows={6}
              name="message"
              placeholder="Enter your message..."
              required
            ></textarea>

            {!loading ? (
              <div>
                {!alert ? (
                  <button
                    className="w-[60%] active:translate-y-1 border-rose-700 border-[2px] hover:bg-rose-700 py-4 font-semibold rounded-md"
                    type="submit"
                  >
                    Send your message!
                  </button>
                ) : (
                  <div>
                    <button
                      className="w-[60%] active:translate-y-1 border-rose-700 border-[2px] py-4 font-semibold rounded-md"
                      type="submit"
                      disabled
                    >
                      Send your message!
                    </button>
                    <Alert />
                  </div>
                )}
              </div>
            ) : (
              <button
                className="w-[60%] bg-gray-400 border-gray-600 border-[2px] py-3 font-semibold rounded-md"
                type="submit"
                disabled
              >
                <span className="flex items-center justify-center gap-2 text-black">
                  <img
                    className="animate-spin"
                    src="/loading.png"
                    width={30}
                    alt=""
                  />
                  Please wait...
                </span>
              </button>
            )}
          </form>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={opacityVariant}
        transition={{ duration: 1, delay: 2.5 }}
        className="footer--bottom"
        onAnimationComplete={() => handleComplete()}
      >
        <p>Copyright © {new Date().getFullYear()} Khosro Shariatzadeh</p>
        <p>
          <Time delay={3} />
        </p>
      </motion.div>
    </footer>
  );
}
