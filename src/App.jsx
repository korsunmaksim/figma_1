import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/themeContext";

const App = () => {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div
        className={`${
          theme ? "bg-primary" : "bg-white"
        } w-full overflow-hidden`}
      >
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div
          className={`${theme ? "bg-primary" : "bg-white"} ${styles.flexStart}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div
          className={`${theme ? "bg-primary" : "bg-white"} ${styles.paddingX} ${
            styles.flexCenter
          }`}
        >
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
