import "./HomeCategory.css"
import { artHumanities, bitCoinsForms } from "../../../data/categorySubmenuItems";
import SubmenuItems from "../SubmenuItems/SubmenuItems";
const HomeCategory = () => {
    return (
        <>
            <div className="categoryListContainer">
                <div className="categoryLists">
                    <ul className="cList">
                        <li>
                            <a href="https://rainbowthemes.net/themes/histudy/course-category/art-humanities/?tutor-course-filter-category=27">Art & Humanities</a>
                            <div className="dropDownCategoryList">
                                <h3 className="rbt-short-title">Category Submenu Items</h3>
                                <div className="child-inner">
                                    {artHumanities.map((item) => <SubmenuItems key={item.id} name={item.name} src={item.src} />)}
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="https://rainbowthemes.net/themes/histudy/course-category/bitcoin-forums/?tutor-course-filter-category=107">Bitcoin Forums</a>
                            <div className="dropDownCategoryList">
                                <h3 className="rbt-short-title">Category Submenu Items</h3>
                                <div className="child-inner">
                                    {bitCoinsForms.map((item) => <SubmenuItems key={item.id} name={item.name} src={item.src} />)}
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="https://rainbowthemes.net/themes/histudy/course-category/cardiovascular-training/?tutor-course-filter-category=82">Cardiovascular Training</a>
                        </li>
                        <li><a href="https://rainbowthemes.net/themes/histudy/course-category/core-functions/?tutor-course-filter-category=188">Core Functions</a>

                        </li>
                        <li>
                            <a href="https://rainbowthemes.net/themes/histudy/course-category/core-functions/?tutor-course-filter-category=188">Finance & Accounting</a>
                        </li>
                        <li>
                            <a href="https://rainbowthemes.net/themes/histudy/course-category/core-functions/?tutor-course-filter-category=188">Functional Training</a>
                        </li>
                        <li>
                            <a href="https://rainbowthemes.net/themes/histudy/course-category/core-functions/?tutor-course-filter-category=188"> Information Technology</a>
                            <div className="dropDownCategoryList">
                                <h3 className="rbt-short-title">Category Submenu Items</h3>
                                <div className="child-inner">
                                    {bitCoinsForms.map((item) => <SubmenuItems key={item.id} name={item.name} src={item.src} />)}
                                </div>
                            </div>

                        </li>
                        <li>
                            <a href="https://rainbowthemes.net/themes/histudy/course-category/core-functions/?tutor-course-filter-category=188">Personal Development</a>
                        </li>
                        <li>
                            <a href="https://rainbowthemes.net/themes/histudy/course-category/core-functions/?tutor-course-filter-category=188">  Quantum Chemistry</a>
                        </li>
                        <li>
                            <a href="https://rainbowthemes.net/themes/histudy/course-category/core-functions/?tutor-course-filter-category=188">Risk Management</a>
                        </li>
                        <li>
                            <a href="https://rainbowthemes.net/themes/histudy/course-category/core-functions/?tutor-course-filter-category=188">Strength Training</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HomeCategory;