// components/Loader.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell } from "lucide-react"; // Gym dumbbell icon from react-icons

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit="exit"
          className="fixed top-0 left-0 w-full h-screen bg-neutral-900 flex items-center justify-center z-[9999] overflow-hidden"
        >
          {/* Circular reveal */}
          <motion.div
            className="rounded-full bg-neutral-900 absolute inset-0 m-auto"
            style={{ width: 100, height: 100 }}
            initial={{ scale: 1, borderRadius: "50%" }}
            exit={{
              scale: 50,
              borderRadius: "0%",
              transition: { duration: 1, ease: "easeInOut" },
            }}
          />
          {/* Icon on top */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.7 }}
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="relative text-zinc-100 text-7xl z-10"
          >
            <Dumbbell />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
