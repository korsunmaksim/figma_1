import { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";

const ChangeThemeButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [marginLeft, setMarginLeft] = useState(0);
  return (
    <button
      className={`w-[50px] h-[28px] sm:mt-0 mt-5 rounded-full ${
        theme ? "bg-black" : "bg-blue-gradient"
      } pl-1 pr-1 mr-5 border-[2px] border-white`}
      onClick={() => {
        setTheme((prev) => !prev);
        theme ? setMarginLeft(0) : setMarginLeft(2);
      }}
    >
      <div
        className={`bg-white w-[24px] h-[24px]  rounded-full flex ${
          theme ? "ml-4" : "ml-0"
        }`}
      >
        {theme ? <img src="dark.png" /> : <img src="light.png" />}
      </div>
    </button>
  );
};

export default ChangeThemeButton;
