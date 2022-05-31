import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion"
import Home from "../views/Home";
import TurnsView from "../views/TurnsView";

const AnimatedRoutes = () => {

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/current-turns" element={<TurnsView />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
