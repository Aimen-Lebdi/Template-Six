import styles from "../style";
import { arrowUp } from "../assets/index";
const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] p-[2px] rounded-full cursor-pointer bg-blue-gradient hover:translate-y-[-10px] hover:translate-x-[10px] duration-500 `}
    >
      <div
        className={`${styles.flexCenter} flex-col w-[100%] h-[100%]  rounded-full  bg-primary`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] ">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px] ">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
