import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ZoomImage({ src, alt = "", className = "" }) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={(e) => {
          e.stopPropagation();
          setIsZoomed(true);
        }}
        className={`${className} cursor-zoom-in transition-transform hover:scale-[1.02]`}
      />

      <AnimatePresence>
        {isZoomed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsZoomed(false)} className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center">
            <motion.img
              src={src}
              alt={alt}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-h-[60%] max-w-[60%] rounded-lg shadow-xl cursor-zoom-out"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
