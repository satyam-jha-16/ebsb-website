import React from "react";
import { motion } from "framer-motion";
import MCard from "../Cards/MCard";
import Fcard from "../Cards/Fcard";
import img1 from "../../assets/jc.jpeg";
import dean from "../../assets/dean.jpg";
import sumit from "../../assets/sumit.png";
import ravi from "../../assets/ravi.jpeg";
import maaz from "../../assets/maaz.jpeg";
import aps from "../../assets/aps.jpeg";
import tak from "../../assets/tak.jpeg";
import naruto from "../../assets/naruto.png";
import skj from "../../assets/skj.jpeg";
import ved from "../../assets/ved.jpeg";
import karan from "../../assets/karan.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="">
        <div className="text-4xl text-center">Our Mentors</div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex justify-center flex-col lg:flex-row"
        >
          <motion.div variants={fadeInUp}>
            <Fcard
              imagelink={dean}
              name={"Prof. Arvinder Kaur"}
              post={"Dean, USAR"}
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Fcard
              imagelink={sumit}
              name={"Dr. Sumit Chaudhary"}
              post={"Assistant Professor, USAR"}
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Fcard
              imagelink={ravi}
              name={"Dr. Ravi Butola"}
              post={"Assistant Professor, USAR"}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-5">
        <div className="text-4xl text-center">Meet Our Team</div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex justify-center flex-col lg:flex-row"
        >
          <motion.div variants={fadeInUp}>
            <MCard
              imagelink={maaz}
              name={"Maaz Salik"}
              post={"President"}
              linkedin={"https://www.linkedin.com/in/maaz-salik-a30899256/"}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <MCard
              imagelink={aps}
              name={"Aaditya Pratap Sharma"}
              post={"Vice President"}
              linkedin={
                "https://www.linkedin.com/in/aaditya-pratap-sharma-1a4877246/"
              }
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <MCard
              imagelink={tak}
              name={"Tauseef Ahmad Khan"}
              post={"Joint Secretary"}
              linkedin={
                "https://www.linkedin.com/in/tauseef-ahmad-khan-a94039236/"
              }
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <MCard
              imagelink={naruto}
              name={"Ritwick Johari"}
              post={"Secretary"}
              linkedin={"https://www.linkedin.com/in/ritwick-johari-a37223256/"}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex justify-center flex-col lg:flex-row"
        >
          <motion.div variants={fadeInUp}>
            <MCard
              imagelink={img1}
              name={"Jyotishko Chattopadhyay"}
              post={"Content Lead"}
              linkedin={
                "https://www.linkedin.com/in/jyotishka-chattopadhyay-9815b4258/"
              }
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <MCard
              imagelink={skj}
              name={"Satyam Kumar Jha"}
              post={"Lead Developer"}
              linkedin={"https://www.linkedin.com/in/satyam-jha-2abb28224/"}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <MCard
              imagelink={ved}
              name={"Vedant Sharma"}
              post={"Design and Media Lead"}
              linkedin={"https://www.linkedin.com/in/vedant-sharma-477640190/"}
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <MCard
              imagelink={karan}
              name={"Karan Bhatia"}
              post={"Social media lead"}
              linkedin={"https://www.linkedin.com/in/karanbhatia3420/"}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
