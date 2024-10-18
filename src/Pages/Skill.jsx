import React from "react";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
  faBootstrap,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Skill = () => {
  const waveAnimation = {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      ease: "easeInOut",
    },
  };

  const container = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  <FontAwesomeIcon icon={faBootstrap} />;

  const icons = [
    { icon: faHtml5, color: "orange", padding: "9px 15px 9px 15px" },
    { icon: faCss3Alt, color: "blue", padding: "9px 15px 9px 15px" },
    { icon: faJs, color: "yellow", padding: "9px 13px 9px 13px" },
    { icon: faReact, color: "lightblue", padding: "9px 10px 9px 10px" },
    { icon: faJava, color: "red", padding: "9px 15px 9px 15px" },
    { icon: faBootstrap, color: "purple", padding: "9px 5px 9px 5px" },
  ];

  return (
    <div className="skills py-5">
      <h1 className="text-center" style={{ color: "white" }}>
        My Skills
      </h1>
      <motion.div
        className="row text-center"
        variants={container}
        animate="animate"
        initial="hidden"
      >
        {icons.map((iconObj, index) => (
          <div key={index} className="col-lg-2 col-sm-3 col-5 pt-5">
            <motion.div variants={{ animate: waveAnimation }}>
              <FontAwesomeIcon
                className="fa-3x"
                icon={iconObj.icon}
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: iconObj.padding,
                  color: iconObj.color,
                }}
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
