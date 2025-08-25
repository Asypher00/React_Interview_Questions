import React, { useState } from "react";
import MenuList from "./menuList";
const MenuItem = ({ item }) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="menu-list-container">
            <li>
                <p>{item.label} {
                    item && item.children && item.children.length > 0
                        ? <button onClick={() => {
                            setVisible((prev) => !prev)
                            console.log("hi");
                        }}>{ visible ? "-" : "+"}</button>
                        : null
                }
                </p>
                {
                    item && item.children && item.children.length > 0 && visible
                        ? <ul><MenuList list={item.children} /></ul>
                        : null
                }
            </li>
        </div>
    )
}

export default MenuItem;