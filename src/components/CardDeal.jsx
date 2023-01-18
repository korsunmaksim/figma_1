import { useContext } from "react";
import { card } from "../assets";
import { ThemeContext } from "../context/themeContext";
import styles, { layout } from "../style";
import Button from "./Button";

function CardDeal() {
  const [theme] = useContext(ThemeContext);
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2
          className={`${styles.heading2} ${
            theme ? "text-white" : "text-primary"
          }`}
        >
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p
          className={`${styles.paragraph}  ${
            theme ? "text-white" : "text-primary"
          } max-w-[470px] mt-5`}
        >
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles={`mt-10`} />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default CardDeal;
