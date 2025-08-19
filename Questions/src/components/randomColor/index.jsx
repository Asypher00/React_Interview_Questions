import React, { useState, useEffect } from "react";

const RandomColor = () => {
    const [type, setType] = useState("hex");
    const [color, setColor] = useState("#000000");
    const colorUtility = (len) => {
        return Math.floor(Math.random() * len)
    }
    const hexGenerator = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[colorUtility(hex.length)];
        }
        setColor(hexColor);
        console.log(hexColor);
    };
    const rgbGenerator = () => {
        const r = colorUtility(256);
        const g = colorUtility(256);
        const b = colorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
        console.log(`rgb(${r},${g},${b})`);
    };

    useEffect(()=>{
        type === "hex" ? hexGenerator() : rgbGenerator();
    },[type])
    return (
        <div className="wrapper" style={{
            textAlign: "center",
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: color,
        }}>
            <button onClick={() => type === "hex" ? hexGenerator() : rgbGenerator()}>Generate Random Color</button>
            <button onClick={() => setType("hex")}>Generate HEX</button>
            <button onClick={() => setType("rgb")}>Generate RGB</button>
            <h3>{type} {color}</h3>
        </div>
    )
}

export default RandomColor;