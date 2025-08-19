import React, { useState } from 'react'
import data from "./data";
const SingleAccordian = () => {

    const [selected, setSelected] = useState();
    const handleSingleClick = (id) => {
        if(selected === id){
            setSelected(null);
        } else{
            setSelected(id) ; 
        }
    }
    return (
        <div className="wrapper" style={{ textAlign: "center" }}>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <div className="title">
                                        <h3>{item.question}</h3>
                                        <span cursor = "pointer" onClick={() => handleSingleClick(item.id)}>+</span>
                                    </div>
                                    {
                                        selected === item.id ? (
                                            <div className="extension">
                                                <p>{item.answer}</p>
                                            </div>
                                        ):null 
                                    }

                                </div>
                            )
                        })
                    ) : (<div>No Data Found</div>)
                }
            </div>

        </div>
    )
}

export default SingleAccordian; 