import React from "react" ; 
import MenuItem from "./menuItem";
const MenuList = ({list=[]}) => {

    return(
        <div className="menu-list-container">
            {
                list && list.length
                ? list.map((item, index)=>{
                    return (
                        <ul>
                            <MenuItem key={index} item={item}/>
                        </ul>
                        
                    )
                })
                : null
            }

        </div>
    )
}

export default MenuList;