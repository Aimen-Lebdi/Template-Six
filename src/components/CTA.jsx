import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col sm:flex-row rounded-[20px] box-shadow bg-black-gradient-2`}
  >
    <div className="flex flex-col flex-1">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className="">
      <Button />
    </div>
  </section>
);

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
