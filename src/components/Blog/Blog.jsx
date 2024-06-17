import "./Blog.css"

const Blog = () => {
    return (
        <div className="navElements blogs">
            <div className="navElementsList">
                <div>
                    <h3 className="rbt-short-title">BLOG STYLES</h3>
                    <ul className="navElementsContainer">
                        <li>
                            Blog List
                        </li>
                        <li>Blog Grid</li>
                        <li>Blog Grid Minimal</li>
                        <li>Blog With Sidebar</li>
                        <li>Blog Details</li>
                        <li>Post Formate Standard</li>
                        <li>Post Format Gallery</li>
                    </ul>
                </div>
                <div>
                    <h3 className="rbt-short-title">GET STARTED</h3>
                    <ul className="navElementsContainer">
                        <li>Post Format Quote</li>
                        <li>Post Format Audio</li>
                        <li>Post Format Video</li>
                        <li>Media Under Title <span>
                            Coming soon
                        </span>
                        </li>
                        <li>Sticky Sidebar <span>
                            Coming soon
                        </span>
                        </li>
                        <li>Auto Masonry <span>
                            Coming soon
                        </span>
                        </li>
                        <li>Meta Overlaid <span>
                            Coming soon
                        </span>
                        </li>
                    </ul>
                </div>
                <div className="" style={{ width: "100%" }}>
                    <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2023/12/mobile-cat.webp" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Blog;