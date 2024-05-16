import { SiFiverr } from "react-icons/si";
import { FaBehance, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Socials = () => {
  const socials = [
    {
      icon: <SiFiverr size={55} />,
      link: "https://www.fiverr.com/s/yzzNb5",
    },
    {
      icon: <FaBehance size={37} />,
      link: "https://www.behance.net/dianazu3",
    },
    {
      icon: <FaInstagram size={39} />,
      link: "https://www.instagram.com/zu.diana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-8">
      {socials.map((social, index) => (
        <Link key={index} href={social.link} target="_blank" className="hover:text-primary hover:scale-[1.15] transition-all duration-500 ease-in-out">
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
