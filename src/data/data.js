import {
  FaCarSide,
  FaHeartbeat,
  FaHome,
  FaShieldAlt,
  FaTruck,
  FaRegHospital,
} from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { IoIosAirplane } from "react-icons/io";
const services = [
  {
    id: 1,
    title: "بیمه مسئولیت",
    desc: "آرامش در فعالیت های کاری",
    icon: <FaShieldAlt size={20} className="text-insurance" />,
    img: "images/IMG_9040.PNG",
  },
  {
    id: 2,
    title: "بیمه عمر",
    desc: "سرمایه گذاری برای آینده",
    icon: <FaHeartbeat size={20} className="text-insurance" />,
  },
  {
    id: 3,
    title: "بیمه آتش سوزی",
    desc: "حفاظت از منزل و سرمایه",
    icon: <FaHome size={20} className="text-insurance" />,
  },
  {
    id: 4,
    title: "بیمه اتومبیل",
    desc: "پوشش کامل خسارت های خودرو",
    icon: <FaCarSide size={20} className="text-insurance" />,
  },

  {
    id: 5,
    title: "بیمه مسافرتی  ",
    desc: "آرامش در سفر",
    icon: <IoIosAirplane size={20} className="text-insurance" />,
  },

  {
    id: 6,
    title: "بیمه درمانی  ",
    desc: "تسلی خاطر در زمان بیماری  ",
    icon: <FaRegHospital size={20} className="text-insurance" />,
  },

  {
    id: 7,
    title: "بیمه حمل و نقل",
    desc: "آرامش خاطر در باربری  ",
    icon: <FaTruck size={20} className="text-insurance" />,
  },
  {
    id: 8,
    title: "بیمه پزشکان",
    desc: "امنیت پزشکان و پیراپزشکان",
    icon: <FaBriefcaseMedical size={20} className="text-insurance" />,
  },
];

export { services };
