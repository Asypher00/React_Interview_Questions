import React, { useState, useEffect } from "react";
import "./styles.css";
const LoadMoreData = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [errorMsg, setErrorMsg] = useState("");
    const [disabled, setDisabled] = useState(false);
    const fetchData = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${20 * count}`);
            const data = await res.json();
            if (data && data.products) {
                setProducts(prev => [...prev, ...data.products]);
                setLoading(false);
                console.log(data);
            } else {
                setErrorMsg("No Products Found");
            }
        } catch (error) {
            setErrorMsg(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [count]);

    useEffect(() => {
        if (products.length >= 100)
            setDisabled(true);
    }, [products]);

    if (loading) {
        return (
            <h1>Loading... Please Wait</h1>
        )
    }

    if (errorMsg && errorMsg !== "") {
        return (
            <h1>{errorMsg}</h1>
        )
    }
    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products && products.length
                        ? products.map((prod) => {
                            return (
                                <div className="product" key={prod.id}>
                                    <img src={prod.thumbnail} alt={prod.title} />
                                    <p>{prod.title}</p>
                                </div>
                            )
                        })
                        : null
                }
            </div>
            <div className="button-container">
                <button disabled={disabled} onClick={() => {
                    setCount((prev) => prev + 1)
                    console.log(count);
                }}>Load More</button>
                {
                    disabled && <div> You have reached the end of Products</div>
                }
            </div>
        </div>
    )
}

export default LoadMoreData; 