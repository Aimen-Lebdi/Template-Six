import styles from "../style";
import { logo } from "../assets/index";
import { footerLinks, socialMedia } from "../constants/index";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} flex-col md:flex-row mb-8 w-full `}>
        <div className=" flex flex-col flex-1 justify-start mr-10 ">
          <img
            src={logo}
            alt="logo"
            className=" w-[266px] h-[72px] object-contain "
          />
          <p className={`${styles.paragraph} max-w-[310px] mt-4 `}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className=" flex flex-row justify-between flex-wrap flex-[1.5] w-full mt-10 md:mt-0 ">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className=" flex flex-col min-w-[150px] my-4 ss:my-0 "
            >
              <h4 className=" font-poppins font-medium text-[18px] leading-[27px] text-white ">
                {" "}
                {footerLink.title}{" "}
              </h4>
              <ul className=" list-none mt-4 ">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.key}
                    className={` font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary duration-300 ${index !== footerLink.links.length -1 ? 'mb-4':'mb-0'} `}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3F3E45] " >
        <p className=" font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite " >Copyright
        2021 HooBank. All Rights Reserved.</p>
        <div className=" flex flex-row mt-6 md:mt-0 " >
          {socialMedia.map((social,index)=>(
            
            <img key={social.id} src={social.icon} alt={social.id}  className={` w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6':'mr-0'} `} />
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
