import styles from "../style";
import { discount, robot } from "../assets/index";
import { GetStarted } from "./index";
const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`right-side flex-1 flex-col xl:px-0 sm:px-16 px-6 ${styles.flexStart} `}
    >
      <div className="sub-title flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account{" "}
        </p>
      </div>
      <div className="title flex flex-row justify-between items-center w-full">
        <h1 className="text-white flex-1 font-poppins font-semibold text-[52px] ss:text-[72px] leading-[75px] ss:leading-[100px] ">
          The Next <br className="hidden sm:block " />
          <span className="text-gradient ">Generation</span>
        </h1>
        <div className=" hidden ss:flex mr-0 md:mr-4 ">
          <GetStarted />
        </div>
      </div>
      <h1 className="text-white font-poppins font-semibold text-[52px] ss:text-[65px] leading-[75px] ss:leading-[100px] ">
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470x] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div
      className={`left-side flex flex-1 ${styles.flexCenter} my-10 md:my-0 relative `}
    >
      <img
        src={robot}
        alt="robot"
        className=" w-[100%] h-[100%] relative z-[5]  "
      />
      <div className=" absolute w-[40%] h-[35%] z-[0] top-0 pink__gradient "></div>
      <div className=" absolute w-[80%] h-[80%] z-[1] bottom-40 rounded-full white__gradient "></div>
      <div className=" absolute w-[50%] h-[50%] z-[0] right-20 bottom-20 blue__gradient "></div>
    </div>
    <div className={` ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
