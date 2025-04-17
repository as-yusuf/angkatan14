
import React from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";

const pages = [
  { id: 1, image: "/und1.png", alt: "Cover" },
  { id: 2, image: "/und2.png", alt: "Isi 1" },
  { id: 3, image: "/und3.png", alt: "Isi 2" },
  { id: 4, image: "/und_back.png", alt: "Belakang" },
];

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [audioPlaying, setAudioPlaying] = React.useState(false);
  const audioRef = React.useRef(null);

  const nextPage = () => currentPage < pages.length - 1 && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 0 && setCurrentPage(currentPage - 1);
  const toggleAudio = () => {
    if (audioPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setAudioPlaying(!audioPlaying);
  };
  const downloadPDF = () => window.open("/undangan.pdf", "_blank");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100 p-4">
      <h1 className="text-3xl font-serif mb-6">Undangan Pelepasan</h1>
      <div className="overflow-hidden w-full max-w-3xl rounded-2xl shadow-lg">
        <motion.img
          key={pages[currentPage].id}
          src={pages[currentPage].image}
          alt={pages[currentPage].alt}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full object-cover"
        />
      </div>
      <div className="flex gap-4 mt-6">
        <button onClick={prevPage} disabled={currentPage === 0} className="btn">Sebelumnya</button>
        <button onClick={nextPage} disabled={currentPage === pages.length - 1} className="btn">Selanjutnya</button>
        <button onClick={downloadPDF} className="btn">Unduh PDF</button>
        <button onClick={toggleAudio} className="btn"><Music className="inline w-4 h-4 mr-2"/>{audioPlaying ? "Pause" : "Musik"}</button>
      </div>
      <p className="mt-2 text-sm text-gray-600">Halaman {currentPage + 1} dari {pages.length}</p>
      <audio ref={audioRef} loop><source src="/musik-latar.mp3" type="audio/mpeg" /></audio>
    </div>
  );
}
