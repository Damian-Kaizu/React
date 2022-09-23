import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"
import { AnimatedSocialIcon } from "react-animated-social-icons"
const Footer = () => {
  return (
    <section className={`footer ${styles.flexCenter} ${styles.paddingX} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-warp md:mt-0 mt-10 ">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className={`footerTitle font-conforta font-normal text-[18px] leading-[27px] text-white`}>{footerLink.title}</h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`footerLink font-conforta font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer
                ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className={`font-poppins font-normal text-center text-[18px] leading-[27px] text-white`}>2021 HooBonk. All Rights Reserved.</p>
        <div className="flex flex-row md:mt-0 mt-60">
          {/* {socialMedia.map((social,index)=>(
                    <div className=" flex flex-col md:mt-0 mt-60 mr-5 items-center justify-center ">
                    <img key={social.id} 
                      src={social.icon}
                      alt="icon" className={`items-center justify-center ${social.id} w-[21px] h-[21px] object-contain cursor-pointer hover:text-black`}/>
                      <span className={`hover:text-secondary text-white tooltip flex-start`} > {social.id}</span>
                    </div>
                  ))} */}
          {socialMedia.map((social, index) =>
          (
            <div className=" flex flex-col md:mt-0 mt-60 mr-5 items-center justify-center ">
              <AnimatedSocialIcon brandName={social.id}
                url={social.link}
                animation="float"
                defaultColor="#D1D1D1"
                hoverColor="cyan"
                width="1.5em"
                animationDuration={0.8}
              />
            </div>
          )
          )}
        </div>
      </div>
    </section>

  )
}

export default Footer