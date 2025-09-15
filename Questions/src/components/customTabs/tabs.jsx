import React, { useState } from "react" ; 
import "./styles.css" ;
const Tabs = ({tabsContent, onChange}) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0) ; 
    return(
        <div className="wrapper">
            <div className="heading">
                {tabsContent.map((tab, index)=>{
                    return(
                        <div className="tab" key = {index} onClick = {()=> {
                            setCurrentTabIndex(index)
                            onChange(index)
                            }} >
                            {tab.label}
                        </div>
                    )
                })}
            </div>
            <div className="content">
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    )
}

export default Tabs ;