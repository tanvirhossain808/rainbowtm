import { CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosMenu, IoLogoLinkedin } from "react-icons/io";
import Help from "../../Help/Help";
import { FaArrowRight, FaChevronDown, FaFacebookF, FaInstagramSquare, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import Blog from "../../Blog/Blog";
import Elements from "../../Elements/Elements";
import PagesNavbar from "../../pagesNavbar/PagesNavbar";
import Courses from "../../Courses/Courses";
import HomeCategory from "../HomeCategory/HomeCategory";
import { IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { useState } from "react";
import WrapperNavCategories from "../../ResponsiveSection/WrapperNavCategories/WrapperNavCategories";



const HomeDemoHeader = () => {
    const [showActiveWrapper, setShowActiveWrapper] = useState(false)
    const [isCourseHovered, setIsCourseHovered] = useState(false)

    const coursesHoverIn = () => {
        !isCourseHovered && setIsCourseHovered(true)

    }
    const coursesHoverOut = () => {
        isCourseHovered && setIsCourseHovered(false)
    }
    return (
        <header>

            <div className="responsiveWrapper">
                <WrapperNavCategories showSidebar={showActiveWrapper} setShowSidebar={setShowActiveWrapper} />
            </div>
            <div className="topHeaderContainer">
                <div className="topHeader container">
                    <ul className="topHeaderInfo">
                        <li>
                            <a>
                                <AiOutlineInstagram className="topheaderIcons" />
                                <span className="headerSocialLinks">100k
                                    Followers</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <FaFacebookF className="topheaderIcons" />

                                <span className="headerSocialLinks">500k
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
                        <span className="hot">
                            Hot
                        </span>
                        <span className="handImo">
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
                        <div className="HeaderLogoCategoryContainer">
                            <div className="headerLogo">
                                <Link to="/">
                                    <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/02/logo.png" alt="hit study" width={50} height={50} />
                                </Link>
                                <div className="headerCategory categoryBtn">
                                    <div className="categoryContainer">
                                        <IoGridOutline />
                                        <span>Category</span>
                                    </div>
                                    <div className="category">
                                        <HomeCategory />
                                    </div>
                                </div>
                                <div className="responsiveWrapperCategories" onClick={() => setShowActiveWrapper(true)}>
                                    <IoGridOutline />
                                </div>
                            </div>

                        </div>
                        <div className="headerNavMenu">
                            <nav>
                                <ul>
                                    <li className="navHover demosContainer">
                                        <a href="/">Demos
                                            <FaChevronDown />
                                        </a>
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
                                    <li className="navHover courseHover" onMouseEnter={coursesHoverIn}
                                        onMouseLeave={coursesHoverOut}
                                    >
                                        <a href="https://rainbowthemes.net/themes/histudy/courses">Courses
                                            <FaChevronDown />
                                        </a>
                                        <div className={`courses ${isCourseHovered ? "expand" : ""}`}
                                        >
                                            <Courses />
                                        </div>
                                    </li>
                                    <li className="navHover pages">
                                        <a href="">
                                            Pages
                                            <FaChevronDown />
                                        </a>

                                        <div className="pagesNavbarContainer">
                                            <PagesNavbar />
                                        </div>
                                    </li>
                                    <li className="navHover elements">
                                        <a href="">
                                            Elements
                                            <FaChevronDown />
                                        </a>
                                        <Elements />
                                    </li>
                                    <li className="navHover elements">
                                        <a href="">
                                            Blog
                                            <FaChevronDown />
                                        </a>
                                        <div className="blogContainer">
                                            <Blog />
                                        </div>

                                    </li>
                                    <li className="navHover help">
                                        <a href="">
                                            Help
                                            <FaChevronDown />
                                        </a>
                                        <div className="HelpContainer">
                                            <Help />
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="middleHeaderRight">
                            <ul className="rightSection">
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
                            <div className="headerNavBtns">
                                <IoIosMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </header >
    );
};

export default HomeDemoHeader;