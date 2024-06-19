import "./WrapperNavCatagores.css"
import { MdCancel } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
const WrapperNavCategories = () => {
    return (
        <div className="wrapperNavContainer">
            <div className="wrapperResponsive">
                <div className="categoriesCrossIcon">
                    <button>
                        <MdCancel />
                    </button>
                </div>
                <ul className="categoriesListResponsiveContainer">
                    <li>
                        <span>
                            <a href=""> Art & Humanities</a>

                            <FaMinus />
                            <IoMdAdd />
                        </span>
                        <div className="responsiveSubCategory">
                            <ul>
                                <li>Dance</li>
                                <li>Drama</li>
                                <li>Eastern Philosophy</li>
                                <li>Fiction</li>
                                <li>Medieval History</li>
                                <li>Modern History</li>
                                <li>Music</li>
                                <li>Ancient History</li>
                                <li>Opera</li>
                                <li>Photography</li>
                                <li>Poetry</li>
                                <li>Printmaking</li>
                                <li>Sales Marketing</li>
                                <li>Theater</li>
                                <li>Western Philosophy</li>
                            </ul>
                        </div>
                    </li>
                    <li> <span>
                        <a href="">Bitcoin Forums</a>
                    </span></li>
                    <li>
                        <span>
                            <a href="">Cardiovascular Training</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="">Core Functions</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href=""> Finance & Accounting</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="">Functional Training</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="">Information Technology</a>
                        </span></li>
                    <li>
                        <span>
                            <a href="">Personal Development</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="">Quantum Chemistry</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="">Risk Management</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="">Strength TrainingS</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WrapperNavCategories;