import { CiViewList } from "react-icons/ci";
import "./Courses.css"

const Courses = () => {
    return (
        <>
            <div className="coursesContainer" onMouseEnter={() => console.log("hey")}>
                <div className="coursesHeroSection">
                    <div className="courseHeroSectionContainer">
                        <h4>Developer hub</h4>
                        <div className="courseHeroSectionTitle">
                            <p>
                                Start building fast, with code samples, key resources and more.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="coursesMain">
                    <div className="courseContainer">
                        <div className="courseMenuList">
                            <h3 className="rbt-short-title">COURSE LAYOUT</h3>
                            <ul className="mega-menu-item ps-0 mb-0">
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/" target="_self">
                                        Filter One Toggle
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?show_archive_filter=yes" target="_self">
                                        Filter One Open
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?course_filter_layout=layout-2" target="_self">
                                        Filter Two Toggle
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?course_filter_layout=layout-2&amp;show_archive_filter=yes" target="_self">
                                        Filter Two Open
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?show_orderby_front=yes&amp;enable_filter=no&amp;show_archive_tab=yes" target="_self">
                                        Course With Tab
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?enable_filter=yes&amp;show_archive_tab=yes&amp;course_filter_layout=layout-2" target="_self">
                                        Course With Tab Two
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?enable_filter=yes&amp;show_archive_tab=yes&amp;course_filter_layout=layout-2&amp;show_archive_filter=yes" target="_self">
                                        Course Tab Two Open
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_self">
                                        Filter Off-canvas             <span className="rbt-badge-card"> Coming </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="courseMenuList">
                            <h3 className="rbt-short-title">COURSE LAYOUT</h3>
                            <ul className="mega-menu-item ps-0 mb-0">
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses" target="_self">
                                        Course Card Three
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses" target="_self">
                                        Course Masonry
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?course_filter_layout=layout-4" target="_self">
                                        Course Left  Sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?course_filter_layout=layout-3" target="_self">
                                        Course Right  Sidebar
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/js-zero-to-mastery/" target="_self">
                                        Course Details
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/basics-of-histudy-theme/?course_single_layout=layout-2" target="_self">
                                        Course Details Two                                                                            <span className="rbt-badge-card"> New </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/basics-of-histudy-theme/lesson/mp4-file/" target="_self">
                                        Course Lesson<span className="rbt-badge-card"> New </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_self">
                                        Course Details Three   <span className="rbt-badge-card"> Coming </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="courseMenuList">
                            <h3 className="rbt-short-title">COURSE LAYOUT</h3>
                            <ul className="mega-menu-item ps-0 mb-0">
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?card_layout=layout-1&amp;archive_course_column=3" target="_self">
                                        Layout One
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?card_layout=layout-2&amp;archive_course_column=3" target="_self">
                                        Layout Two                                                                            <span className="rbt-badge-card"> New </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?card_layout=layout-3&amp;archive_course_column=2" target="_self">
                                        Layout Three                                                                            <span className="rbt-badge-card"> New </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?card_layout=layout-4&amp;archive_course_column=1&amp;view=grid" target="_self">
                                        Layout Four                                                                            <span className="rbt-badge-card"> New </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?card_layout=layout-5&amp;archive_course_column=3" target="_self">
                                        Layout Five                                                                            <span className="rbt-badge-card"> New </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://rainbowthemes.net/themes/histudy/courses/?card_layout=layout-6&amp;archive_course_column=3" target="_self">
                                        Layout Six                                                                            <span className="rbt-badge-card"> New </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_self">
                                        Layout Seven                                                                            <span className="rbt-badge-card"> Coming </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_self">
                                        Layout Eight <span className="rbt-badge-card"> Coming </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="e-con-inner">
                        <div className="elementor-element ">
                            <div className="elementor" data-id="0d8293f" data-element_type="widget" data-widget_type="icon-list.default">
                                <div className="elementor-widget-container">
                                    <a rel="stylesheet" href="https://rainbowthemes.net/themes/histudy/wp-content/uploads/elementor/css/custom-widget-icon-list.min.css?ver=1718008676">	</a>	<ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <a href="https://rainbowthemes.net/themes/histudy/admission-guide">

                                                <span className="elementor-icon-list-icon">
                                                    <CiViewList className="rbt feather-folder-minus" />				</span>
                                                <span className="elementor-icon-list-text"> Quick Start Guide</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://rainbowthemes.net/themes/histudy/contact-page/">

                                                <span className="elementor-icon-list-icon">
                                                    <CiViewList className="rbt feather-folder-minus" />				</span>
                                                <span className="elementor-icon-list-text"> API Status</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element" data-id="ec998c1" data-element_type="container">
                            <div className="elementor" data-id="af8a763" data-element_type="widget" data-widget_type="icon-list.default">
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <a href="https://rainbowthemes.net/themes/histudy/admission-guide">

                                                <span className="elementor-icon-list-icon">
                                                    <CiViewList className="rbt feather-folder-minus" />				</span>
                                                <span className="elementor-icon-list-text"> Quick Start Guide</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://rainbowthemes.net/themes/histudy/contact-page/">

                                                <span className="elementor-icon-list-icon">
                                                    <CiViewList className="rbt feather-folder-minus" />				</span>
                                                <span className="elementor-icon-list-text"> API Status</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element">
                            <div className="elementor" data-id="7539887" data-element_type="widget" data-widget_type="icon-list.default">
                                <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <a href="https://rainbowthemes.net/docs/histudy-wp/">

                                                <span className="elementor-icon-list-icon">
                                                    <CiViewList className="rbt feather-folder-minus" />				</span>
                                                <span className="elementor-icon-list-text">Documentation</span>
                                            </a>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <a href="https://support.rainbowit.net/support/">

                                                <span className="elementor-ico  n-list-icon">
                                                    <CiViewList className="rbt feather-folder-minus" />				</span>
                                                <span className="elementor-icon-list-text">Create a Ticket</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Courses;
