import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const images = Array.from({ length: 27 }, (_, i) => `/imagem${i + 1}.jpg`);

export default function Home() {
  return (
    <div className="container">
      <motion.div
        className="background"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {images.concat(images).map((img, index) => (
          <img key={index} src={img} alt={`Foto ${index}`} className="image" />
        ))}
      </motion.div>


      <div className="overlay">
        <h1 className="title">🎉IAGO FORMOU🎉</h1>
        <h2 className="subtitle">Técnico em Informática</h2>
        <p className="description">
          Depois de tantos anos de luta, brigas para estudar,
          puxão de orelha, brincadeiras com essa galera que me acompanhou  
          durante esses 3 anos, finalmente acabou.
          Agora começa de novo, só que em nível hard! 🚀
        </p>
        <p className="footer">E um obrigado pela sua presença aqui hoje.</p>
      </div>
      <div className="divvv">
      <motion.div
        className="background2"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {images.concat(images).map((img, index) => (
          <img key={index} src={img} alt={`Foto ${index}`} className="image" />
        ))}
      </motion.div>
      </div>
    </div>
  );
}
