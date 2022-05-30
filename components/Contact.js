import { useState } from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { contactAnimation } from "../framer/variants";
import { InView } from "react-intersection-observer";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <InView threshold={0} triggerOnce={true}>
      {({ ref, inView }) => (
        <section
          id="contact"
          className="container mt-4 mb-2 flex flex-col items-center"
        >
          <h2 className="text-3xl inline-block relative mb-6 text-white">
            Contact Me
            <div className="absolute w-full border-b-2 border-primary"></div>
          </h2>
          <section className="flex my-4" ref={ref}>
            {/* Email */}
            <a
              href="mailto:contact@carlosgauci.com"
              tabIndex={-1}
              className="focus:outline-none"
            >
              <motion.button
                className="w-16 h-16 mx-3 flex items-center justify-center p-3 rounded-full bg-gray-800 border-2 focus:outline-none"
                aria-label="email"
                variants={contactAnimation}
                initial="initialLeft"
                animate={inView && "animateLeft"}
                whileFocus={{ border: "2px solid rgba(255,255,255,1)" }}
              >
                <svg
                  viewBox="0 0 512 512"
                  width="100%"
                  height="100%"
                  fill="#ffffff"
                >
                  <g>
                    <g>
                      <polygon points="339.392,258.624 512,367.744 512,144.896 		" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon points="0,144.896 0,367.744 172.608,258.624 		" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856
			L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z"
                      />
                    </g>
                  </g>
                </svg>
              </motion.button>
            </a>

            {/* Github  */}
            <a
              href="https://github.com/carlosgauci"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              className="focus:outline-none"
            >
              <motion.button
                className="w-16 h-16 mx-3 flex items-center justify-center p-2 rounded-full bg-gray-800 focus:outline-none"
                aria-label="github"
                variants={contactAnimation}
                initial="initialRight"
                animate={inView && "animateRight"}
                whileFocus={{ border: "2px solid rgba(255,255,255,1)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="100%"
                  height="100%"
                  fill="#ffffff"
                >
                  <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
                </svg>
              </motion.button>
            </a>
          </section>
          {!sent ? (
            <ContactForm setSent={setSent} inView={inView} />
          ) : (
            <p className="text-white mt-4 mb-40">
              Your message was sent successfully!
            </p>
          )}
        </section>
      )}
    </InView>
  );
}
