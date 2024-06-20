import "./WrapperNavCatagores.css"
import { MdCancel } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useRef, useState } from "react";
const WrapperNavCategories = () => {
    const [isShowSubCategory, setShowSubCategory] = useState({
        ["Art & Humanities"]: false,
        ["Bitcoin Forums"]: false,
        ["Cardiovascular Training"]: false,
        ["Core Functions"]: false,
        ["Finance & Accounting"]: false,
        ["Functional Training"]: false,
        ["Information Technology"]: false,
        ["Personal Development"]: false,
        ["Quantum Chemistry"]: false,
        ["Risk Management"]: false,
        ["Strength Trainings"]: false
    })
    const showSubCategory = (e, category, status = false) => {
        e.preventDefault()
        if (!status) {
            setShowSubCategory((pre) => {
                return {
                    ...pre, [category]: !pre[category]
                }
            })
            return
        }
        setShowSubCategory((pre) => {
            return {
                ...pre, [category]: status.status
            }
        })

    }
    const activeRef = useRef()
    const activeAccordion = (e) => {
        activeRef.current = e.currentTarget
        const subCategoryDiv = activeRef.current.children[1]
        if (subCategoryDiv.classList.contains("active")) {
            subCategoryDiv.classList.remove("active")
        }
        else {
            subCategoryDiv.classList.add("active")
        }
    }

    return (
        <div className="wrapperNavContainer">
            <div className="wrapperResponsive">
                <div className="categoriesCrossIcon">
                    <button>
                        <MdCancel />
                    </button>
                </div>
                <ul className="categoriesListResponsiveContainer">
                    <li onClick={(e) => {
                        activeAccordion(e)
                    }}>
                        <span>
                            <a href="" onClick={(e) => showSubCategory(e, "Art & Humanities")

                            }> Art & Humanities</a>
                            {
                                isShowSubCategory["Art & Humanities"] ? <FaMinus className="subAddCanIcons" onClick={(e) => showSubCategory(e, "Art & Humanities", { status: false })} /> : <IoMdAdd className="subAddCanIcons" onClick={(e) => showSubCategory(e, "Art & Humanities", { status: true })} />
                            }


                        </span>
                        <div className={`responsiveSubCategory`}>
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
                    <li onClick={(e) => {
                        activeAccordion(e)
                    }}>
                        <span>
                            <a href="" onClick={(e) => showSubCategory(e, "Cardiovascular Training")

                            }> Cardiovascular Training</a>
                            {
                                isShowSubCategory["Cardiovascular Training"] ? <FaMinus className="subAddCanIcons" onClick={(e) => showSubCategory(e, "Cardiovascular Trainings", { status: false })} /> : <IoMdAdd className="subAddCanIcons" onClick={(e) => showSubCategory(e, "Cardiovascular Training", { status: true })} />
                            }
                        </span>
                        <div className={`responsiveSubCategory`}>
                            <ul>
                                <li>Bitcoin Development</li>
                                <li>Bitcoin Fundamentals</li>
                                <li>Bitcoin Mining</li>
                                <li>Bitcoin vs. Ethereum</li>
                                <li>Blockchain Technology</li>
                                <li>Cryptocurrencies</li>
                                <li>Market Analysis</li>
                                <li>NFT Valuation</li>
                                <li>Price Valuation</li>
                                <li>Supply and Demand</li>
                                <li>Taxation of Bitcoin</li>
                                <li>Transaction Confirmation</li>
                                <li>Transaction Fees</li>
                                <li>Transaction Process</li>
                                <li>Wallets and Addresses</li>
                            </ul>
                        </div>
                    </li>
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
                            <a href="">Strength Trainings</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default WrapperNavCategories;