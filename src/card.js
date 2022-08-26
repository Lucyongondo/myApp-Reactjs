import { render } from "@testing-library/react";
import React from "react";
function myCard() {
    const showname = "lucy";
    const arr = [];
     const fetchWeather = async () => {
        await fetch("")
    }
    return (
        <div>
            <h1> My name is {showname}</h1>
            {
                arr.map((test) => {
                    console.log(test)
                })
            }
        </div>
    );
   
}
export default myCard;