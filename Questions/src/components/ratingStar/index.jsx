import React from 'react';
import { FaStar } from 'react-icons/fa';
import "./styles.css" ; 
const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = React.useState(null);
    const [hover, setHover] = React.useState(null);
    const handleClick = (index) => {
        setRating(index);
        console.log("rating", rating);
    }
    const handleMouseEnter = (index) => {
        setHover(index);
        console.log("hover", hover);
    }
    const handleMouseLeave = () => {
        setHover(rating) ; 
    }
    return (
        <div className="star-rating" style={{ fontSize: 40, textAlign: "center" }}>
            {
                [...Array(noOfStars)].map((star, index) => {
                    index += 1
                    return (
                        <FaStar
                            key={index}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            style={{ fontSize: 40, textAlign: "center" }}
                            className={index <= (hover || rating) ? "active" : "inactive"}
                        />
                    )
                })
            }
        </div>
    )

}

export default StarRating; 