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
    desc:"پوشش خسارت های ناشی از مسئولیت های شغلی و حرفه ای",
    icon: <FaShieldAlt size={20} className="text-insurance" />,
    img: "images/IMG_9040.PNG",
  },
  {
    id: 2,
    title: "بیمه عمر",
    desc: "پوشش سرمایه گذاری برای آینده و حوادث احتمالی",
    icon: <FaHeartbeat size={20} className="text-insurance" />,
  },
  {
    id: 3,
    title: "بیمه آتش سوزی",
    desc: "پوشش خسارت های ناشی از آتش سوزی برای منزل و اموال",
    icon: <FaHome size={20} className="text-insurance" />,
  },
  {
    id: 4,
    title: "بیمه اتومبیل",
    desc: "پوشش خسارت های خودرو و حوادث رانندگی",
    icon: <FaCarSide size={20} className="text-insurance" />,
  },

  {
    id: 5,
    title: "بیمه مسافرتی",
    desc: "پوشش هزینه ها و حوادث احتمالی در سفر",
    icon: <IoIosAirplane size={20} className="text-insurance" />,
  },

  {
    id: 6,
    title: "بیمه درمانی",
    desc: "پوشش هزینه های درمان و خدمات پزشمی",
    icon: <FaRegHospital size={20} className="text-insurance" />,
  },

  {
    id: 7,
    title: "بیمه حمل و نقل",
    desc: "پوشش خسارت های مربوط به حمل و نقل و باربری",
    icon: <FaTruck size={20} className="text-insurance" />,
  },
  {
    id: 8,
    title: "بیمه پزشکان",
    desc: "پوشش مسئولیت حرفه ای پزشکان و پیراپزشکان",
    icon: <FaBriefcaseMedical size={20} className="text-insurance" />,
  },
];

export { services };
