import React, { useState } from 'react'
import data from "./data";
const MultipleAccordian = () => {

    const [selected, setSelected] = useState([]);
    const handleMultipleClick = (id) => {
        if(selected.includes(id)){
            setSelected(selected.filter((item) => item != id)) ; 
        } else{
            setSelected((prev)=> [...prev, id]) ; 
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
                                        <span style={{cursor: "pointer"}} onClick={() => handleMultipleClick(item.id)}>+</span>
                                    </div>
                                    {
                                        selected.includes(item.id) ? (
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

export default MultipleAccordian; 