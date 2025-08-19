import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import "./styles.css";
const ImageSlider = ({ url, limit = 5 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchImages = async (url) => {
        try {
            const res = await fetch(`${url}?page=1&limit=${limit}`);
            const data = await res.json();
            if (data) {
                console.log(data);
                setImages(data);
                setLoading(false);
            } else {
                setErrorMsg("No images found");
            }
        } catch (error) {
            setErrorMsg(error.message);
        }
    }

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url, limit])
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (errorMsg) {
        return <h1>{errorMsg}</h1>
    }

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }
    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
            {
                images && images.length
                    ? images.map((item, index) => {
                        return (
                            <img
                                src={item.download_url}
                                alt={item.download_url}
                                key={item.id}
                                className={index === currentSlide ? "current-image" : "current-image hide-current-image"}
                            />
                        )
                    })
                    : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
            <span className="indicator">
                {
                    images && images.length
                        ? images.map((item, index) => {
                            return (
                                <button key={index} className={index === currentSlide ? "current-indicator" : "current-indicator inactive-indicator"} onClick={() => {
                                    setCurrentSlide(index);
                                }}></button>
                            )
                        })
                        : null
                }
            </span>
        </div>
    )
}

export default ImageSlider;