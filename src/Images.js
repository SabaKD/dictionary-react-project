import React from "react";

export default function Images(props){
    
    if(props.image.length){
    return (
    <div>
        <h2 className="titleForImageSection">Images Related <strong>{props.keyword}</strong></h2>
        <div className="images">
            {props.image.map(function (eachImage, index){
                    if(index<5){
                    return (
                        <span key={index}>
                           <img src={eachImage.src.landscape} alt={props.keyword} className="image"/>
                        
                        </span>

                    );} else return null
                })}
            
        </div>
    </div>);
    } else return (
        <h2 className="titleForImageSection">OOPS! No Images for <strong>{props.keyword}</strong></h2>
    )
}