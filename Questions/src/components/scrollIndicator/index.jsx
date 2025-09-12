import React, { useState, useEffect } from "react";
import "./styles.css";
const ScrollIndicator = ({ url }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState("");
    const [handlePercentage, setHandlePercentage] = useState(0);

    const fetchUrl = async (link) => {
        try {
            const res = await fetch(link);
            const resJson = await res.json();
            if (resJson && resJson.products && resJson.products.length > 0) {
                setData(resJson.products);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setErrors(error);
        }
    }

    const handleScrollPercentage = () => {

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        console.log(height);
        const percentage = (howMuchScrolled / height) * 100;
        setHandlePercentage(percentage);
        console.log(handlePercentage);
    }





    useEffect(() => {
        fetchUrl(url);
    }, [url])

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);
        return (() => {
            window.removeEventListener("scroll", () => { });
        })
    })
    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div
                        className="current-progress-bar"
                        style={{ width: `${handlePercentage}%` }}
                    ></div>
                </div>
            </div>
            <div className="data-container">
                {data && data.length > 0
                    ? data.map((dataItem) => <p>{dataItem.title}</p>)
                    : null}
            </div>
        </div>
    );

}

export default ScrollIndicator; 