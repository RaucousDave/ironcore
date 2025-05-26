import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // simulate load time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
