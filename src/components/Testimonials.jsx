import { feedback } from "../constants/index.js";
import styles from "../style.js";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="client"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className=" absolute z-0 w-[60%] h-[60%] right-[-50%] rounded-full blue__gradient " />
      <div className=" flex justify-between items-center w-full flex-col md:flex-row mb-6 sm:mb-16 relative z-[1] ">
        <h2 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className=" w-full mt-6 mb:mt-0 ">
          <p className={`${styles.paragraph} max-w-[450px] text-left `}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className=" flex flex-wrap justify-between sm:justify-start w-full relative z-[1] feedback-container ">
        {feedback.map((card)=>(
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
