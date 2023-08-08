import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { jordan } from "../assets";
// import { ComputerCanvas } from "./canavs";

const Hero = () => {
  return (
    <section className="relative w-full h-screen  mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 gap-5 top-[80px] max-w-7xl mx-auto flex flex-row items-start`}
      >
        {/* shooting star */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* shooting star */}

        <div className="w-full h-screen flex">
          <div className="flex flex-col items-center w-full h-full justify-start space-y-16">
            <div className="flex flex-col items-start gap-1">
              <div>
                <h1 className={`${styles.heroHeadText} px-5`}>
                  Hi, I'm <span className="gold">Jordan</span>
                </h1>
              </div>
              <p
                className={`${styles.heroSubText} inline-block sm:flex-wrap text-white-100 p-4 rounded-xl hover:shadow-xl backdrop-blur-sm bg-gray-400/50 border-gray-800/50 border`}
              >
                I am a software developer currently searching
                <br className="sm:block hidden" /> for full time, remote
                development positions.
              </p>
            </div>
            <div className="w-full h-auto flex items-center justify-center">
            
            <img src={jordan} alt="logo" className="rounded-xl w-56 " />
            </div>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
