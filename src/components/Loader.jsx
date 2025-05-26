import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { usePageImagesLoaded } from "../hooks/usePageImagesLoaded";

export default function Loader() {
  const imagesLoaded = usePageImagesLoaded();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (imagesLoaded) {
      const timeout = setTimeout(() => {
        setDone(true);
      }, 500); // slight delay for smoother exit

      return () => clearTimeout(timeout);
    }
  }, [imagesLoaded]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit="exit"
          className="fixed top-0 left-0 w-full h-screen bg-neutral-900 flex items-center justify-center z-[9999] overflow-hidden"
        >
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
