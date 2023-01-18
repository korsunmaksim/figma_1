import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function Footer() {
  const [theme] = useContext(ThemeContext);
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10 ">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain bg-primary rounded-full p-1"
          />
          <p
            className={`${styles.paragraph}  ${
              theme ? "text-white" : "text-primary"
            } mt-5 max-w-[310px]`}
          >
            A new way to make the payments
            <br className="sm:block hidden" /> easy, reliable and secure.
          </p>
        </div>
        <div
          className="flex-[1.5] w-full flex flex-row justify-between 
        flex-wrap md:mt-0 mt-10"
        >
          {footerLinks.map((link) => (
            <div
              key={link.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4
                className={`font-poppins font-medium text-[18px]  ${
                  theme ? "text-white" : "text-primary"
                } leading-[72px]`}
              >
                {link.title}
              </h4>
              <ul className="list-none mt-4">
                {link.links.map((l, index) => (
                  <li
                    key={l.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px]
                  text-dimWhite  hover:text-secondary cursor-pointer  ${
                    theme ? "text-white" : "text-primary"
                  } ${index !== link.links.length - 1 ? "mb-4 " : "mb-0"}`}
                  >
                    {l.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full flex justify-between flex-row items-center 
      md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"
      >
        <p
          className={`font-poppins font-normal text-center  ${
            theme ? "text-white" : "text-primary"
          } text-[18px] leading-[72px] `}
        >
          2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 bg-primary rounded-full p-3">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt="social_id"
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
