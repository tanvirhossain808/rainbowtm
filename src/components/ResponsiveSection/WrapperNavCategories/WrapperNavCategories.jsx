import "./WrapperNavCatagores.css"
import { MdCancel } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
const WrapperNavCategories = () => {
    return (
        <div className="wrapperNavContainer">
            <div className="wrapperResponsive">
                <div className="categoriesCrossIcon">
                    <MdCancel />
                </div>
                <ul className="categoriesListResponsiveContainer">
                    <li>
                        <span>
                            Art & Humanities
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
                    <li>Bitcoin Forums</li>
                    <li>Cardiovascular Training</li>
                    <li>Core Functions</li>
                    <li>Finance & Accounting</li>
                    <li>Functional Training</li>
                    <li>Information Technology</li>
                    <li>Personal Development</li>
                    <li>Quantum Chemistry</li>
                    <li>Risk Management</li>
                    <li>Strength TrainingS</li>
                </ul>
            </div>
        </div>
    );
};

export default WrapperNavCategories;