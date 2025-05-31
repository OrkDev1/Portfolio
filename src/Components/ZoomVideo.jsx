import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ZoomVideo({ src, className = "", poster = "" }) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      {/* Thumbnail video (muted, paused) */}
      <video
        src={src}
        className={`${className} cursor-zoom-in`}
        onClick={(e) => {
          e.stopPropagation();
          setIsZoomed(true);
        }}
        muted
        playsInline
        preload="metadata"
        poster={poster}
      />

      {/* Fullscreen zoomed-in video */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center cursor-zoom-out" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsZoomed(false)}>
            <motion.video
              src={src}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              autoPlay
              controls
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
