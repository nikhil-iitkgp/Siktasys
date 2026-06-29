"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { Card } from "../components/ui/card";
import { FaLinkedin } from "react-icons/fa";

// Import team member images
import DrPradipMondal from "../assets/DrPradipMondal.jpg";
import DrAmitDatta from "../assets/DrAmitDatta.jpg";
import MrigankSharad from "../assets/MrigankSharad.png";
// import NarayanPrasad from "../assets/NarayanPrasad.jpg";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

interface Leader {
  name: string;
  title: string;
  image: string;
  linkedin: string;
  description: string;
}

const leadershipTeam: Leader[] = [
  {
    name: "Dr. Pradip Mondal",
    title: "Director",
    image: DrPradipMondal,
    linkedin: "https://www.linkedin.com/in/pradip-mandal-36151b273/?originalSubdomain=in",
    description:
      "BTech, BE College Shibpur, PhD, IISc. Ex Philips Semis, Motorola, Alliance Semiconductor, Cadence, Synopsys. Professor, IIT Kharagpur. Expertise: Analog Mixed Signal IC Design, Power Management, Analog Frontend, RFIC IC Testing, Characterization",
  },
  {
    name: "Dr. Amit Dutta",
    title: "Director",
    image: DrAmitDatta,
    linkedin: "https://www.linkedin.com/in/dr-amit-dutta-41523562/?originalSubdomain=in",
    description:
      "BTech, IIEST Shibpur, PhD, IISc. Assoc. Professor, IIT Kharagpur Ex NoC, Broadcom, Texas Instruments. Expertise: SoC Architect, IP Design, Wireless Communication, Modem Algorithm and Architecture",
  },
  {
    name: "Dr. Mrigank Sharad",
    title: "Director",
    image: MrigankSharad,
    linkedin: "https://www.linkedin.com/in/mrigank-sharad-b2835b7/?originalSubdomain=in",
    description:
      "BTech IIT Kharagpur, PhD Purdue. Asst. Professor, IIT Kharagpur. Expertise: Analog Mixed Signal IC Design, Edge Computing ICs, AI Accelerator, Neuromorphic Computing, SERDES, Signal Processing",
  }
  // {
  //   name: "Narayan Prasad",
  //   title: "Advisor & Strategy Consultant",
  //   image: NarayanPrasad,
  //   linkedin: "https://www.linkedin.com/in/narayanprasad/?originalSubdomain=in",
  //   description:
  //     "Edu.: Texas A&M, BITS Pilani Ex TI, Rambus, Broadcom, Intel, Arm, Sensesemi",
  // },
];

const About = () => {

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white flex flex-col overflow-x-hidden">
      <Header />
      <Breadcrumb />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-12 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 mb-6 leading-relaxed pb-3">
          About SiktaSys
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          SiktaSys is a <span className="text-cyan-400 font-semibold">fabless semiconductor company</span> developing IPs and Chipsets for Edge Computing, 
          Wireless and Wireline Communication SoCs, <span className="text-blue-400 font-semibold">Power management unit</span> and Sensor Data 
          Acquisition System.
        </p>
      </motion.div>

      {/* Leadership Team */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 leading-relaxed pb-1"
        >
          Leadership Team
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipTeam.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3 }
              }}
              className="rounded-xl overflow-hidden h-full"
            >
              <Card className="h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl rounded-xl relative overflow-hidden group hover:border-cyan-700/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex flex-col items-center gap-4 p-6 relative z-10 h-full">
                  {/* Avatar */}
                  <div className="relative mt-2">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-28 h-28 rounded-full border-4 border-cyan-500/40 object-cover shadow-xl"
                    />
                    <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/20 group-hover:ring-cyan-400/40 transition-all duration-300"></div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white leading-tight">{leader.name}</h3>
                    <p className="text-cyan-400 font-semibold text-sm mt-1">{leader.title}</p>
                  </div>

                  {/* LinkedIn */}
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                  >
                    <FaLinkedin size={16} />
                    LinkedIn
                  </a>

                  {/* Description */}
                  <div className="border-t border-gray-700/60 pt-3 w-full flex-1">
                    <p className="text-gray-300 leading-relaxed text-sm text-center">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
