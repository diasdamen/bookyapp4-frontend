import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";



const socials = [
  {
    icon: <FaYoutube />,
    href: "#",
  },
  {
    icon: <FaFacebook />,
    href: "#",
  },
  {
    icon: <FaInstagram />,
    href: "#",
  },
  {
    icon: <FaTwitter />,
    href: "#",
  },
]

const Footer = () => {
  return (
    <footer id="contacts" className="bg-primary py-[20px] lg:pt-[80px] lg:pb-[20px]">
      <div className="container mx-auto">
        {/* logo */}
        <div className="flex-1">
          <Link href="/">
            <Image 
              src="/assets/royalw.svg" 
              width={160} 
              height={160} 
              alt="Logo" 
            />
          </Link>
        </div>
        <div className="py-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {/* contacts */}
          <div className="flex-1">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4">
              Contacts
            </h4>
            <div className="flex items-center mb-4">
              <img src="/assets/phone.svg" alt="phone" className="w-[20px] h-[20px]" />
              <a className="pl-4 text-white" href="tel:+877788888888">+7 700 226 72 84</a>
            </div>
            <div className="flex items-center">
              <img src="/assets/email.svg" alt="email" className="w-[20px] h-[20px]" />
              <a className="pl-4 text-white" href="mailto:info@royal-hotel.com">info@royal-hotel.com</a>
            </div>
          </div>
          {/* location */}
          <div className="flex-1">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4">
              Location
            </h4>
            <div className="flex">
              <img src="/assets/place.svg" alt="location" className="w-[24px] h-[24px]" />
              <p className="pl-4 text-white">Kazakhstan, Almaty,<br/> Seifullin Ave 77</p>
            </div>
          </div>
          {/* socials */}
          <div className="flex-1">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4">
              Socials
            </h4>
            <div className="flex gap-4">
              {socials.map((item, index) => (
                <Link href={item.href} key={index} className="bg-accent hover:bg-accent-hover text-white text-lg w-[38px] h-[38px] flex items-center justify-center rounded-full transition-all">
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
          <p className="text-center text-[16px] leading-[24px] text-white">
            2024 AGIDEA Technologies. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer