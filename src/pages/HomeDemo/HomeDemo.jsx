import { AiOutlineInstagram } from "react-icons/ai";
import "./HomeDemo.css"
import { FaChevronDown, FaFacebookF, FaInstagramSquare, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

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
            </header >
        </>
    );


};

export default HomeDemo;