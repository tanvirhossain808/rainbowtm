import { AiOutlineInstagram } from "react-icons/ai";
import "./HomeDemo.css"
import { FaArrowRight, FaChevronDown, FaFacebookF, FaInstagramSquare, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";
import { CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";

const HomeDemo = () => {
    return (
        <>
            <header>
                <div className="topHeaderContainer">
                    <div className="topHeader container">
                        <ul className="topHeaderInfo">
                            <li>
                                <a>
                                    <AiOutlineInstagram className="topheaderIcons" />
                                    <span>100k
                                        Followers</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaFacebookF className="topheaderIcons" />

                                    <span>500k
                                        Followers</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <FaPhoneAlt className="topheaderIcons" />
                                    <span>+1-202-555-0174</span>
                                </a>
                            </li>
                        </ul>
                        <div className="topHeaderInfo topHeaderMiddleInfo">
                            <span>
                                Hot
                            </span>
                            <span>
                                <img src="https://rainbowit.net/html/histudy/assets/images/icons/hand-emojji.svg" alt="handImage" width={22} />
                                <span>Intro price. Get Histudy for Big Sale -95% off.</span>
                            </span>
                        </div>
                        <div className="topHeaderInfo topHeaderRightInfo">
                            <div>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/"><FaFacebookF className="topheaderIcons" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/"><FaTwitter className="topheaderIcons" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/"><IoLogoLinkedin className="topheaderIcons" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/"><FaInstagramSquare className="topheaderIcons" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topHeaderLine"></div>
                            <div className="topHeaderLan">
                                <div className="language">
                                    <img src="https://rainbowthemes.net/themes/histudy/wp-content/themes/histudy/assets/images/icons/en-us.png" alt="" />
                                    <span>English</span>
                                    <span className="iconRotate">
                                        <FaChevronDown />
                                    </span>
                                    <ul>
                                        <li>
                                            <img src="	https://rainbowthemes.net/themes/histudy/wp-content/themes/histudy/assets/images/icons/fr.png" alt="franceFlag" />
                                            <span>Français</span>
                                        </li>
                                        <li>
                                            <img src="https://rainbowthemes.net/themes/histudy/wp-content/themes/histudy/assets/images/icons/de.png" alt="=dutchFlag" />
                                            <span>
                                                Deutsch
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="currency">
                                    <span>USD</span>
                                    <span className="iconRotate">
                                        <FaChevronDown />
                                    </span>
                                    <ul>
                                        <li>
                                            <span>EUR</span>
                                        </li>
                                        <li>
                                            <span>GBP</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middleHeader">
                    <div className="middleHeaderContainer container">
                        <div className="middleHeaderDetails mainMenu">
                            <div className="headerLogo">
                                <Link to="/">
                                    <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/02/logo.png" alt="hit study" width={50} height={50} />
                                </Link>
                                <div className="headerCategory categoryBtn">
                                    <IoGridOutline />
                                    <span>Category</span>
                                </div>
                            </div>
                            <div className="headerNavMenu">
                                <nav>
                                    <ul>
                                        <li className="navHover demosContainer">
                                            Demos
                                            <FaChevronDown />
                                            <div className="">
                                                <div className="thumbNails">
                                                    <div className="thumbNail">
                                                        <div className="demos">
                                                            <a href="https://rainbowthemes.net/themes/histudy/" target="_blank">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h1.webp" alt="Home" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/">
                                                                <h4 className="content">
                                                                    Home
                                                                </h4>
                                                                <span><FaArrowRight /></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="marketPlace">
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-marketplace/" target="_blank">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h12.webp" alt="market place" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-marketplace/">
                                                                <h4>Market place</h4>
                                                                <span><FaArrowRight /></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="kintergarten">
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-kindergarden/">
                                                                <img src="	https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h4.webp" alt="kindergarten" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-kindergarden/" target="_blank">
                                                                <h4>
                                                                    kintergarten
                                                                </h4>
                                                                <span><FaArrowRight /></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="universityClass">
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-university-classic/" target="_blank">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h13.webp" alt="university class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-university-classic/" target="_blank">
                                                                <h4>University Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-elegant/" target="_blank">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h14.webp" alt="Home elegant" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-elegant/">
                                                                <h4>Home Elegant</h4>
                                                                <span><FaArrowRight /></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="gymCoaching">
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-elegant/" alt="Gym Coaching">
                                                                <img src="	https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h9.webp" alt="
                                Gym Coaching" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-elegant/" alt="Gym Coaching" target="_blank">
                                                                <h4>Gym Coaching</h4>
                                                                <span><FaArrowRight /></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="thumbNail">
                                                        <div className="onlineClass">
                                                            <a href="">
                                                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                                                            </a>
                                                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                                                <h4 className="title">Online Class</h4>
                                                                <span>
                                                                    <FaArrowRight />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="navHover">
                                            Courses
                                            <FaChevronDown />
                                        </li>
                                        <li className="navHover">
                                            Pages
                                            <FaChevronDown />
                                        </li>
                                        <li className="navHover">
                                            Elements
                                            <FaChevronDown />
                                        </li>
                                        <li className="navHover">
                                            Blog
                                            <FaChevronDown />
                                        </li>
                                        <li className="navHover">
                                            Help
                                            <FaChevronDown />
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="middleHeaderRight">
                                <ul>
                                    <li className="cartSearch">
                                        <CiSearch />
                                    </li>
                                    <li className="cartSearch cartNumber">
                                        <HiOutlineShoppingCart />
                                        <span>0</span>
                                    </li>
                                    <li className="adMinBtn">
                                        <CiUser className="navhvr" />
                                        <span className="navhvr">Admin</span>
                                    </li>
                                </ul>
                                <div className="headerCourseEnrBtn">
                                    <a href="https://themeforest.net/checkout/102753572/create_account" target="_blank">
                                        <span>Enroll now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                {/* remove */}
                {/* <div className="thumbNails container">
                    <div className="thumbNail">
                        <div className="demos">
                            <a href="https://rainbowthemes.net/themes/histudy/" target="_blank">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h1.webp" alt="Home" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/">
                                <h4 className="content">
                                    Home
                                </h4>
                                <span><FaArrowRight /></span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="marketPlace">
                            <a href="https://rainbowthemes.net/themes/histudy/home-marketplace/" target="_blank">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h12.webp" alt="market place" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-marketplace/">
                                <h4>Market place</h4>
                                <span><FaArrowRight /></span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="kintergarten">
                            <a href="https://rainbowthemes.net/themes/histudy/home-kindergarden/">
                                <img src="	https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h4.webp" alt="kindergarten" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-kindergarden/" target="_blank">
                                <h4>
                                    kintergarten
                                </h4>
                                <span><FaArrowRight /></span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="universityClass">
                            <a href="https://rainbowthemes.net/themes/histudy/home-university-classic/" target="_blank">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h13.webp" alt="university class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-university-classic/" target="_blank">
                                <h4>University Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div>
                            <a href="https://rainbowthemes.net/themes/histudy/home-elegant/" target="_blank">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h14.webp" alt="Home elegant" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-elegant/">
                                <h4>Home Elegant</h4>
                                <span><FaArrowRight /></span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="gymCoaching">
                            <a href="https://rainbowthemes.net/themes/histudy/home-elegant/" alt="Gym Coaching">
                                <img src="	https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h9.webp" alt="
                                Gym Coaching" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-elegant/" alt="Gym Coaching" target="_blank">
                                <h4>Gym Coaching</h4>
                                <span><FaArrowRight /></span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="thumbNail">
                        <div className="onlineClass">
                            <a href="">
                                <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/h3.webp" alt="Online class" />
                            </a>
                            <a href="https://rainbowthemes.net/themes/histudy/home-online-school/">
                                <h4 className="title">Online Class</h4>
                                <span>
                                    <FaArrowRight />
                                </span>
                            </a>
                        </div>
                    </div>
                </div> */}
            </header >
            <main className="heroSection">
                <div className="container">
                    <div className="">
                        df
                    </div>
                    <h3>This is for the div</h3>
                </div>
            </main>
        </>
    );


};

export default HomeDemo;