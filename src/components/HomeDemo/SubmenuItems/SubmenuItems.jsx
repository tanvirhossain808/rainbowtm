/* eslint-disable react/prop-types */
import "./SubmenuItems.css"
const SubmenuItems = ({ name, src }) => {
    return (
        <div className="dropdown-child-list">
            <a href={src}>{name}</a>
        </div>
    );
};

export default SubmenuItems;