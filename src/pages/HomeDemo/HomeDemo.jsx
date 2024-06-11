import { AiOutlineInstagram } from "react-icons/ai";
import "./HomeDemo.css"
import { FaChevronDown, FaFacebookF, FaInstagramSquare, FaPhoneAlt, FaTwitter } from "react-icons/fa";
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
                                <a>
                                    <img src="https://rainbowthemes.net/themes/histudy/wp-content/themes/histudy/assets/images/icons/en-us.png" alt="" />
                                    <span>English</span>
                                    <span>
                                        <FaChevronDown />
                                    </span>
                                </a>
                                <a>
                                    <span>USD</span>
                                    <span>
                                        <FaChevronDown />
                                    </span>
                                </a>
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
                                        <li className="navHover">
                                            Demos
                                            <FaChevronDown />
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
            </header >
        </>
    );


};

export default HomeDemo;