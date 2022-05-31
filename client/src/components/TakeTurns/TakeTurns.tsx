import { motion } from "framer-motion";
import React from "react";
import "./TakeTurnsBackdrop.css";
import "./TakeTurnsModal.css";

const TakeTurnsModal = (props:{closeModal:()=>void}) => {
  return (
    <motion.div
      className="take-turns-backdrop-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={props.closeModal}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="take-turns-modal-container"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{
          y: "0",
          opacity: 1,
          transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
          },
        }}
        exit={{ y: "100vh", opacity: 0 }}
      >
        
        <div className="take-turns-modal-content">

          <h2>Sacá un turno 💥</h2>

        </div>

      </motion.div>
    </motion.div>
  );
};

export default TakeTurnsModal;
