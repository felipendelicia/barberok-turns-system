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

          <h2>🔥 Sacá un turno 🔥</h2>
          
          <form className="take-turns-form">

            <input type="text" placeholder=" ingresá tu nombre"/> {/*name*/}
            <input type="text" placeholder=" ingresá tu apellido"/> {/*surname*/}
            <input type="date"/> {/*date*/}
            <input type="time"/> {/*time*/}

          </form>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Mandale!
          </motion.button>

        </div>

      </motion.div>
    </motion.div>
  );
};

export default TakeTurnsModal;
